//importando o crypto
const crypto = require("crypto")

//importando a conexão com o banco de dados
const connection = require("../database/connection")

module.exports = {
    //criar uma lição
    async create(req, res) {
        //desestruturação de dados da requisição
        const { nome, sobrenome, email, rg } = req.body

        /** 
        * crypto é uma biblioteca usada em criptografia,
        * mas aqui usarei para criar um id totalmente aleatório
        * de 4 bytes de tamanho e o transformar em string
        */
        const id = crypto.randomBytes(4).toString("HEX")

        /**
         * Usando a conexão com o banco de dados para inserir o
         * id e a requisição do body dentro da tabela 'alunos'
        */
        await connection("alunos").insert({
            id,
            nome,
            sobrenome,
            email,
            rg
        })

        return res.json({ id })
    },

    //listar os alunos
    async list (req, res) {
        const alunos = await connection("alunos").select("*")
    
        return res.json(alunos)
    }
}