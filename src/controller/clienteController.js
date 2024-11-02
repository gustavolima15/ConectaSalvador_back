const { Cliente } = require('../models/cliente');


const getAllClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    }  catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getAllClientes,
}
