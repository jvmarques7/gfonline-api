import { getCustomRepository } from "typeorm";
import { FederacaoRepository } from "../repositories/FederacaoRepository";

class FederacaoService{

    async execute(user_id: string){
        const federacaoRepository = getCustomRepository(FederacaoRepository);

        const alreadyFederado = await federacaoRepository.findOne({
            user_id,
        });

        if(alreadyFederado){
            throw new Error("Usuario já federado!")
        }else{
            const is_federado = "s";
            const is_ativo = "n";
            const federacao = federacaoRepository.create({
                is_federado, is_ativo, user_id
            })
            await federacaoRepository.save(federacao);
        }
    }

    async controlFederacao(user_id: string){
        const federacaoRepository = getCustomRepository(FederacaoRepository);

        const federacao = await federacaoRepository.findOne({
            user_id,
        });

        try{
            if(federacao.is_ativo === "s"){
                federacao.is_ativo = "n";
            }else{
                federacao.is_ativo = "s";
            }
            const newFederacao = await federacaoRepository.save(federacao)
            return newFederacao
        }catch(err){
            throw new Error("Erro ao ativar/desativar federacao!");
        }

    }

    async showFederado(user_id: string){
        const atuacaoRepositories = getCustomRepository(FederacaoRepository);

        const federacao = await atuacaoRepositories
        .createQueryBuilder("federacao")
        .where("federacao.user_id like :user_id", { user_id: `%${user_id}%` })
        .getOne();

        return federacao;
    }

    async deleteFederacao(user_id: string) {
        const federacaoRepository = getCustomRepository(FederacaoRepository);
    
          const deleted = await federacaoRepository.delete(user_id)
          return deleted
      }

}

export { FederacaoService };