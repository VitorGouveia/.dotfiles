//importando o express
const express = require("express")
//importando o módulo de segurança
const cors = require("cors")
const app = express()

//importando as rotas
const routes = require("./routes")

//porta que será usado pelo express
const port = 3333

//permite que o express use o módulo de segurança
app.use(cors())

//permite que o express use json
app.use(express.json())

//executando as rotas
app.use(routes)

//criando a rota principal
/**
 * Rota / Recurso
 *     Rota: url usada para acessar o servidor do app, por exemplo:
 *         'https://etecjrm.com.br'
 * 
 *     Recurso: dados após a rota principal, ou seja, após o '/', por exemplo:
 *         'https://etecjrm.com.br/historia'
*/

/**
 * Métodos HTTP:
 *     GET: Buscar informação do back-end
 *     PUT: Alterar uma informação no back-end
 *     POST: Criar uma informação no back-end
 *     DELETE: Deletar uma informação no back-end
*/

/**
 * Tipos de parâmetros
 *     Query Params: Parâmetros nomeados enviados na rota após '?', por exemplo:
 *         https://etecjrm.com.br/?name=Vitor&idade=15
 *         geralmente utilizado para acessar o conteúdo dos parâmetros
 * 
 *         como acessar no javascript:
 *             const params = req.query
 *     
 * 
 *     Route Params: Parâmetros não nomeados enviados na rota após '/', por exemplo:
 *         https://etecjrm.com.br/pages/2
 *         geralmente utilizado para acessar um específico item ou página
 * 
 *         como acessar no javascript:
 *             const params = req.params
 * 
 * 
 *     Request body: Corpo da requisição não nomeado enviado na rota após '/', por exemplo:
 *         https://etecjrm.com.br/users
 *         geralmente utilizado para criar ou alterar recursos
 * 
 *         como acessar no javascript:
 *             const params = req.body
*/

/**
 * Useful Snippets:
 *     mostrando no console o Query Params:
 *         console.log(req.query)
*/

/**
 * npm init -y
 * npm i express
 * npm i nodemon -D
 * npm i knex
 *     npm i sqlite3
 *     npm i mysql
 * npx knex init
 * npx knex migrate:latest
 */

/**
 * Migrations são um histórico de alterações das tabelas do banco de dados
 */


//ouvindo o servidor na variável 'porta' 
app.listen(process.env.PORT || port, () => {
    //mostrando no console qual porta o express está ouvindo
    console.log(`Server rodando na porta ${port}`)
})