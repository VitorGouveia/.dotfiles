"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.profileController = void 0;

var _prisma = require("../prisma");

const profileController = {
  async list(request, response) {
    const studentId = request.headers["authorization"];
    const homeworks = await _prisma.client.homework.findMany({
      where: {
        studentId
      }
    });
    return response.json(homeworks);
  }

};
exports.profileController = profileController;