import {Request, Response} from "express";
import { AtuacaoService } from "../services/AtuacaoService";

class AtuacaoController{

    async create(req: Request, res: Response){
        const {id, atuacao} = req.body;

        const atuacaoService = new AtuacaoService();

        const atua = await atuacaoService.execute({
            id,
            atuacao
        });

        return res.json(atua);
    }

    async listAtuacao(req: Request, res: Response) {
        const atuacaoService = new AtuacaoService();
        const {atuacao_id} = req.params;
    
        const atuacaoList = await atuacaoService.showAtuacao(atuacao_id);
    
        return res.json(atuacaoList);
      }

}

export {AtuacaoController};