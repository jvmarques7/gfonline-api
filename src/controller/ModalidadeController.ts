import {Request, Response} from "express"
import {ModalidadeService} from "../services/ModalidadeService"


class ModalidadeController{

    async create(req: Request, res: Response){

        const {id, modalidade} = req.body;

        const modalidadeService = new ModalidadeService();

        const modal = await modalidadeService.execute({
            id,
            modalidade
        });

        return res.json(modal);
    }

    async listModalidade(req: Request, res: Response) {
        const modalidadeService = new ModalidadeService();
        const {modalidade_id} = req.params;
    
        const modalidadeList = await modalidadeService.showModalidade(modalidade_id);
    
        return res.json(modalidadeList);
      }
}

export {ModalidadeController};