DROP DATABASE farmacos;
CREATE DATABASE farmacos;
USE farmacos;

CREATE TABLE AME (
idAme INT PRIMARY KEY AUTO_INCREMENT,
nomeAme VARCHAR (45),
cep CHAR (9)
);

CREATE TABLE maquina (
idMaquina VARCHAR(30) PRIMARY KEY,
sistemaOperacional VARCHAR (45),
arquitetura INT,
fabricante VARCHAR (45),
tempoAtividade VARCHAR(45),
fkAme INT, CONSTRAINT FK_Ame FOREIGN KEY (fkAme) REFERENCES AME(idAme)
);

CREATE TABLE permissao (
idPermissao INT PRIMARY KEY AUTO_INCREMENT,
tipoPermissao VARCHAR (45)
);

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome varchar(100),
email VARCHAR (100),
senha VARCHAR (45),
cargo VARCHAR (45),
fkAme INT, CONSTRAINT FK_AmeUsuario FOREIGN KEY (fkAme) REFERENCES AME(idAme),
fkPermissaoUsuario INT, CONSTRAINT FK_perm FOREIGN KEY (fkPermissaoUsuario) REFERENCES permissao(idPermissao)
);

CREATE TABLE parametro (
idParametro INT primary key AUTO_INCREMENT,
nomeComponente VARCHAR (30),
critico INT,
preocupante INT,
fkPermissaoParametro INT, CONSTRAINT FkPerm_param FOREIGN KEY (fkPermissaoParametro) REFERENCES permissao(idPermissao)
);

CREATE TABLE tipoComponente (
idTipoComp INT PRIMARY KEY AUTO_INCREMENT,
nomeTipoComp VARCHAR (45),
fkParametro INT,
CONSTRAINT fkParametroComponente FOREIGN KEY (fkParametro) REFERENCES parametro (idParametro)
);

CREATE TABLE maquinaTipoComponente (
idMaqTipoComp INT PRIMARY KEY AUTO_INCREMENT,
fkMaquina VARCHAR(30), CONSTRAINT FK_Maquina FOREIGN KEY (fkMaquina) REFERENCES maquina(idMaquina),
fkTipoComp INT, CONSTRAINT FK_TipoComp FOREIGN KEY (fkTipoComp) REFERENCES tipoComponente(idTipoComp),
numProcesLogicos INT,
numProcesFisicos INT,
tamanhoTotalRam INT,
tamanhoTotalDisco INT,
enderecoMac VARCHAR (45),
numSerial VARCHAR(45),
ipv4 VARCHAR (45)
);

CREATE TABLE dadosComponente (
idDadosComponentes INT PRIMARY KEY AUTO_INCREMENT,
fkMaquina VARCHAR(30), CONSTRAINT Dados_FK_Maquina FOREIGN KEY (fkMaquina) REFERENCES maquina(idMaquina),
fkTipoComponente INT, CONSTRAINT Dados_FK_TipoComp FOREIGN KEY (fkTipoComponente) REFERENCES tipoComponente(idTipoComp),
fkMaquinaTipoComponente INT, CONSTRAINT Dados_FK_MaqTipoComp FOREIGN KEY (fkMaquinaTipoComponente) REFERENCES maquinaTipoComponente(idMaqTipoComp),
qtdUsoCpu DECIMAL (4, 2),
memoriaEmUso DECIMAL (2, 1),
memoriaDisponivel DECIMAL (2, 1),
usoAtualDisco INT,
usoDisponivelDisco INT,
bytesRecebido DECIMAL (6, 2),
bytesEnviado DECIMAL (6, 2),
dtHora datetime DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO permissao (tipoPermissao) VALUES ('NOC');
INSERT INTO permissao (tipoPermissao) VALUES ('Visualização');

INSERT INTO tipoComponente (nomeTipoComp) VALUES ('CPU');
INSERT INTO tipoComponente (nomeTipoComp) VALUES ('RAM');
INSERT INTO tipoComponente (nomeTipoComp) VALUES ('DISCO');
INSERT INTO tipoComponente (nomeTipoComp) VALUES ('REDE');

SELECT maquina.sistemaOperacional,
maquina.arquitetura,
maquina.fabricante,
maquina.tempoAtividade,
maquinaTipoComponente.numProcesLogicos,
maquinaTipoComponente.numProcesFisicos,
maquinaTipoComponente.tamanhoTotalRam,
maquinaTipoComponente.numSerial,
maquinaTipoComponente.tamanhoTotalDisco,
maquinaTipoComponente.enderecoMac,
maquinaTipoComponente.ipv4,
dadosComponente.bytesRecebido,
dadosComponente.bytesEnviado,
dadosComponente.qtdUsoCpu,
dadosComponente.memoriaEmUso,
dadosComponente.memoriaDisponivel,
dadosComponente.usoAtualDisco,
dadosComponente.usoDisponivelDisco
FROM maquina JOIN maquinaTipoComponente ON maquina.idMaquina = maquinaTipoComponente.fkMaquina
JOIN dadosComponente ON maquina.idMaquina = dadosComponente.fkMaquina
WHERE maquina.idMaquina = 'BFEBFBFF000A0660';

-- INSERT INTO tipoComponente (nomeTipoComp) VALUES ("CPU");
-- INSERT INTO tipoComponente (nomeTipoComp) VALUES ("Memória RAM");
-- INSERT INTO tipoComponente (nomeTipoComp) VALUES ("Disco");
-- INSERT INTO tipoComponente (nomeTipoComp) VALUES ("Rede");
-- select maquina.idMaquina from maquina;
-- INSERT INTO maquina (idMaquina) VALUES ('teste');
-- INSERT INTO funcionario (cargo) VALUES ("NOC");
-- INSERT INTO funcionario (cargo) VALUES ("Analista");

-- select maquinaTipoComponente.num_ProcesLogicos,
-- maquinaTipoComponente.num_ProcesFisicos,
-- maquinaTipoComponente.tamanhoTotalRam,
-- maquinaTipoComponente.numSerial,
-- maquinaTipoComponente.enderecoMac,
-- maquinaTipoComponente.ipv4
-- from maquinaTipoComponente
-- where idMaqTipoComp = 2;


-- select maquina.sistemaOperacional,
-- maquina.arquitetura,
-- maquina.fabricante,
-- maquina.tempoAtividade,
-- maquinaTipoComponente.num_ProcesLogicos,
-- maquinaTipoComponente.num_ProcesFisicos,
-- maquinaTipoComponente.tamanhoTotalRam,
-- maquinaTipoComponente.numSerial,
-- maquinaTipoComponente.enderecoMac,
-- maquinaTipoComponente.ipv4
-- from maquina join maquinaTipoComponente on maquina.idMaquina = maquinaTipoComponente.fkMaquina = 1;

insert into ame values
(null, "Paulista", "0366000");
select * from usuario