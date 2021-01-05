//importando o express
const express = require("express")

//desacoplando o router do express
const routes = express.Router()

//importando os controllers 
const alunoController = require("./controllers/alunoController")
const licaoController = require("./controllers/licaoController")
const perfilController = require("./controllers/perfilController")
const sessaoController = require("./controllers/sessaoController")

//rota de login dos alunos
routes.post("/sessao", sessaoController.create)

//rota de listagem de alunos
routes.get("/alunos", alunoController.list)

//rota de criação de alunos
routes.post("/alunos", alunoController.create)

//rota de listagem de lições específicas de um aluno
routes.get("/perfil", perfilController.list)

//rota de listagem de lições
routes.get("/licoes", licaoController.list)

//rota de criação de lições
routes.post("/licoes", licaoController.create)

//rota de exclusão de lições
routes.delete("/licoes/:id", licaoController.delete)

module.exports = routes