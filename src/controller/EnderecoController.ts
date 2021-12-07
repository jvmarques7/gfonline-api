import {Request, Response, } from "express";
import { EnderecoService } from "../services/EnderecoService";

interface EnderecoUpdate {
  bairro: string;
  logradouro: string;
  cep: string;
  numero: string;
  cidade: string;
  estado: string;
  complemento: string;
  id: string;
}


class EnderecoController {

    async create(req: Request, res: Response){
        const {/*cep,
            logradouro,
            complemento,
            bairro,
            numero,
            cidade,
            estado,*/
            user_id} = req.body;

        const enderecoService = new EnderecoService();

        const endereco = await enderecoService.execute({
            /*cep,
            logradouro,
            complemento,
            bairro,
            numero,
            cidade,
            estado,*/
            user_id
        });

        return res.json(endereco);
    }

    async update(req: Request, res: Response) {
        const {
          bairro,
          logradouro,
          cep,
          numero,
          cidade,
          estado,
          complemento,
          id
        } = req.body;

        const newEndereco: EnderecoUpdate = {
          bairro,
          logradouro,
          cep,
          numero,
          cidade,
          estado,
          complemento,
          id,
        };
        const enderecoService = new EnderecoService();
    
        const updateEndereco = await enderecoService.update(newEndereco);
    
        return res.status(200).json(updateEndereco);
      }

      async showEndereco(req: Request, res: Response){
        const enderecoService = new EnderecoService();
        const {user_id} = req.params;

        const endereco = await enderecoService.showThis(user_id);
        
    
        return res.json(endereco);
      }


}

export {EnderecoController}