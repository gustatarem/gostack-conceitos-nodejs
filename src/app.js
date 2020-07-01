const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");
const stringToArray = require('./utils/stringToArray');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const techsArray = stringToArray(techs);

  const repository = { id: uuid(), title, url, techs: techsArray, likes: 0 };

  repositories.push(repository);

  return response.json(repository);
});

app.put("/repositories/:id", (request, response) => {
  const { title, url, techs } = request.body;
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if (repositoryIndex < 0) {
    return response.status(400).json({ error: 'Repository not found' });
  }

  const techsArray = stringToArray(techs);

  let repository = repositories[repositoryIndex];

  repository = {
    ...repository,
    title,
    url,
    techs: techsArray
  }

  repositories[repositoryIndex] = repository;

  return response.json(repository);
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if (repositoryIndex < 0) {
    return response.status(400).json({ error: 'Repository not found' });
  }

  repositories.splice(repositoryIndex, 1);

  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
