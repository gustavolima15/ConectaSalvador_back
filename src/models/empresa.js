const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Empresa = sequelize.define('Empresa', {
    empresa_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    cnpj: {
        type: DataTypes.STRING(14),
        allowNull: false,
        unique: true,
    },
    endereco: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
}, {
    tableName: 'empresa',
    timestamps: false,
});

module.exports = Empresa;