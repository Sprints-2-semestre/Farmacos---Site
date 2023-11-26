DROP DATABASE farmacos;
CREATE DATABASE farmacos;
USE farmacos;

CREATE TABLE AME (
idAme INT PRIMARY KEY AUTO_INCREMENT,
nomeAme VARCHAR(45),
cep CHAR(9)
) AUTO_INCREMENT = 1000;

CREATE TABLE maquina (
idMaquina VARCHAR(100) PRIMARY KEY,
hostName VARCHAR(100),
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

CREATE TABLE tipoComponente (
idTipoComp INT PRIMARY KEY AUTO_INCREMENT,
nomeTipoComp VARCHAR (45)
);


CREATE TABLE parametro (
idParametro INT primary key AUTO_INCREMENT,
maximo INT,
medio INT,
fkPermissaoParametro INT, CONSTRAINT FkPerm_param FOREIGN KEY (fkPermissaoParametro) REFERENCES permissao(idPermissao),
fkTipoComponente INT, CONSTRAINT FkTipo_comp foreign key (fkTipoComponente) references tipoComponente(idTipoComp)
);

CREATE TABLE maquinaTipoComponente (
idMaqTipoComp INT PRIMARY KEY AUTO_INCREMENT,
fkMaquina VARCHAR(100), CONSTRAINT FK_Maquina FOREIGN KEY (fkMaquina) REFERENCES maquina(idMaquina),
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
fkMaquina VARCHAR(100), CONSTRAINT Dados_FK_Maquina FOREIGN KEY (fkMaquina) REFERENCES maquina(idMaquina),
fkTipoComponente INT, CONSTRAINT Dados_FK_TipoComp FOREIGN KEY (fkTipoComponente) REFERENCES tipoComponente(idTipoComp),
fkMaquinaTipoComponente INT, CONSTRAINT Dados_FK_MaqTipoComp FOREIGN KEY (fkMaquinaTipoComponente) REFERENCES maquinaTipoComponente(idMaqTipoComp),
qtdUsoCpu DECIMAL (4, 2),
memoriaEmUso DECIMAL (2, 1),
memoriaDisponivel DECIMAL (2, 1),
usoAtualDisco INT,
usoDisponivelDisco INT,
bytesRecebido float,
bytesEnviado float,
dtHora datetime DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO AME (idAme, nomeAme, cep) VALUES 
(NULL, 'AME Campinas', '13087-535'),
(NULL, 'AME Guarulhos', '07034-911');

INSERT INTO permissao (tipoPermissao) VALUES ('NOC');
INSERT INTO permissao (tipoPermissao) VALUES ('Visualização');

INSERT INTO tipoComponente (nomeTipoComp) VALUES ('CPU');
INSERT INTO tipoComponente (nomeTipoComp) VALUES ('RAM');
INSERT INTO tipoComponente (nomeTipoComp) VALUES ('DISCO');
INSERT INTO tipoComponente (nomeTipoComp) VALUES ('REDE');

SELECT dc1.memoriaEmUso, dc2.qtdUsoCpu, TIME_FORMAT(dc1.dtHora, '%H:%i:%s') AS hora_formatada
FROM dadosComponente dc1
LEFT JOIN dadosComponente dc2 ON dc1.dtHora = dc2.dtHora
WHERE dc1.memoriaEmUso IS NOT NULL AND dc2.qtdUsoCpu IS NOT NULL
ORDER BY dc1.dtHora DESC;

SELECT hostName, avg(bytesRecebido) AS medBytesRecebido, avg(bytesEnviado) AS medBytesEnviado FROM dadosComponente join maquina on idMaquina = fkMaquina GROUP BY hostName;
SELECT hostName, avg(usoAtualDisco) AS medUsoAtualDisco, avg(usoDisponivelDisco) AS medUsoDisponivelDisco FROM dadosComponente join maquina on idMaquina = fkMaquina GROUP BY hostName;
SELECT hostName, avg(qtdUsoCpu) AS medUsoAtualCpu FROM dadosComponente join maquina on idMaquina = fkMaquina GROUP BY hostName;
SELECT hostName, avg(memoriaEmUso) AS medMemoriaEmUso, avg(memoriaDisponivel) AS medMemoriaDisponivel FROM dadosComponente join maquina on idMaquina = fkMaquina GROUP BY hostName order by medMemoriaEmUso desc;
