-- DROP DATABASE farmacos;
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
temperatura DOUBLE,
fkAme INT, CONSTRAINT FK_Ame foreign key (fkAme) references AME(idAme)
);

CREATE TABLE permissao (
idPermissao INT primary key auto_increment,
tipoPermissao varchar (45)
);

CREATE TABLE funcionario (
idFuncionario INT primary key auto_increment,
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

CREATE TABLE MaquinaTipoComponente (
idMaqTipoComp INT PRIMARY KEY auto_increment,
idProcessador VARCHAR (45),
tamanhoTotal DOUBLE,
num_ProcesLogicos INT,
num_ProcesFisicos INT,
enderecoMac varchar (45),
numSerial varchar(45),
ipv4 varchar (45),
fkTipoComp INT, CONSTRAINT FK_TipoComp foreign key (fkTipoComp) references tipoComponente(idTipoComp),
fkMaquina INT, CONSTRAINT FK_Maquina foreign key (fkMaquina) references maquina(idMaquina)
);

CREATE TABLE dadosComponente (
idDados INT primary key auto_increment,
qtdUsoCpu DOUBLE,
memoriaEmUso DOUBLE,
memoriaDisponivel DOUBLE,
usoAtualDisco DOUBLE,
pacoteRecebido DOUBLE,
pacoteEnviado DOUBLE,
dtHora datetime DEFAULT CURRENT_TIMESTAMP 
);

INSERT INTO tipoComponente (nomeTipoComp) VALUES ("CPU");
INSERT INTO tipoComponente (nomeTipoComp) VALUES ("Memória RAM");
INSERT INTO tipoComponente (nomeTipoComp) VALUES ("Rede");
INSERT INTO tipoComponente (nomeTipoComp) VALUES ("Disco");

INSERT INTO funcionario (cargo) VALUES ("NOC");
INSERT INTO funcionario (cargo) VALUES ("Analista");