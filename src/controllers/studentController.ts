import { Request, Response } from "express"
import { randomBytes } from "crypto"
import { v4 as uuid } from "uuid"

import { client } from "../prisma"

export const studentController = {
  //criar uma lição
  create: async (request: Request, response: Response) => {
    //desestruturação de dados da requisição
    const { name, lastname, email, rg } = request.body

    const id = randomBytes(4).toString("hex")

    await client.student.create({
      data: {
        id: uuid(),
        name,
        lastname,
        email,
        rg,
      },
    })

    return response.json({ id })
  },

  //listar os alunos
  list: async (request: Request, response: Response) => {
    const students = await client.student.findMany()

    return response.json(students)
  },
}
