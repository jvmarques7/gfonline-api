import {EntityRepository, Repository} from "typeorm";
import { Inscricao } from "../entities/Inscricao";

@EntityRepository(Inscricao)
class InscricaoRepository extends Repository<Inscricao> {}

export {InscricaoRepository};