"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sessionController = void 0;

var _prisma = require("../prisma");

const sessionController = {
  async create(request, response) {
    const {
      id
    } = request.body;
    const student = await _prisma.client.student.findUnique({
      where: {
        id
      }
    });

    if (!student) {
      return response.json(400).json({
        error: "No student with this name."
      });
    }

    return response.json(student);
  }

};
exports.sessionController = sessionController;