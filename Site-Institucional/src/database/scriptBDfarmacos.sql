
CREATE DATABASE farmacos;
USE farmacos;

CREATE TABLE AME (
idAme INT PRIMARY KEY auto_increment,
nomeAme varchar (45),
codigoAme int,
cep char (9)
);

CREATE TABLE maquina (
idMaquina INT PRIMARY KEY auto_increment,
sistemaOperacional varchar (45),
arquitetura INT,
fabricante varchar (45),
tempoAtividade varchar(45),
fkAme INT, CONSTRAINT FK_Ame foreign key (fkAme) references AME(idAme)
);

CREATE TABLE permissao (
idPermissao INT primary key auto_increment,
tipoPermissao varchar (45)
);
insert into permissao values(null,'total');
insert into permissao values(null,'leitura');

CREATE TABLE usuario (
idusuario INT primary key auto_increment,
nome varchar(45),
email varchar (45),
senha varchar (45),
cargo varchar (45),
fkPermissaoUsuario INT, CONSTRAINT Fk_perm foreign key (fkPermissaoUsuario) references permissao(idPermissao),
fkAme INT, CONSTRAINT FK_AmeFuncionario foreign key (fkAme) references AME(idAme)
);

CREATE TABLE parametro (
idParametro INT primary key auto_increment,
maximo DOUBLE,
medio DOUBLE,
fkPermissaoParametro INT, CONSTRAINT FkPerm_param foreign key (fkPermissaoParametro) references permissao(idpermissao)
);

CREATE TABLE tipoComponente (
idTipoComp INT PRIMARY KEY auto_increment,
nomeTipoComp varchar (45),
fkParametro INT,
CONSTRAINT fkParametroComponente FOREIGN KEY (fkParametro) REFERENCES parametro (idParametro)
);

CREATE TABLE maquinaTipoComponente (
idMaqTipoComp INT PRIMARY KEY auto_increment,
fkMaquina INT, CONSTRAINT FK_Maquina foreign key (fkMaquina) references maquina(idMaquina),
fkTipoComp INT, CONSTRAINT FK_TipoComp foreign key (fkTipoComp) references tipoComponente(idTipoComp),
idProcessador VARCHAR (45),
num_ProcesLogicos INT,
num_ProcesFisicos INT,
tamanhoTotal DOUBLE,
enderecoMac varchar (45),
numSerial varchar(45),
ipv4 varchar(300)
);
select* from maquinaTipoComponente;

CREATE TABLE dadosComponente (
idDadosComponentes INT PRIMARY KEY auto_increment,
fkMaquina INT, CONSTRAINT Dados_FK_Maquina foreign key (fkMaquina) references maquina(idMaquina),
fkTipoComponente INT, CONSTRAINT Dados_FK_TipoComp foreign key (fkTipoComponente) references tipoComponente(idTipoComp),
fkMaquinaTipoComponente INT, CONSTRAINT Dados_FK_MaqTipoComp foreign key (fkMaquinaTipoComponente) references maquinaTipoComponente(idMaqTipoComp),
qtdUsoCpu DOUBLE,
memoriaEmUso DOUBLE,
memoriaDisponivel DOUBLE,
usoAtualDisco DOUBLE,
pacoteRecebido DOUBLE,
pacoteEnviado DOUBLE,
dtHora datetime DEFAULT CURRENT_TIMESTAMP 
);

insert into AME values 
(null,'ame nova amelia',1, '123456789');
INSERT INTO tipoComponente (nomeTipoComp) VALUES ("CPU");
INSERT INTO tipoComponente (nomeTipoComp) VALUES ("Memória RAM");
INSERT INTO tipoComponente (nomeTipoComp) VALUES ("Disco");
INSERT INTO tipoComponente (nomeTipoComp) VALUES ("Rede");

INSERT INTO usuario (cargo) VALUES ("NOC");
INSERT INTO usuario (cargo) VALUES ("Analista");
SELECT maquina.*, maquinaTipoComponente.*
FROM maquina
INNER JOIN maquinaTipoComponente ON maquina.idMaquina = maquinaTipoComponente.fkMaquina;
