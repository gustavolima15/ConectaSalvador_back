const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Empresa = require('./empresa');

const Funcionario = sequelize.define('Funcionario', {
    funcionario_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    sexo: {
        type: DataTypes.STRING(1),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    telefone: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
    empresa_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Empresa,
            key: 'empresa_id',
        },
    },
}, {
    tableName: 'funcionario',
    timestamps: false,
});

Funcionario.belongsTo(Empresa, {
    foreignKey: 'empresa_id',
    onDelete: 'CASCADE',
});

module.exports = Funcionario;