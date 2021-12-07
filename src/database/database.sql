-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.6.3-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Copiando estrutura para tabela sistema-fgb.atuacao
CREATE TABLE IF NOT EXISTS `atuacao` (
  `id` varchar(255) NOT NULL,
  `atuacao` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela sistema-fgb.atuacao: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `atuacao` DISABLE KEYS */;
INSERT INTO `atuacao` (`id`, `atuacao`, `created_at`, `updated_at`) VALUES
	('1', 'Jogador', '2021-10-02 17:47:26.994307', '2021-10-02 17:47:27.071912'),
	('2', 'Árbitro', '2021-10-02 17:48:03.572369', '2021-10-02 17:48:03.572369'),
	('3', 'Técnico', '2021-10-02 18:45:55.000000', '2021-10-02 18:45:56.000000');
/*!40000 ALTER TABLE `atuacao` ENABLE KEYS */;

-- Copiando estrutura para tabela sistema-fgb.categoria
CREATE TABLE IF NOT EXISTS `categoria` (
  `id` varchar(255) NOT NULL,
  `categoria` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela sistema-fgb.categoria: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` (`id`, `categoria`, `created_at`, `updated_at`) VALUES
	('1', 'Feminino', '2021-10-02 18:59:34.000000', '2021-10-02 18:59:34.000000'),
	('2', 'Masculino', '2021-10-02 18:59:41.000000', '2021-10-02 18:59:41.000000');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;

-- Copiando estrutura para tabela sistema-fgb.endereco
CREATE TABLE IF NOT EXISTS `endereco` (
  `cep` varchar(255) DEFAULT NULL,
  `logradouro` varchar(255) DEFAULT NULL,
  `complemento` varchar(255) DEFAULT NULL,
  `bairro` varchar(255) DEFAULT NULL,
  `numero` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) NOT NULL,
  `cidade` varchar(255) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `id` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela sistema-fgb.endereco: ~8 rows (aproximadamente)
/*!40000 ALTER TABLE `endereco` DISABLE KEYS */;
INSERT INTO `endereco` (`cep`, `logradouro`, `complemento`, `bairro`, `numero`, `user_id`, `cidade`, `estado`, `id`, `created_at`, `updated_at`) VALUES
	('74366104', 'Rua VV 8', 'Qd. 30 Lt. 15', 'Village Veneza', '00', '2a4b4d53-2d84-413f-8981-1e77f37f1152', 'Goiânia', 'GO', '1d765b11-3c99-4b99-a6e0-6a8e59474992', '2021-10-05 17:53:10.440203', '2021-10-05 17:55:37.000000'),
	('74365500', 'Rua B22', 'Qd. 30 Lt. 15', 'Setor Novo Horizonte', 'C1', '2fca6d4f-a87a-4c41-a109-184e4ac926bf', 'Goiânia', 'GO', '4c883f02-a7ed-4599-903c-a331e78bb650', '2021-10-02 19:00:27.918361', '2021-10-02 19:01:08.000000'),
	('74366104', 'Rua VV 8', 'Qd. 30 Lt. 15', 'Village Veneza', '00', 'a2f2ef23-8b95-4919-9ba7-687cf70ad1bc', 'Goiânia', 'GO', '6712b62a-e735-4431-a426-c56f9b3bbd8c', '2021-10-25 19:12:38.085670', '2021-10-25 19:13:30.000000'),
	('74420270', 'Rua Formosa', 'BORRACHARIA', 'Nossa Senhora de Fátima', '00', '9bea1897-2c10-4c10-bd7e-deeb7c41695e', 'Goiânia', 'GO', 'c0c48072-ac22-4cf0-b240-7748666e2efc', '2021-11-23 20:09:45.346340', '2021-11-23 20:10:32.000000'),
	('74395150', 'Rua SRM 18', 'Qd. 16 Lt. 8, casa 1', 'Residencial Village Santa Rita II', '00', 'e96e951c-1237-4433-9e98-b1ee7b77d295', 'Goiânia', 'GO', 'c35fd155-bb9c-4f68-9122-7df716d591e8', '2021-10-04 19:53:30.852671', '2021-10-04 20:02:07.000000'),
	('74343120', 'Rua do Boto', 'BORRACHARIA', 'Jardim Atlântico', 'C1', '9faa9886-c093-4b23-9b8c-8d9d075fee8d', 'Goiânia', 'GO', 'd43a7078-5d7b-40a9-9eb9-ea3c0dbe9e7d', '2021-11-23 20:01:48.970315', '2021-11-23 20:07:29.000000'),
	('74343120', 'Rua do Boto', 'Boto 61 Lt. 7', 'Jardim Atlântico', '00', '472c6b1c-c655-43a1-93eb-3cc6b2461978', 'Goiânia', 'GO', 'd9d7bf97-09ec-4f3d-bb3b-865abd751235', '2021-10-09 22:31:27.127252', '2021-10-30 12:43:18.000000'),
	('74420270', 'Rua Formosa', 'Qd. 16 Lt. 8, casa 1', 'Nossa Senhora de Fátima', 'C1', 'd7017c76-a77f-4df7-b8d9-338ec93d0baa', 'Goiânia', 'GO', 'e5ea8ea5-f49e-4d25-a41c-2bbaeb545bce', '2021-11-23 19:46:17.883264', '2021-11-23 19:48:39.000000');
/*!40000 ALTER TABLE `endereco` ENABLE KEYS */;

-- Copiando estrutura para tabela sistema-fgb.event
CREATE TABLE IF NOT EXISTS `event` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `decricao` varchar(255) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `atuacoes` varchar(255) NOT NULL,
  `modalidades` varchar(255) NOT NULL,
  `categorias` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `estado` varchar(255) NOT NULL,
  `data` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela sistema-fgb.event: ~10 rows (aproximadamente)
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` (`id`, `titulo`, `decricao`, `tipo`, `atuacoes`, `modalidades`, `categorias`, `created_at`, `updated_at`, `estado`, `data`) VALUES
	(32, 'Teste', 'Teste', 'c', '1', '1', '2', '2021-10-26 18:03:16.508645', '2021-12-05 10:55:03.576810', 'a', '2022-02-01'),
	(34, 'Evento para Árbitros', 'Descrição', 'e', '123', '2134567', '12', '2021-10-31 15:06:13.108716', '2021-12-05 10:55:13.172620', 'a', '2021-11-29'),
	(36, 'Teste 91j029hh2', 'Teste 91j029hh2', 'e', '123', '314', '12', '2021-11-04 20:19:33.601943', '2021-12-05 10:59:58.603460', 'a', '2022-02-05'),
	(37, 'Outro teste', '1, 2, 3 testando...', 'c', '321', '3457621', '12', '2021-11-04 20:30:14.301651', '2021-12-05 10:55:35.254497', 'd', '2022-03-15'),
	(38, 'Evento jsngkos jnsmfls', 'knaopmp´snpwm´vp', 'e', '132', '1', '2', '2021-11-05 17:15:00.994247', '2021-12-05 11:00:07.268354', 'a', '2022-06-10'),
	(39, 'qvnbanopvl', 'osopvnspo', 'c', '123', '2', '21', '2021-11-05 17:16:27.008415', '2021-12-05 10:56:51.952051', 'a', '2022-07-15'),
	(40, 'Evento teste 3', 'Evento teste 3', 'c', '12', '123', '12', '2021-11-05 18:05:13.474059', '2021-12-05 11:00:21.987907', 'a', '2022-04-25'),
	(42, 'Evento pra testar filtro', 'Testar filtro', 'c', '123', '1234765', '12', '2021-11-26 00:19:32.148963', '2021-12-05 11:00:31.155946', 'a', '2022-04-06'),
	(43, 'Qualquer evento', 'Qualquer descrição', 'e', '123', '2137654', '12', '2021-11-26 00:39:16.575135', '2021-12-05 11:00:45.918367', 'a', '2022-01-19'),
	(44, 'Campeonato Goiano 2021 - 1°fase', 'A 1° fase do Campeonato Goiano de 2021 irá definir aqueles que se classificarão para a próxima fase.', 'c', '123', '1234567', '12', '2021-12-05 10:46:35.259263', '2021-12-05 10:54:40.561366', 'a', '2021-03-13');
/*!40000 ALTER TABLE `event` ENABLE KEYS */;

-- Copiando estrutura para tabela sistema-fgb.federacao
CREATE TABLE IF NOT EXISTS `federacao` (
  `is_federado` varchar(255) NOT NULL,
  `is_ativo` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `id` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_2f6c3a128db253be3f6fb0b474` (`user_id`),
  CONSTRAINT `FK_2f6c3a128db253be3f6fb0b474e` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela sistema-fgb.federacao: ~7 rows (aproximadamente)
/*!40000 ALTER TABLE `federacao` DISABLE KEYS */;
INSERT INTO `federacao` (`is_federado`, `is_ativo`, `user_id`, `id`, `created_at`, `updated_at`) VALUES
	('s', 's', '472c6b1c-c655-43a1-93eb-3cc6b2461978', '0e7aa341-40e2-4492-9ad2-15b824e7e667', '2021-11-27 14:13:08.764821', '2021-11-27 14:13:13.000000'),
	('s', 's', '2a4b4d53-2d84-413f-8981-1e77f37f1152', '633e090a-fbef-4788-b3aa-50fa8d32b55f', '2021-11-05 18:10:20.969629', '2021-12-05 18:19:17.000000'),
	('s', 'n', '9bea1897-2c10-4c10-bd7e-deeb7c41695e', '88589898-9ba1-4d30-8a95-b0dfcb8a8b0b', '2021-11-23 20:10:32.852458', '2021-11-23 20:10:32.852458'),
	('s', 's', 'a2f2ef23-8b95-4919-9ba7-687cf70ad1bc', '99fgdh8d-ggwg-8847-fet4-gsgergegrrgg', '2021-11-26 20:57:36.000000', '2021-12-04 23:18:02.000000'),
	('s', 'n', 'e96e951c-1237-4433-9e98-b1ee7b77d295', 'aea4893c-460a-4d31-abf4-5992143d43ce', '2021-11-29 22:27:02.395354', '2021-11-29 22:27:02.395354'),
	('s', 'n', '9faa9886-c093-4b23-9b8c-8d9d075fee8d', 'b792ec29-569b-4495-b10a-bda40b10612a', '2021-11-23 20:07:29.584967', '2021-11-23 20:07:29.584967'),
	('s', 'n', 'd7017c76-a77f-4df7-b8d9-338ec93d0baa', 'd9d4fbe9-3719-4afe-8758-26b0d483dbfe', '2021-11-23 19:48:39.466498', '2021-11-23 19:48:39.466498');
/*!40000 ALTER TABLE `federacao` ENABLE KEYS */;

-- Copiando estrutura para tabela sistema-fgb.historico
CREATE TABLE IF NOT EXISTS `historico` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `colocacao` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `data_evento` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_9d27d16c103bc7157152f546310` (`user_id`),
  CONSTRAINT `FK_9d27d16c103bc7157152f546310` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela sistema-fgb.historico: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `historico` DISABLE KEYS */;
INSERT INTO `historico` (`id`, `titulo`, `descricao`, `tipo`, `colocacao`, `user_id`, `created_at`, `updated_at`, `data_evento`) VALUES
	(7, 'Campeonato Goiano 2021 - 1°fase', 'Campeão da primeira fase.\nPrêmio de melhor atacante do campeonato.', 'c', 1, '2a4b4d53-2d84-413f-8981-1e77f37f1152', '2021-12-05 14:50:55.492288', '2021-12-05 18:19:26.000000', '2021-03-13');
/*!40000 ALTER TABLE `historico` ENABLE KEYS */;

-- Copiando estrutura para tabela sistema-fgb.inscricao
CREATE TABLE IF NOT EXISTS `inscricao` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `user_id` varchar(255) NOT NULL,
  `evento_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_71de1053fe987082d6a2c80ed7f` (`user_id`),
  KEY `FK_42bebb2ad0153823cd30198df44` (`evento_id`),
  CONSTRAINT `FK_42bebb2ad0153823cd30198df44` FOREIGN KEY (`evento_id`) REFERENCES `event` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_71de1053fe987082d6a2c80ed7f` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela sistema-fgb.inscricao: ~6 rows (aproximadamente)
/*!40000 ALTER TABLE `inscricao` DISABLE KEYS */;
INSERT INTO `inscricao` (`id`, `created_at`, `updated_at`, `user_id`, `evento_id`) VALUES
	(11, '2021-11-24 23:40:48.161690', '2021-11-24 23:40:48.161690', '2a4b4d53-2d84-413f-8981-1e77f37f1152', 39),
	(13, '2021-11-26 00:39:32.883046', '2021-11-26 00:39:32.883046', '2a4b4d53-2d84-413f-8981-1e77f37f1152', 43),
	(18, '2021-11-26 20:30:10.633128', '2021-11-26 20:30:10.633128', '2a4b4d53-2d84-413f-8981-1e77f37f1152', 42),
	(20, '2021-11-27 14:13:21.139460', '2021-11-27 14:30:49.635865', '472c6b1c-c655-43a1-93eb-3cc6b2461978', 39),
	(24, '2021-11-28 00:29:02.464608', '2021-11-28 00:29:02.464608', '472c6b1c-c655-43a1-93eb-3cc6b2461978', 40),
	(26, '2021-11-30 17:53:54.975435', '2021-11-30 17:53:54.975435', '2a4b4d53-2d84-413f-8981-1e77f37f1152', 34),
	(27, '2021-12-05 10:54:33.708132', '2021-12-05 10:54:33.708132', '2a4b4d53-2d84-413f-8981-1e77f37f1152', 44);
/*!40000 ALTER TABLE `inscricao` ENABLE KEYS */;

-- Copiando estrutura para tabela sistema-fgb.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela sistema-fgb.migrations: ~25 rows (aproximadamente)
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` (`id`, `timestamp`, `name`) VALUES
	(1, 1631760221773, 'CreateCategoria1631760221773'),
	(2, 1631760326179, 'CreateModalidade1631760326179'),
	(3, 1631760339599, 'CreateEndereco1631760339599'),
	(4, 1631760606594, 'CreateAtuacao1631760606594'),
	(14, 1632338894779, 'CreateUser1632338894779'),
	(16, 1632578274616, 'CreateUserAdmin1632578274616'),
	(17, 1632581422407, 'CreateUserAdmin1632581422407'),
	(18, 1633207443617, 'CreateAtuacao1633207443617'),
	(19, 1633208143492, 'CreateModalidade1633208143492'),
	(20, 1633208239976, 'CreateCategoria1633208239976'),
	(21, 1633208510651, 'CreateModalidade1633208510651'),
	(22, 1633208540536, 'CreateCategoria1633208540536'),
	(23, 1633209043954, 'CreateCategoria1633209043954'),
	(24, 1633209071107, 'CreateModalidade1633209071107'),
	(26, 1633209529302, 'CreateUser1633209529302'),
	(27, 1633209936847, 'CreateEndereco1633209936847'),
	(28, 1633210188266, 'CreateUser1633210188266'),
	(29, 1633210675293, 'CreateEndereco1633210675293'),
	(30, 1633211577584, 'CreateCategoria1633211577584'),
	(31, 1633211641168, 'CreateUser1633211641168'),
	(32, 1633211764613, 'CreateModalidade1633211764613'),
	(33, 1633211821481, 'CreateUser1633211821481'),
	(34, 1634046005093, 'CreateEvent1634046005093'),
	(36, 1635861553128, 'CreateFederacao1635861553128'),
	(37, 1636064416730, 'CreateInscricao1636064416730'),
	(39, 1637435001454, 'CreateHistorico1637435001454');
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

-- Copiando estrutura para tabela sistema-fgb.modalidade
CREATE TABLE IF NOT EXISTS `modalidade` (
  `id` varchar(255) NOT NULL,
  `modalidade` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela sistema-fgb.modalidade: ~6 rows (aproximadamente)
/*!40000 ALTER TABLE `modalidade` DISABLE KEYS */;
INSERT INTO `modalidade` (`id`, `modalidade`, `created_at`, `updated_at`) VALUES
	('1', 'Adulto', '2021-10-02 18:58:26.000000', '2021-10-02 18:58:26.000000'),
	('2', 'Paradesporto', '2021-10-02 18:58:33.000000', '2021-10-02 18:58:33.000000'),
	('3', 'Juvenil', '2021-10-02 18:58:39.000000', '2021-10-02 18:58:39.000000'),
	('4', 'Mirim', '2021-10-02 18:58:45.000000', '2021-10-02 18:58:45.000000'),
	('5', 'Infanto-Juvenil', '2021-10-02 18:58:52.000000', '2021-10-02 18:58:56.050172'),
	('6', 'Infantil', '2021-10-02 18:59:05.000000', '2021-10-02 18:59:05.000000'),
	('7', 'Master', '2021-10-02 18:59:11.000000', '2021-10-02 18:59:11.000000');
/*!40000 ALTER TABLE `modalidade` ENABLE KEYS */;

-- Copiando estrutura para tabela sistema-fgb.useradmin
CREATE TABLE IF NOT EXISTS `useradmin` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `id` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela sistema-fgb.useradmin: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `useradmin` DISABLE KEYS */;
INSERT INTO `useradmin` (`username`, `password`, `id`, `created_at`, `updated_at`) VALUES
	('admin', '$2a$08$bjiu2IVKzKrsnMb7suH35.a6ntRTdUWhRyruHpZWQQu3i/QHJak9K', 'eeb2faff-c605-48e6-abef-21b494306e55', '2021-10-03 12:35:06.362209', '2021-10-03 12:35:06.362209');
/*!40000 ALTER TABLE `useradmin` ENABLE KEYS */;

-- Copiando estrutura para tabela sistema-fgb.users
CREATE TABLE IF NOT EXISTS `users` (
  `nomeCompleto` varchar(255) DEFAULT NULL,
  `rg` varchar(255) DEFAULT NULL,
  `cpf` varchar(255) DEFAULT NULL,
  `nacionalidade` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `sexo` varchar(255) DEFAULT NULL,
  `naturalidade` varchar(255) DEFAULT NULL,
  `clube` varchar(255) DEFAULT NULL,
  `telefone` varchar(255) DEFAULT NULL,
  `celular` varchar(255) DEFAULT NULL,
  `passaporte` varchar(255) DEFAULT NULL,
  `modalidade_id` varchar(255) DEFAULT NULL,
  `categoria_id` varchar(255) DEFAULT NULL,
  `atuacao_id` varchar(255) DEFAULT NULL,
  `id` varchar(255) NOT NULL,
  `created_at` datetime(6) DEFAULT current_timestamp(6),
  `updated_at` datetime(6) DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `dt_nascimento` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`),
  UNIQUE KEY `IDX_0c80872d387dcf00c567ebd4ca` (`rg`),
  UNIQUE KEY `IDX_230b925048540454c8b4c481e1` (`cpf`),
  KEY `FK_5035a63182e1da8302846d6f63a` (`modalidade_id`),
  KEY `FK_82a7b5721fe32d12c1d4fb7bff9` (`categoria_id`),
  KEY `FK_cc6234518f768fe22da66407b82` (`atuacao_id`),
  CONSTRAINT `FK_5035a63182e1da8302846d6f63a` FOREIGN KEY (`modalidade_id`) REFERENCES `modalidade` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_82a7b5721fe32d12c1d4fb7bff9` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_cc6234518f768fe22da66407b82` FOREIGN KEY (`atuacao_id`) REFERENCES `atuacao` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela sistema-fgb.users: ~7 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`nomeCompleto`, `rg`, `cpf`, `nacionalidade`, `email`, `password`, `sexo`, `naturalidade`, `clube`, `telefone`, `celular`, `passaporte`, `modalidade_id`, `categoria_id`, `atuacao_id`, `id`, `created_at`, `updated_at`, `dt_nascimento`) VALUES
	('João Victor Ribeiro Marques', '6426440', '704.970.151-37', 'Brasileiro', 'jvmarques0798@gmail.com', '$2a$08$M9Oba.jwDWLD0LDi3l0.YO0RsMNA4mFwEQbDZ7Qy8fKnIN8qKyTy.', 'Masculino', 'Brasileiro', 'Clube Teste', '(62) 3256-3959', '(62) 98276-8535', '12345678', '2', '2', '2', '2a4b4d53-2d84-413f-8981-1e77f37f1152', '2021-10-05 17:53:10.405116', '2021-12-02 23:27:30.000000', '1998-12-07'),
	('Amilton Fonseca Junior', '3251623', '049.150.561-20', 'Brasileiro', 'amilton@gmail.com', '$2a$08$fA6vnBZ6zl53na6/l3VMiub6AviloFqtxtEyd5j4FydIWQjQtovsq', 'Masculino', 'Brasileiro', 'Clube do Biribol', '(62) 3261-9656', '(62) 99935-8895', NULL, '2', '2', '1', '472c6b1c-c655-43a1-93eb-3cc6b2461978', '2021-10-09 22:31:27.090487', '2021-12-02 22:50:39.490299', NULL),
	('Testando teste', '46546443', '799.084.674-23', 'Brasileiro', '287892798@oi.com', '$2a$08$/YKvlJNopqaGuJton5SySO.2ycD6CUO.TST1MaQU8TyTLPJkA8qSO', 'Masculino', 'Brasileiro', 'Clubão', '(62) 3256-3959', '(62) 98276-8535', '426629', '2', '1', '3', '9bea1897-2c10-4c10-bd7e-deeb7c41695e', '2021-11-23 20:09:45.334673', '2021-12-02 22:50:40.379248', NULL),
	('Nome Teste da Silva', '14415153', '878.978.979-87', 'Brasileiro', 'hiah@jnaijif.com', '$2a$08$hRGf1rpPEJPBGNwebD9Tsu7kwLm4EuofE5pBeJbDVTI0/70DChMZu', 'Masculino', 'Brasileiro', 'Clube Teste', '(62) 3256-3959', '(62) 98276-8535', '24242113', '5', '1', '3', '9faa9886-c093-4b23-9b8c-8d9d075fee8d', '2021-11-23 20:01:48.959738', '2021-12-02 22:50:41.227095', NULL),
	('João Victor Ribeiro Marques', '6426441', '704.970.151-38', 'Brasileiro', 'newemail@gmail.com', '$2a$08$ho9Rt11hr/m7TCI6Vv/ea.Ml171Q3A8kWoEJfjmuRd4HihuTkchA6', 'Masculino', 'Brasileiro', 'Clube Teste', '(62) 3256-3959', '(32) 98276-8535', '123456', '1', '1', '1', 'a2f2ef23-8b95-4919-9ba7-687cf70ad1bc', '2021-10-25 19:12:38.065758', '2021-12-02 22:50:42.143984', NULL),
	('Amilton Fonseca Junior', '894728978', '197.492.798-27', 'Brasileiro', 'testefederacao@teste.com', '$2a$08$wW0O8ExBxi3h9j/ccmpgbec0BhLoW.qsJjgQuImwJN.A3nMZXtIgu', 'Masculino', 'Brasileiro', 'Clube Teste', '(62) 3256-3959', '(62) 98276-8535', '8947379729', '1', '2', '3', 'd7017c76-a77f-4df7-b8d9-338ec93d0baa', '2021-11-23 19:46:17.863910', '2021-12-02 22:50:43.755364', NULL),
	('Fabricio Santana Silvaovbsinvosnvsnsvons', '252651555', '125.428.284-68', 'Brasileiro', 'fabriciosantana17@gmail.com', '$2a$08$pziClrxPXENpSRAylTlRoO3fmedLIuPED7EGwiuRAJYQcdL8RO8ry', 'Masculino', 'Brasileiro', 'Santa Rita', '(62) 3561-6262', '(65) 22162-6562', '6515665', '1', '1', '2', 'e96e951c-1237-4433-9e98-b1ee7b77d295', '2021-10-04 19:53:30.834275', '2021-12-02 22:50:45.510750', NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
