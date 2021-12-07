import {EntityRepository, Repository} from "typeorm";
import { Federacao } from "../entities/Federacao";

@EntityRepository(Federacao)
class FederacaoRepository extends Repository<Federacao> {}

export {FederacaoRepository};