import {EntityRepository, Repository} from "typeorm";
import { Modalidade } from "../entities/Modalidade";

@EntityRepository(Modalidade)
class ModalidadeRepositories extends Repository<Modalidade> {}

export {ModalidadeRepositories};