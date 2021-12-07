import {EntityRepository, Repository} from "typeorm";
import { Categoria } from "../entities/Categoria";

@EntityRepository(Categoria)
class CategoriaRepositories extends Repository<Categoria> {}

export {CategoriaRepositories};