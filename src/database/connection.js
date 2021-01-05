//importando o knex
const knex = require("knex")

//importando as configurações do knexfile
const configuration = require("../../knexfile")

//falando para o knex usar a configuração de desenvolvimento como conexão com o banco de dados
const connection = knex(configuration.development)

module.exports = connection