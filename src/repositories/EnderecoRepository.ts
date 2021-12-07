import {EntityRepository, Repository} from "typeorm";
import { Endereco } from "../entities/Endereco";

@EntityRepository(Endereco)
class EnderecoRepositories extends Repository<Endereco> {}

export {EnderecoRepositories};