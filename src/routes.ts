import { Router } from "express";
import { AtuacaoController } from "./controller/AtuacaoController";
import { CategoriaController } from "./controller/CategoriaController";
import { EnderecoController } from "./controller/EnderecoController";
import { EventController } from "./controller/EventController";
import { FederacaoController } from "./controller/FederacaoController";
import { ModalidadeController } from "./controller/ModalidadeController";
import { UserAdminController } from "./controller/UserAdminController";
import { UserController } from "./controller/UserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticate";
import { InscricaoController } from "./controller/InscricaoController";
import { HistoricoController } from "./controller/HistoricoController";

const router = Router();

const modalidadeController = new ModalidadeController();
const categoriaController = new CategoriaController();
const userController = new UserController();
const atuacaoController = new AtuacaoController();
const userAdminController = new UserAdminController();
const enderecoController = new EnderecoController();
const eventController = new EventController();
const federacaoController = new FederacaoController();
const inscricaoController = new InscricaoController();
const historicoController = new HistoricoController();

//Modalidade
router.post("/modalidade", modalidadeController.create);
router.get("/modalidade/:modalidade_id", modalidadeController.listModalidade);

//Categoria
router.post("/categoria", categoriaController.create);
router.get("/categoria/:categoria_id", categoriaController.listarCategoria);

//Atuação
router.post("/atuacao", atuacaoController.create);
router.get("/atuacao/:atuacao_id", atuacaoController.listAtuacao);

//Usuário
router.post("/user", userController.create);
router.post("/login", userController.authenticate);
router.put("/completar_cadastro", userController.update, ensureAuthenticated);
router.put("/filtrar_usuario", userController.listByFilter);
router.get("/users", userController.list, ensureAuthenticated);
router.get("/edit_user/:id", userController.ListUserById);
router.get("/find_user/:email", userController.verifyIfRegistered);
router.get("/find_email/:email", userController.ListUserByEmail);
router.get("/find_cpf/:cpf", userController.ListUserByCpf);
router.get("/find_rg/:rg", userController.ListUserByRg);
router.get("/users_completo", userController.usersComplete)

//Endereço
router.post("/endereco", enderecoController.create);
router.put("/endereco_update", enderecoController.update, ensureAuthenticated);
router.get("/endereco/:user_id", enderecoController.showEndereco, ensureAuthenticated);

//Inscrição
router.post("/inscricao", inscricaoController.create);
router.get("/inscricao", inscricaoController.showAll)
router.put("/inscricao", inscricaoController.listParticipantesByEvent)
router.delete("/inscricao/:id", inscricaoController.delete);

//Eventos
router.post("/event", eventController.create);
router.put("/control_event/:id", eventController.control);
router.put("/event_notsigned", eventController.listEventNotSigned);
router.put("/event_signed", eventController.listEventSigned);
router.put("/event_partof", eventController.listEventPartOf);
router.put("/listar_eventos", eventController.listarEventos)
router.get("/event/:id", eventController.findEvent);
router.get("/listar_eventos", eventController.listar);
router.delete("/delete_event/:id", eventController.excluirEvento);

//Admministrador
router.post("/user_admin", userAdminController.create);
router.post("/intranet", userAdminController.authenticate);

//Federação
router.post("/federacao/:user_id", federacaoController.create);
router.put("/federacao/:user_id", federacaoController.update);
router.get("/federacao/:user_id", federacaoController.list);

//Histórioco
router.post("/historico", historicoController.create)
router.put("/historico", historicoController.updateHistorico)
router.put("/historico_list", historicoController.list)
router.get("/historico/:id", historicoController.findHistoricoById)
router.delete("/historico/:historico_id", historicoController.remove)

export { router };
