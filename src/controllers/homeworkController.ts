import { Request, Response } from "express"

import { client } from "../prisma"

export const homeworkControler = {
  //criar um caso
  create: async (request: Request, response: Response) => {
    //desestruturando o título, matéria, descrição e data da lição do corpo da requisição
    const { title, subject, description, date } = request.body

    //cabeçalho da requisição, guarda informações sobre o contexto da requisição
    const studentId = request.headers["authorization"]

    //inserindo os dados no banco de dados
    const { id } = await client.homework.create({
      data: {
        title,
        subject,
        description,
        date,
        studentId,
      },
    })

    //retornando o id da lição
    return response.json({ id })
  },

  //listar as lições
  list: async (request: Request, response: Response) => {
    //buscando dos query params o parâmetro 'page', caso ele não exista, dar o valor de 1
    const { page = 1 } = request.query

    //retorna a quatindade de lições
    const totalHomeworks = await client.homework.count()

    //selecionando todos os casos do banco de dados
    const homeworks = await client.homework.findMany({
      select: {
        student: true,
      },
      take: 5,
      skip: (Number(page) - 1) * 5,
    })

    //mandando o total de lições para o header da requisição
    response.header("x-Total-Count", String(totalHomeworks))

    //retornando todas as lições existentes
    return response.json(homeworks)
  },

  //deletar as lições
  delete: async (request: Request, response: Response) => {
    //pegando o 'id' da lição na rota
    const { id } = request.params
    const studentId = request.headers["authorization"]

    const homework = await client.homework.findFirst({
      where: {
        id: Number(id),
      },
    })

    if (homework.studentId !== studentId) {
      //caso o 'aluno_id' não seja o mesmo 'aluno_id' que registrou o post, retorna uma mensagem de erro
      return response.status(401).json({ error: "Operation not guaranted." })
    }

    //deleta o caso
    await client.homework.delete({
      where: {
        id: homework.id,
      },
    })

    //manda um status http 204
    return response.status(204).json(homework)
  },
}
