const express = require('express');

const app = express();

/**
 * GET - BUSCAR UMA INFORMAÇÃO DENTRO DO SERVIDOR
 * POST - INSERIR UMA INFORMAÇÃO NO SERTVIDOR
 * PUT - ALETAR UMA INFORMAÇÃO NO SERTVIDOR
 * PATCH - ALTERAR UMA INFORMAÇÃO ESPECIFICA
 * DELETE - DELETAR UMA INFORMAÇÃO NO SERVIDOR
 */

app.get("/courses" , (request, response) => {
  return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response) => {
  return response.json(["Curso 1" , "Curso 2" , "Curso 3" , "Curso 4"]);
});

app.put("/courses/:id", (request, response) => {
  return response.json(["Curso 6" , "Curso 2" , "Curso 3" , "Curso 4"]);
});

app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso 6" , "Curso 7" , "Curso 3" , "Curso 4"]);
});

app.delete("/courses/:id", (request, response) => {
  return response.json(["Curso 6" , "Curso 2" , "Curso 4"]);
});

app.listen(3333);
