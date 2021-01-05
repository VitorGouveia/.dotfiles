
exports.up = function(knex) {
  return knex.schema.createTable("alunos", function(table) {
    //chave primária
    table.string("id").primary()

    //nome do aluno
    table.string("nome").notNullable()

    //sobrenome do aluno
    table.string("sobrenome").notNullable()

    //email do aluno
    table.string("email").notNullable()

    //rg do aluno
    table.string("rg").notNullable()
  })
};

exports.down = function(knex) {
    return knex.shema.dropTable("alunos")
};
