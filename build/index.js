"use strict";

var _express = _interopRequireDefault(require("express"));

require("dotenv/config");

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = require("body-parser");

var _routes = require("./routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)(); //importando as rotas
//porta que será usado pelo express

const port = process.env.PORT; //permite que o express use o módulo de segurança

app.use((0, _cors.default)()); //permite que o express use json

app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
app.use((0, _bodyParser.json)());
app.use(_routes.routes); //ouvindo o servidor na variável 'porta'

app.listen(port, () => console.log(`Server rodando na porta ${port}`));