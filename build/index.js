"use strict";

var _express = _interopRequireDefault(require("express"));

require("dotenv/config");

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)(); //importando as rotas
//porta que será usado pelo express

const port = process.env.PORT; //permite que o express use o módulo de segurança

app.use((0, _cors.default)()); //permite que o express use json

app.use(_express.default.json()); //ouvindo o servidor na variável 'porta'

app.listen(port, () => console.log(`Server rodando na porta ${port}`));