"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.studentController = void 0;

var _crypto = require("crypto");

var _uuid = require("uuid");

var _prisma = require("../prisma");

const studentController = {
  //criar uma lição
  create: async (request, response) => {
    //desestruturação de dados da requisição
    const {
      name,
      lastname,
      email,
      rg
    } = request.body;
    const id = (0, _crypto.randomBytes)(4).toString("hex");
    await _prisma.client.student.create({
      data: {
        id: (0, _uuid.v4)(),
        name,
        lastname,
        email,
        rg
      }
    });
    return response.json({
      id
    });
  },
  //listar os alunos
  list: async (request, response) => {
    const students = await _prisma.client.student.findMany();
    return response.json(students);
  }
};
exports.studentController = studentController;