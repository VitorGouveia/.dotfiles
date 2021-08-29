//importando o express
import { Router } from "express"

//desacoplando o router do express
export const routes = Router()

//importando os controllers
import { homeworkControler } from "./controllers/homeworkController"
import { profileController } from "./controllers/profileController"
import { sessionController } from "./controllers/sessionController"
import { studentController } from "./controllers/studentController"

//rota de login dos alunos
routes.post("/sessao", sessionController.create)

//rota de listagem de alunos
routes.get("/alunos", studentController.list)

//rota de criação de alunos
routes.post("/alunos", studentController.create)

//rota de listagem de lições específicas de um aluno
routes.get("/perfil", profileController.list)

//rota de listagem de lições
routes.get("/licoes", homeworkControler.list)

//rota de criação de lições
routes.post("/licoes", homeworkControler.create)

//rota de exclusão de lições
routes.delete("/licoes/:id", homeworkControler.delete)
