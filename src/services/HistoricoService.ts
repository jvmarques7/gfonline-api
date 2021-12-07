import { getCustomRepository } from "typeorm";
import { EventRepositories } from "../repositories/EventRepository";
import { HistoricoRepository } from "../repositories/HistoricoRepository";

interface IHistorico{
    descricao: string,
    colocacao: number,
    user_id: string,
    event_id: string
}

class HistoricoService{

    async execute({descricao, colocacao, user_id, event_id}:IHistorico){
        const historicoRepository = getCustomRepository(HistoricoRepository);
        const eventRepository = getCustomRepository(EventRepositories);

        try{
            const event = await eventRepository.findOne(event_id);
                const titulo = event.titulo;
                const tipo = event.tipo;
                const data_evento = event.data;

            const historicoAlreadyExist = await historicoRepository
            .createQueryBuilder("historico")
            .where("historico.user_id like :user_id", {user_id: `${user_id}`})
            .andWhere("historico.titulo like :titulo", {titulo: `${titulo}`})
            .getOne()

            if(!historicoAlreadyExist){

                const historico = historicoRepository.create({
                    titulo, descricao, data_evento, colocacao, tipo, user_id
                })
        
                const res = await historicoRepository.save(historico)
        
                return res

            }else{
                throw new Error("Historico já cadastrado!")
            }

        }catch(err){
            throw new Error(err)
        }
        
    }

    async update(id: string, descricao: string, colocacao: number){
        const historicoRepository = getCustomRepository(HistoricoRepository);

        try{
            const historico = await historicoRepository.findOne(id);

            historico.descricao = descricao;
            historico.colocacao = colocacao;

            const newHistorico = historicoRepository.save(historico);
            return newHistorico;
        }catch(err){
            throw new Error(err);
        }

    }

    async listByUserId(user_id: string, dt_inicial: string, dt_final: string, colocacao: string, tipo: string){
        const historicoRepository = getCustomRepository(HistoricoRepository);

        if(dt_inicial === ""){
            dt_inicial = "2000-01-01 00:00:00";
          }
          if(dt_final === ""){
            dt_final = "2999-12-31 23:59:59"
          }

        const list = await historicoRepository
        .createQueryBuilder("historico")
        .where("historico.user_id like :user_id", {user_id: `${user_id}`})
        // .andWhere(`historico.data_evento between '${dt_inicial}' and '${dt_final}'`)
        // .andWhere("historico.colocacao like :colocacao", {colocacao: `%${colocacao}%`})
        .andWhere("historico.tipo like :tipo", {tipo: `%${tipo}%`})
        // .orderBy("historico.data_evento")
        .getMany()

        return list
    }

    async show(id: string){
        const historicoRepository = getCustomRepository(HistoricoRepository);
        try{
            const historico = historicoRepository.findOne(id)
            return historico;
        }catch(err){
            throw new Error(err)
        }
    }

    async removeHistorico(id: string){
        const historicoRepository = getCustomRepository(HistoricoRepository);

        try{
            const deleted = await historicoRepository.delete(id)
            return deleted
        }catch(err){
            throw new Error(err)
        }
    }

}

export {HistoricoService}