const connection = require("../database/connection")

module.exports = {
    async create(req, res) {
        const { id } = req.body
        
        const alunos = await connection("alunos")
            .where("id", id)
            .select("nome")
            .first()

        if(!alunos) {
            return res.json(400).json({ error: "Nenhum aluno com esse nome" })
        }

        return res.json(alunos)
    }
}