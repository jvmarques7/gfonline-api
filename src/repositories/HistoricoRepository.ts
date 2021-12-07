import {EntityRepository, Repository} from "typeorm";
import { Historico } from "../entities/Historico";

@EntityRepository(Historico)
class HistoricoRepository extends Repository<Historico> {}

export {HistoricoRepository};