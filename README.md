
<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h3 align="center">
  Desafio 02: Conceitos do Node.js
</h3>

## :rocket: Sobre o desafio

Esse projeto tem como objetivo fixar os conceitos de Node.js aprendidos até agora criando uma aplicação de armazenamento de repositórios, onde é possível criar, listar, atualizar, remover e curtir repositórios.

## :trophy: Principais funcionalidades
- Criar um repositório
- Listar os repositórios já existentes
- Atualizar os dados de um repositório
- Remover repositórios
- Curtir um repositório

### Rotas da aplicação

- **`POST /repositories`**: Recebe `title`, `url` e `techs` dentro do corpo da requisição, sendo a URL o link para o github desse repositório. 

- **`GET /repositories`**: Rota que lista todos os repositórios;

- **`PUT /repositories/:id`**: Altera apenas o `title`, a `url` e as `techs` do repositório que possua o `id` igual ao `id` presente nos parâmetros da rota;

- **`DELETE /repositories/:id`**: Deleta o repositório com o `id` presente nos parâmetros da rota;

- **`POST /repositories/:id/like`**: A rota aumenta o número de likes do repositório específico escolhido através do `id` presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes é aumentado em 1;

## :computer: Instruções de instalação e teste
Clone o repositório usando o `git` ou faça o download no formato zip. 
Antes de tudo, certifique-se de que você tem um gerenciador de pacotes e o `Node.js` instalados em sua máquina.

Após baixar o projeto, abra uma aba do terminal e execute os seguintes comandos:

```Bash
# ../pasta-de-destino
$ cd gostack-conceitos-nodejs
# ../pasta-de-destino/gostack-conceitos-nodejs
$ ls
# jest.config.js node_modules   nodemon.json   package.json   src   yarn.lock   README.md
$ yarn
```

Para iniciar a aplicação na porta 3333:

```Bash
# ../pasta-de-destino/gostack-conceitos-nodejs
$ yarn dev
```
Para rodar os testes da aplicação:
```Bash
# ../pasta-de-destino/gostack-conceitos-nodejs
$ yarn test
```
