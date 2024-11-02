require("dotenv").config();

const express = require("express");
const sequelize = require("./config/db");
const clienteRoutes = require("./routes/clienteRoutes");
const empresaRoutes = require("./routes/empresaRoutes");
const funcionarioRoutes = require("./routes/funcionarioRoutes");
const cliente = require("./models/cliente");
const empresa = require("./models/empresa");
const funcionario = require("./models/funcionario");


const app = express();
const PORT = process.env.PORT || 3000; 

sequelize.authenticate()
.then(() => {
    console.log("Conexão com o banco de dados estabelecida com sucesso");
        return sequelize.sync();
        })
    .then(() => {
        console.log("Sincronização dos modelos concluída.");
        app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`));
    })
    .catch(err => {
        console.error("Falha ao conectar ao banco de dados:", error);
    });
    
    
    app.use(express.json());
    app.use(clienteRoutes);
