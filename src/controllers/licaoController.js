//importando o connection
const connection = require("../database/connection")

module.exports = {
    //criar um caso
    async create(req, res) {
        //desestruturando o título, matéria, descrição e data da lição do corpo da requisição
        const { titulo, materia, descricao, data } = req.body

        //cabeçalho da requisição, guarda informações sobre o contexto da requisição
        const aluno_id = req.headers.authorization

        //inserindo os dados no banco de dados
        const [id] = await connection("licoes").insert({
            titulo,
            materia,
            descricao,
            data,
            aluno_id
        })

        //retornando o id da lição
        return res.json({ id })
    },

    //listar as lições
    async list(req, res) {
        //buscando dos query params o parâmetro 'page', caso ele não exista, dar o valor de 1
        const { page = 1 } = req.query

        //retorna a quatindade de lições
        const [count] = await connection("licoes").count()
        
        //selecionando todos os casos do banco de dados
        const licoes = await connection("licoes")
        //puxando dados da tabela alunos, id, nome, sobrenome, email e rg
        .join("alunos", "aluno_id", "=", "licoes.aluno_id")
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            "licoes.*", 
            "alunos.nome", 
            "alunos.sobrenome", 
            "alunos.email", 
            "alunos.rg"
        ])

        //mandando o total de lições para o header da requisição
        res.header("x-Total-Count", count["count(*)"])

        //retornando todas as lições existentes
        return res.json(licoes)
    },

    //deletar as lições
    async delete(req, res) {
        //pegando o 'id' da lição na rota
        const { id } = req.params
        const aluno_id = req.headers.authorization

        //apenas deletando os casos se o id da ong estiver correto
        const licoes = await connection("licoes")
            //onde 'id' do banco de dados é igual a variável 'id'
            .where("id", id)
            //selecionar o campo 'aluno_id'
            .select("aluno_id")
            //selecionar o primeiro item do campo 'aluno_id'
            .first()
        
        if(licoes.aluno_id !== aluno_id) {
            //caso o 'aluno_id' não seja o mesmo 'aluno_id' que registrou o post, retorna uma mensagem de erro
            return res.status(401).json({ error: "Operation not guaranted" })
        }

        //deleta o caso
        await connection("licoes").where("id", id).delete()

        //manda um status http 204
        return res.status(204).send()
    }
}