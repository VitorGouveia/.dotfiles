"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _express = require("express");

var _homeworkController = require("./controllers/homeworkController");

var _profileController = require("./controllers/profileController");

var _sessionController = require("./controllers/sessionController");

var _studentController = require("./controllers/studentController");

//importando o express
//desacoplando o router do express
const routes = (0, _express.Router)(); //importando os controllers

exports.routes = routes;
//rota de login dos alunos
routes.post("/sessao", _sessionController.sessionController.create); //rota de listagem de alunos

routes.get("/alunos", _studentController.studentController.list); //rota de criação de alunos

routes.post("/alunos", _studentController.studentController.create); //rota de listagem de lições específicas de um aluno

routes.get("/perfil", _profileController.profileController.list); //rota de listagem de lições

routes.get("/licoes", _homeworkController.homeworkControler.list); //rota de criação de lições

routes.post("/licoes", _homeworkController.homeworkControler.create); //rota de exclusão de lições

routes.delete("/licoes/:id", _homeworkController.homeworkControler.delete);