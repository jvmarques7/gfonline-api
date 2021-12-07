import { Request, Response } from "express";
import { FederacaoService } from "../services/FederacaoService";

class FederacaoController{
    async create(req: Request, res: Response) {
        const { user_id } = req.params;
    
        const federacaoService = new FederacaoService();
    
        const federacao = await federacaoService.execute(user_id);
    
        return res.json(federacao);
    }

    async update(req: Request, res: Response) {
        const { user_id } = req.params;

        const federacaoService = new FederacaoService();

        const updateFederacao = await federacaoService.controlFederacao(user_id);

        return res.json(updateFederacao);

    }

    async list(req: Request, res: Response) {
        const {user_id} = req.params;
        const federacaoService = new FederacaoService();
    
        const federado = await federacaoService.showFederado(user_id);
    
        return res.json(federado);
    }

}

export {FederacaoController}