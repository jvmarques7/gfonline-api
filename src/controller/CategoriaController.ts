import {Request, Response} from "express";
import { CategoriaService } from "../services/CategoriaService";

class CategoriaController{

    async create(req: Request, res: Response){
        const {id, categoria} = req.body;

        const categoriaService = new CategoriaService();

        const categ = await categoriaService.execute({
            id,
            categoria
        });

        return res.json(categ);
    }

    async listarCategoria(req: Request, res: Response) {
        const categoriaService = new CategoriaService();
        const {categoria_id} = req.params;
    
        const categoriaList = await categoriaService.showCategoria(categoria_id);
    
        return res.json(categoriaList);
      }

}

export {CategoriaController};