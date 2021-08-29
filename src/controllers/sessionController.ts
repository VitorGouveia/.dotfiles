import { Request, Response } from "express"

import { client } from "../prisma"

export const sessionController = {
  async create(request: Request, response: Response) {
    const { id } = request.body

    const student = await client.student.findUnique({
      where: {
        id,
      },
    })

    if (!student) {
      return response.json(400).json({ error: "No student with this name." })
    }

    return response.json(student)
  },
}
