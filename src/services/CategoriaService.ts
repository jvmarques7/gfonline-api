import { getCustomRepository } from "typeorm";
import { CategoriaRepositories } from "../repositories/CategoriaRepository";

interface ICategoriaService{
    id: string;
    categoria: string;
}

class CategoriaService{

    async execute({id, categoria} : ICategoriaService){
        
        const categoriaRepository = getCustomRepository(CategoriaRepositories);

        if(!id){
            throw new Error("Identificador incorreto!");
        }

        const idAlreadyExists = await categoriaRepository.findOne({
            id,
        });

        if(idAlreadyExists){
            throw new Error("Identificador já existe!");
        }

        //Validação Categoria
        if(!categoria){
            throw new Error("Insira um nome válido para categoria!");
        }

        const categoriaAlreadyExists = await categoriaRepository.findOne({
            categoria,
        });

        if(categoriaAlreadyExists){
            throw new Error("Categoria já cadastrada!");
        }

        const categ = categoriaRepository.create({
            id, categoria
        })

        await categoriaRepository.save(categ);

        return categ;

    }

    async showCategoria(id: string){
        const categoriaRepositories = getCustomRepository(CategoriaRepositories);

        const categoria = await categoriaRepositories
        .createQueryBuilder("categoria")
        .where("categoria.id like :id", { id: `%${id}%` })
        .getOne();

        return categoria
    }

}

export { CategoriaService };