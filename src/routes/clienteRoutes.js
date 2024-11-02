const express = require('express');
const router = express.Router();
const { getAllClientes } = require('../controller/clienteController');

router.get('/clientes', getAllClientes);

module.exports = router