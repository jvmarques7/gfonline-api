import { getCustomRepository } from "typeorm";
import { InscricaoRepository } from "../repositories/InscricaoRepository";

class InscricaoService {

    async execute(user_id: string, evento_id: number){
        
        const inscricaoRepository = getCustomRepository(InscricaoRepository);

        try{

            const inscricaoAlreadyExists = await inscricaoRepository
            .createQueryBuilder('inscricao')
            .where('inscricao.user_id like :user_id', {user_id: `${user_id}`})
            .andWhere('inscricao.evento_id like :evento_id', {evento_id: `${evento_id}`})
            .getOne()
    
            if(inscricaoAlreadyExists){
                throw new Error("Inscrição já existe!");
            }

            const modal = inscricaoRepository.create({
                user_id, 
                evento_id
            })

            await inscricaoRepository.save(modal);

            return modal;

        }catch(err){
            throw new Error(err)
        }

    }

    async check(){
        const inscricaoRepository = getCustomRepository(InscricaoRepository);

        const verify = await inscricaoRepository
        .createQueryBuilder("inscricao")
        .getMany()

        return verify
    }

    async listByEvent(event_id: string){
        const inscricaoRepository = getCustomRepository(InscricaoRepository);

        const list = await inscricaoRepository
        .createQueryBuilder("inscricao")
        .addSelect("federacao.is_ativo", "federacao_is_ativo")
        .leftJoinAndSelect("users", "users", "users.id = inscricao.user_id")
        .leftJoin("federacao", "federacao", "users.id = federacao.user_id")
        .where("inscricao.evento_id like :event_id", {event_id: `%${event_id}%`})
        .getRawMany()

        return list
    }

    async remove(id: string){
        console.log(id) 
        const inscricaoRepository = getCustomRepository(InscricaoRepository);
        const deleted = await inscricaoRepository.delete(id)
        return deleted
          
    }


}

export {InscricaoService}