import {EntityRepository, Repository} from "typeorm";
import { Atuacao } from "../entities/Atuacao";

@EntityRepository(Atuacao)
class AtuacaoRepositories extends Repository<Atuacao> {}

export {AtuacaoRepositories};