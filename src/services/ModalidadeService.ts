import { getCustomRepository } from "typeorm";
import { ModalidadeRepositories } from "../repositories/ModalidadeRepository";

interface IModalidadeService{
    id: string;
    modalidade: string;
}

class ModalidadeService{

    async execute({id, modalidade} : IModalidadeService){
        
        const modalidadeRepository = getCustomRepository(ModalidadeRepositories);

        if(!id){
            throw new Error("Identificador incorreto!");
        }

        const idAlreadyExists = await modalidadeRepository.findOne({
            id,
        });

        if(idAlreadyExists){
            throw new Error("Identificador já existe!");
        }

        //Validação modalidade
        if(!modalidade){
            throw new Error("Insira um nome válido para modalidade!");
        }

        const modalidadeAlreadyExists = await modalidadeRepository.findOne({
            modalidade,
        });

        if(modalidadeAlreadyExists){
            throw new Error("modalidade já cadastrada!");
        }

        const modal = modalidadeRepository.create({
            id, modalidade
        })

        await modalidadeRepository.save(modal);

        return modal;

    }

    async showModalidade(id: string){
        const modalidadeRepositories = getCustomRepository(ModalidadeRepositories);

        const modalidade = await modalidadeRepositories
        .createQueryBuilder("modalidade")
        .where("modalidade.id like :id", { id: `%${id}%` })
        .getOne();

        return modalidade
    }

}

export { ModalidadeService };