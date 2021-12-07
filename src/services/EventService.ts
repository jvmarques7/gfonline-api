import { getCustomRepository } from "typeorm";
import { EventRepositories } from "../repositories/EventRepository";
import { UserService } from "./UserService";

interface ICreateEvent{
    titulo: string,
    estado: string,
    decricao: string,
    tipo: string,
    data: string,
    atuacoes: string,
    modalidades: string,
    categorias: string
}

interface IControl{
    id: number,
    estado: string
}

class EventService{

    dataFormatada(){
      var data = new Date(),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
        return (anoF+"-"+mesF+"-"+diaF)
    }

    async execute({titulo, estado, decricao, tipo, data, atuacoes, modalidades, categorias} : ICreateEvent){
        
        const eventRepository = getCustomRepository(EventRepositories);

        const modal = eventRepository.create({
            titulo, estado, decricao, tipo, data, atuacoes, modalidades, categorias
        })

        await eventRepository.save(modal);

        return modal;

    }

    async show() {
        const eventsRepositories = getCustomRepository(EventRepositories);
    
        const events = await eventsRepositories.find();
    
        return events;
      }

    async filteringEventsIntranet(
      id: string,
      tipo: string,
      estado: string, 
      dt_inicial: string, 
      dt_final: string, 
      atuacoes: string,
      modalidades: string,
      categorias:string
      ) {
        const eventsRepositories = getCustomRepository(EventRepositories);
        
        if(dt_inicial === ""){
          dt_inicial = "2000-01-01";
        }
        if(dt_final === ""){
          dt_final = "2999-12-31"
        }

        const count = await eventsRepositories
          .createQueryBuilder("event")
          .where("event.atuacoes like :atuacoes", {atuacoes: `%${atuacoes}%`})
          .andWhere("event.modalidades like :modalidades", { modalidades: `%${modalidades}%`})
          .andWhere("event.categorias like :categorias", {categorias: `%${categorias}%`})
          .andWhere("event.estado like :estado", {estado: `%${estado}%`})
          .andWhere("event.tipo like :tipo", {tipo: `%${tipo}%`})
          .andWhere("event.id like :id", {id: `%${id}%`})
          .andWhere(`event.data between '${dt_inicial}' and '${dt_final}'`)
          .orderBy("event.id")
          .getCount()


        var pages = 0
        if(count > 0){
          pages = Math.ceil(count/5)
        }
        
        const events = [];

        let offset = 0

        for (let index = 0; index <= pages; index++) {
           events[index] = await eventsRepositories
            .createQueryBuilder("event")
            .where("event.atuacoes like :atuacoes", {atuacoes: `%${atuacoes}%`})
            .andWhere("event.modalidades like :modalidades", { modalidades: `%${modalidades}%`})
            .andWhere("event.categorias like :categorias", {categorias: `%${categorias}%`})
            .andWhere("event.estado like :estado", {estado: `%${estado}%`})
            .andWhere("event.tipo like :tipo", {tipo: `%${tipo}%`})
            .andWhere("event.id like :id", {id: `%${id}%`})
            .andWhere(`event.data between '${dt_inicial}' and '${dt_final}'`)
            .limit(5)
            .offset(offset)
            .orderBy("event.id")
            .getMany()

            offset =+ 5;
        }

          return {events, pages}
    }

      async filteringEventNotSigned(id: string, dt_inicial: string, dt_final: string, tipo: string) {
        const eventRepositories = getCustomRepository(EventRepositories);

        if(dt_inicial === ""){
          dt_inicial = "2000-01-01";
        }
        if(dt_final === ""){
          dt_final = "2999-12-31"
        }

        const userService = new UserService();

        const usersList = await userService.showById(id);

        const today = this.dataFormatada()

        const events = await eventRepositories
          .createQueryBuilder("event")
          .where("event.atuacoes like :atuacoes", {atuacoes: `%${usersList.atuacao_id}%`})
          .andWhere("event.modalidades like :modalidades", { modalidades: `%${usersList.modalidade_id}%`})
          .andWhere("event.categorias like :categorias", {categorias: `%${usersList.categoria_id}%`})
          .andWhere("event.estado like :estado", {estado: 'a'})
          .andWhere("event.tipo like :tipo", {tipo: `%${tipo}%`})
          .andWhere(`event.data between '${dt_inicial}' and '${dt_final}'`)
          .andWhere("event.data >= :today", {today: `${today}`})
          .orderBy("event.id")
          .getRawMany();

          // console.log(events)
          // console.log(id)
    
        return events;
      }

      async filteringEventSigned(id: string, dt_inicial: string, dt_final: string, tipo: string) {
        const eventRepositories = getCustomRepository(EventRepositories);

        if(dt_inicial === ""){
          dt_inicial = "2000-01-01";
        }
        if(dt_final === ""){
          dt_final = "2999-12-31"
        }

        const userService = new UserService();

        const usersList = await userService.showById(id);

        const today = this.dataFormatada()

        const events = await eventRepositories
          .createQueryBuilder("event")
          .leftJoinAndSelect("inscricao", "inscricao", "inscricao.evento_id = event.id")
          .leftJoin("users", "users", "users.id = inscricao.user_id")
          .where("event.atuacoes like :atuacoes", {atuacoes: `%${usersList.atuacao_id}%`})
          .andWhere("event.modalidades like :modalidades", { modalidades: `%${usersList.modalidade_id}%`})
          .andWhere("event.categorias like :categorias", {categorias: `%${usersList.categoria_id}%`})
          .andWhere("event.estado like :estado", {estado: 'a'})
          .andWhere("inscricao.user_id like :id", {id: `${id}`})
          .andWhere("event.tipo like :tipo", {tipo: `%${tipo}%`})
          .andWhere(`event.data between '${dt_inicial}' and '${dt_final}'`)
          .andWhere("event.data >= :today", {today: `${today}`})
          .orderBy("event.id")
          .getRawMany();

          // console.log(events)
    
        return events;
      }

      async filteringEventPartOf(id: string, dt_inicial: string, dt_final: string, tipo: string) {
        const eventRepositories = getCustomRepository(EventRepositories);

        if(dt_final === ""){
          const d = new Date();
          dt_final = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+(d.getDate()-1);
        }
        if(dt_inicial === ""){
          dt_inicial = "2000-01-01"
        }

        const userService = new UserService();

        const usersList = await userService.showById(id);

        const events = await eventRepositories
          .createQueryBuilder("event")
          .leftJoinAndSelect("inscricao", "inscricao", "inscricao.evento_id = event.id")
          .leftJoin("users", "users", "users.id = inscricao.user_id")
          .where("event.atuacoes like :atuacoes", {atuacoes: `%${usersList.atuacao_id}%`})
          .andWhere("event.modalidades like :modalidades", { modalidades: `%${usersList.modalidade_id}%`})
          .andWhere("event.categorias like :categorias", {categorias: `%${usersList.categoria_id}%`})
          .andWhere("event.estado like :estado", {estado: 'a'})
          .andWhere("inscricao.user_id like :id", {id: `${id}`})
          .andWhere("event.tipo like :tipo", {tipo: `%${tipo}%`})
          .andWhere(`event.data between '${dt_inicial}' and '${dt_final}'`)
          .orderBy("event.id")
          .getRawMany();

          // console.log(dt_inicial, dt_final)
          // console.log(events)
    
        return events;
      }

      async controll(event: IControl) {
        const eventRepository = getCustomRepository(EventRepositories);
        const res: Response = null;
    
          const controlEvent = await eventRepository.findOne(event.id);
          if(event.estado === "a"){
            controlEvent.estado = "d"
          }else{
            controlEvent.estado = "a"
          }
    
          const newEvent = await eventRepository.save(controlEvent);
    
          return {
            id: newEvent.id,
            estado: newEvent.estado
          };
      }

      async showEventById(id: string) {
        const eventRepositories = getCustomRepository(EventRepositories);
    
        const event = await eventRepositories
          .createQueryBuilder("event")
          .where("event.id like :id", { id: `${id}` })
          .getOne();

          

          // const newEvent = {
          //   id: event.id,
          //   titulo: event.titulo,
          //   descricao: event.decricao,
          //   tipo: event.tipo,
          //   data: event.data
          // }
        
        return event;
      }
    
      async deleteEvent(id: number) {
        const eventRepository = getCustomRepository(EventRepositories);
    
          const deleted = await eventRepository.delete(id)
          return deleted
      }

}

export {EventService}