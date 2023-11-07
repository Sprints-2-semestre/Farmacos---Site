DROP DATABASE farmacos;
CREATE DATABASE farmacos;
USE farmacos;

CREATE TABLE AME (
idAme INT PRIMARY KEY auto_increment,
nomeAme varchar (45),
codigoAme varchar(5),
cep char (9)
);
insert into AME (codigoAme) VALUES (97807); 
insert into AME (codigoAme) VALUES (12345); 
insert into AME (codigoAme) VALUES (09876); 
insert into AME (codigoAme) VALUES (22113); 

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

CREATE TABLE funcionario (
idFuncionario INT primary key auto_increment,
nome varchar(45),
email varchar (45),
senha varchar (45),
cargo varchar (45),
fkNoc INT, CONSTRAINT FK_Noc foreign key (fkNoc) references funcionario(idFuncionario),
fkAme INT, CONSTRAINT FK_AmeFuncionario foreign key (fkAme) references AME(idAme),
fkPermissao INT, CONSTRAINT FK_Permissao foreign key (fkPermissao) references permissao(idPermissao)
);

CREATE TABLE parametro (
idParametro INT primary key auto_increment,
maximo DOUBLE,
medio DOUBLE,
fkFuncionario INT, CONSTRAINT FK_Funcionario foreign key (fkFuncionario) references funcionario(idFuncionario)
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
ipv4 varchar (45)
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

INSERT INTO funcionario (cargo) VALUES ("NOC");
INSERT INTO funcionario (cargo) VALUES ("Analista");

