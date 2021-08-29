import { Request, Response } from "express"

import { client } from "../prisma"

export const profileController = {
  async list(request: Request, response: Response) {
    const studentId = request.headers["authorization"]

    const homeworks = await client.homework.findMany({
      where: {
        studentId,
      },
    })

    return response.json(homeworks)
  },
}
