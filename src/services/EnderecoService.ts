import { getCustomRepository } from "typeorm";
import { EnderecoRepositories } from "../repositories/EnderecoRepository";

interface IEnderecoRequest {
  // cep: string;
  // logradouro: string;
  // complemento: string;
  // bairro: string;
  // numero: number;
  // cidade: string;
  // estado: string;
  user_id: string;
}

interface IenderecoUpdate{
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    numero: string;
    cidade: string;
    estado: string;
    id: string;
}

class EnderecoService {
  async execute({
    /*cep, logradouro, complemento, bairro, numero, cidade, estado,*/ user_id,
  }: IEnderecoRequest) {
    const enderecoRepository = getCustomRepository(EnderecoRepositories);
    // async execute({nomeCompleto, rg, cpf, nacionalidade, dt_nascimento, sexo, email, password, modalidade_id, categoria_id} : IUserRequest){
    //     const usersRepository = getCustomRepository(UsersRepositories);

    // if(!cep || !logradouro || !complemento || !complemento || !bairro || !cidade || !estado){
    //     throw new Error("Preencha todos os campos!");
    // }

    const endereco = enderecoRepository.create({
      // cep,
      // logradouro,
      // complemento,
      // bairro,
      // numero,
      // cidade,
      // estado,
      user_id,
    });

    await enderecoRepository.save(endereco);

    return endereco;
  }

  async update(endereco : IenderecoUpdate) {
    const enderecoRepository = getCustomRepository(EnderecoRepositories);
    const id = endereco.id;

    const enderecoUpdate = await enderecoRepository.findOne({where: {user_id: id}});

    enderecoUpdate.user_id = endereco.id;
    enderecoUpdate.bairro = endereco.bairro;
    enderecoUpdate.cep = endereco.cep;
    enderecoUpdate.cidade = endereco.cidade;
    enderecoUpdate.logradouro = endereco.logradouro;
    enderecoUpdate.complemento = endereco.complemento;
    enderecoUpdate.numero = endereco.numero;
    enderecoUpdate.estado = endereco.estado;


    const newAddress = await enderecoRepository.save(enderecoUpdate);

    return {
      user_id: newAddress.user_id,
      bairro: newAddress.bairro,
      cep: newAddress.cep,
      cidade: newAddress.cidade,
      logradouro: newAddress.logradouro,
      complemento: newAddress.complemento,
      numero: newAddress.numero,
      estado: newAddress.estado
    };
  }

  async showThis(user_id: string) {
    const enderecoRepositories = getCustomRepository(EnderecoRepositories);

    const endereco = await enderecoRepositories
      .createQueryBuilder("endereco")
      .where("endereco.user_id like :user_id", { user_id: `%${user_id}%` })
      .getOne();

    return endereco;
  }
}

export { EnderecoService };
