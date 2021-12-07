import { getCustomRepository } from "typeorm";
import { AtuacaoRepositories } from "../repositories/AtuacaoRepository";

interface IAtuacaoService{
    id: string;
    atuacao: string;
}

class AtuacaoService{

    async execute({id, atuacao} : IAtuacaoService){
        
        const atuacaoRepository = getCustomRepository(AtuacaoRepositories);

        if(!id){
            throw new Error("Identificador incorreto!");
        }

        const idAlreadyExists = await atuacaoRepository.findOne({
            id,
        });

        if(idAlreadyExists){
            throw new Error("Identificador já existe!");
        }

        //Validação modalidade
        if(!atuacao){
            throw new Error("Insira um nome válido para atuacao!");
        }

        const atuacaoAlreadyExists = await atuacaoRepository.findOne({
            atuacao,
        });

        if(atuacaoAlreadyExists){
            throw new Error("atuacao já cadastrada!");
        }

        const modal = atuacaoRepository.create({
            id, atuacao
        })

        await atuacaoRepository.save(modal);

        return modal;

    }

    async showAtuacao(id: string){
        const atuacaoRepositories = getCustomRepository(AtuacaoRepositories);

        const atuacao = await atuacaoRepositories
        .createQueryBuilder("atuacao")
        .where("atuacao.id like :id", { id: `%${id}%` })
        .getOne();

        return atuacao
    }

}

export { AtuacaoService };