import { Request, Response } from "express";
import { InscricaoService } from "../services/InscricaoService";

class InscricaoController{
    async create(req: Request, res: Response) {
        const { user_id, evento_id } = req.body;
    
        const inscricaoService = new InscricaoService();
    
        const inscricao = await inscricaoService.execute(user_id, evento_id);
    
        return res.json(inscricao);
    }

    async showAll(req: Request, res: Response){
    
        const inscricaoService = new InscricaoService();
        
        const response = await inscricaoService.check()

        return res.json(response)
    }

    async listParticipantesByEvent(req: Request, res: Response){
        const { event_id } = req.body;
    
        const inscricaoService = new InscricaoService();
    
        const inscricao = await inscricaoService.listByEvent(event_id);
    
        return res.json(inscricao);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
    
        const inscricaoService = new InscricaoService();
    
        const inscricao = await inscricaoService.remove(id);
    
        return res.json(inscricao);
    }

}

export {InscricaoController}