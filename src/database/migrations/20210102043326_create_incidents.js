
exports.up = function(knex) {
    return knex.schema.createTable("licoes", function(table) {
        table.increments()
        //título da lição
        table.string("titulo").notNullable()

        //nome da matéria
        table.string("materia").notNullable()

        //descrição da lição
        table.string("descricao").notNullable()

        //data da entrega
        table.string("data").notNullable()

        //relacionamento com id do aluno
        table.string("aluno_id").notNullable()

        //chave estrangeira
        table.foreign("aluno_id").references("id").inTable("alunos")
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("licoes")
};
