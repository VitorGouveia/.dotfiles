import express from "express"
import "dotenv/config"
import cors from "cors"
import { json, urlencoded } from "body-parser"
import { routes } from "./routes"

const app = express()
//importando as rotas

//porta que será usado pelo express
const port = process.env.PORT

//permite que o express use o módulo de segurança
app.use(cors())

//permite que o express use json
app.use(urlencoded({ extended: true }))
app.use(json())
app.use(routes)

//ouvindo o servidor na variável 'porta'
app.listen(port, () => console.log(`Server rodando na porta ${port}`))
