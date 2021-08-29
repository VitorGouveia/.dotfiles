import express from "express"
import "dotenv/config"
import cors from "cors"

const app = express()
//importando as rotas

//porta que será usado pelo express
const port = process.env.PORT

//permite que o express use o módulo de segurança
app.use(cors())

//permite que o express use json
app.use(express.json())

//ouvindo o servidor na variável 'porta'
app.listen(port, () => console.log(`Server rodando na porta ${port}`))
