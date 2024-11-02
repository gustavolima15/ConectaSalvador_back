CREATE DATABASE gerenciador;
USE gerenciador;

CREATE TABLE cliente (
    cliente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha_hash VARCHAR(255) NOT NULL, 
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE empresa (
    empresa_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cnpj VARCHAR(14) UNIQUE NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    telefone VARCHAR(15)
);

CREATE TABLE funcionario (
    funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    sexo ENUM('M', 'F', 'Outro'),
    email VARCHAR(100) UNIQUE NOT NULL,
    telefone VARCHAR(15),
    empresa_id INT,
    CONSTRAINT fk_empresa FOREIGN KEY (empresa_id) REFERENCES empresa(empresa_id) ON DELETE CASCADE
);

CREATE TABLE login (
    login_id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL,
    senha_hash VARCHAR(255) NOT NULL,
    data_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    cliente_id INT,
    funcionario_id INT,
    CONSTRAINT fk_cliente FOREIGN KEY (cliente_id) REFERENCES cliente(cliente_id) ON DELETE SET NULL,
    CONSTRAINT fk_funcionario FOREIGN KEY (funcionario_id) REFERENCES funcionario(funcionario_id) ON DELETE SET NULL
);