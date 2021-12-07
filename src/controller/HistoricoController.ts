import { Request, Response } from "express";
import { HistoricoService } from "../services/HistoricoService";

class HistoricoController{

    async create(req: Request, res: Response) {
        const {descricao, colocacao, user_id, event_id} = req.body
    
        const historicoService = new HistoricoService();
    
        const historico = await historicoService.execute({
            descricao,
            colocacao,
            user_id,
            event_id
        });
    
        return res.json(historico);
    }

    async updateHistorico(req: Request, res: Response){
        const {id, descricao, colocacao} = req.body

        const historicoService = new HistoricoService();

        const historico = await historicoService.update(id, descricao, colocacao);

        return res.json(historico);
    }

    async list(req: Request, res: Response){
        const {descricao, dt_inicial, dt_final, colocacao, tipo, user_id} = req.body

        const historicoService = new HistoricoService();

        const historicos = await historicoService.listByUserId(user_id, dt_inicial, dt_final, colocacao, tipo);

        return res.json(historicos)

    }

    async findHistoricoById(req: Request, res: Response){
        const historicoService = new HistoricoService();
        const {id} = req.params;

        const historico = await historicoService.show(id)

        return res.json(historico)

    }

    async remove(req: Request, res: Response){
        const {historico_id} = req.params;

        const historicoService = new HistoricoService();

        const deleted = await historicoService.removeHistorico(historico_id)

        return res.json(deleted);

    }

}

export {HistoricoController}