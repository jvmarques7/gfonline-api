import { Request, Response } from "express";
import { UserService } from "../services/UserService";

interface UserUpdate {
  id?: string;
  name: string;
  email: string;
  cpf: string;
  rg: string;
  dt_nascimento: string;
  naturalidade: string;
  clube: string;
  sexo: string;
  telefone: string;
  celular: string;
  passaporte: string;
  nacionalidade: string;
  atuacao_id: string;
  modalidade_id: string;
  categoria_id: string;
}

interface AddressUpdate {
  bairro: string;
  logradouro: string;
  cep: string;
  numero: string;
  cidade: string;
  estado: string;
  complemento: string;
  id: string;
}

class UserController {
  async create(req: Request, res: Response) {
    const { email, password } = req.body;

    const userService = new UserService();

    const users = await userService.execute({
      email,
      password,
    });

    return res.json(users);
  }

  async update(request, response) {
    const {
      cpf,
      rg,
      email,
      name,
      dt_nascimento,
      id,
      naturalidade,
      clube,
      sexo,
      telefone,
      celular,
      passaporte,
      nacionalidade,
      atuacao_id,
      modalidade_id,
      categoria_id,
      bairro,
      logradouro,
      cep,
      numero,
      cidade,
      estado,
      complemento,
    } = request.body;
    const newUser: UserUpdate = {
      id,
      cpf,
      rg,
      email,
      name,
      dt_nascimento,
      naturalidade,
      clube,
      sexo,
      telefone,
      celular,
      passaporte,
      nacionalidade,
      atuacao_id,
      modalidade_id,
      categoria_id,
    };

    const newAddress: AddressUpdate = {
      bairro,
      logradouro,
      cep,
      numero,
      cidade,
      estado,
      complemento,
      id,
    };
    const userService = new UserService();

    const updateUser = await userService.update(newUser, newAddress);

    return response.status(200).json(updateUser);
  }

  async verifyIfRegistered(req: Request, res: Response){
    const userService = new UserService();
    const {email} = req.params;

    const user = await userService.showByEmail(email);
    

    return res.json(user);
  }

  async list(req: Request, res: Response) {
    const userService = new UserService();

    const usersList = await userService.show();

    return res.json(usersList);
  }

  async usersComplete(req: Request, res: Response) {
    const userService = new UserService();

    const usersList = await userService.findUserComplete();

    return res.json(usersList);
  }

  async listByFilter(req: Request, res: Response) {
    const userService = new UserService();
    const {nomeCompleto, cpf, rg, situacao, atuacao, modalidade, categoria} = req.body;
    console.log(nomeCompleto, cpf, rg, situacao, atuacao)

    const usersList = await userService.filtering(nomeCompleto, cpf, rg, situacao, atuacao, modalidade, categoria);

    return res.json(usersList);
  }

  async ListUserById(req: Request, res: Response) {
    const userService = new UserService();
    const {id} = req.params;

    const usersList = await userService.showById(id);

    return res.json(usersList);
  }

  async ListUserByCpf(req: Request, res: Response) {
    const userService = new UserService();
    const {cpf} = req.params;

    const usersList = await userService.showByCpf(cpf);

    return res.json(usersList);
  }

  async ListUserByRg(req: Request, res: Response) {
    const userService = new UserService();
    const {rg} = req.params;

    const usersList = await userService.showByRg(rg);

    return res.json(usersList);
  }

  async ListUserByEmail(req: Request, res: Response) {
    const userService = new UserService();
    const {email} = req.params;

    const usersList = await userService.showByEmail(email);

    return res.json(usersList);
  }

  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body;

    const userService = new UserService();

    const token = await userService.authenticate({
      email,
      password,
    });

    return res.json(token);
  }
}

export { UserController };
