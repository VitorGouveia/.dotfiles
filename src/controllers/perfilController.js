const connection = require("../database/connection")

module.exports = {
    async list(req, res) {
        const aluno_id = req.headers.authorization

        const licoes = await connection("licoes")
            .where("aluno_id", aluno_id)
            .select("*")

        return res.json(licoes)
    }
}