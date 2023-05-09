
# Blogs API

O Blogs API é um serviço que permite a criação, edição e remoção de artigos de um blog. Ela é acessível por meio de endpoints HTTP, que respondem com dados em formato JSON. Além disso, a API também oferece funcionalidades para o gerenciamento de usuários, que podem criar e editar artigos em nome próprio.

Os endpoints da API permitem a criação de novos artigos, a listagem de todos os artigos disponíveis, a edição e exclusão de artigos existentes, bem como a obtenção de detalhes de um artigo específico. Além disso, a API também permite a criação, edição e exclusão de usuários, bem como a autenticação de usuários por meio de tokens de acesso.



## Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/) e [npm](https://www.npmjs.com/)
## Como iniciar o projeto

### Com Docker Compose

1. Clone o repositório.
2. Abra um terminal na pasta raiz do projeto.
3. Execute o seguinte comando para iniciar os containers do Docker:

```bash
docker-compose up -d
```

Este comando irá baixar e iniciar as imagens do Docker definidas no arquivo `docker-compose.yml`.

4. Execute o seguinte comando para abrir o terminal do container blogs_api:

```bash
docker exec -it blogs_api bash
```

5. Execute o comando a seguir para iniciar a aplicação:
```bash
npm run dev
```

5. Abra um navegador e acesse a aplicação em [http://localhost:3001](http://localhost:3001).



### Com npm

1. Clone o repositório.
2. Abra um terminal na pasta raiz do projeto.
3. Execute o seguinte comando para instalar as dependências:

```bash
npm install
```

Este comando irá instalar as dependências definidas no arquivo `package.json`.

4. Execute o seguinte comando para iniciar a aplicação:
<br />
obs: não se esqueça de criar o .env

```bash
npm run dev
```



Qualquer dúvida ou problema, consulte a documentação do Docker ou do npm.




## Endpoints

<details>
  <summary><code>POST /categories</code></summary>
Cria uma nova categoria no blog. É necessário enviar no corpo da requisição o nome da categoria. Retorna a categoria criada, com o seu ID gerado automaticamente.
<details>
<summary>Exemplo de corpo de requisição</summary>
  
```json
{
  "name": "Typescript"
}
```
</details>

:point_up: Para acessar esta rota o token é obrigatório.

</details>

<details>
  <summary><code>GET /categories</code></summary>
Lista todas as categorias existentes no blog, com seus respectivos IDs e nomes.

:point_up: Para acessar esta rota o token é obrigatório.

</details>

<details>
  <summary><code>POST /login</code></summary>
<br />
Autentica um usuário no sistema. É necessário enviar no corpo da requisição os seguintes campos: `email` e `password`. Retorna um token de acesso válido por um determinado período de tempo.

<details>
<summary>Exemplo de corpo de requisição</summary>
  
```json
{
"email": "ikaro@example.com",
"password": "123456"
}
```
</details>

</details>
<details>
  <summary><code>POST /post</code></summary>
Cria um novo artigo no blog. É necessário enviar no corpo da requisição os seguintes campos: `title`, `content` e `categoryIds` (Array de ID de categorias existentes). Retorna o artigo criado, com o seu ID gerado automaticamente.

<details>
<summary>Exemplo de corpo de requisição</summary>
  
```json
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key",
  "categoryIds": [1, 2]
}
```
</details>

:point_up: Para acessar esta rota o token é obrigatório.

</details>

<details>
  <summary><code>POST /user</code></summary>
Cria um novo usuário no sistema. É necessário enviar no corpo da requisição os seguintes campos: `displayName`, `email`, `password` e, opcionalmente, `image`. Retorna um token gerado com as informações passada, exceto a senha.

<details>
<summary>Exemplo de corpo de requisição</summary>
  
```json
{
  "displayName": "Ikaro Vieira",
  "email": "ikaro@example.com",
  "password": "123456",
  "image": "https://avatars.githubusercontent.com/u/89671522?v=4"
  // a imagem não é obrigatória
}

```
</details>

</details>

<details>
  <summary><code>GET /user</code></summary>
Lista todos os usuários existentes no sistema, com seus respectivos IDs, nomes, emails e imagens.

:point_up: Para acessar esta rota o token é obrigatório.

</details>

<details>
  <summary><code>GET /user/:id</code></summary>
Obtém os detalhes de um usuário específico, identificado pelo seu ID. Retorna o ID, nome e email do usuário.

:point_up: Para acessar esta rota o token é obrigatório.

</details>

## Tecnologias Utilizadas

### Backend

- [Express](https://expressjs.com/): Framework web para Node.js.
- [Joi](https://joi.dev/): Biblioteca para validação de dados em JavaScript.
- [JSON Web Token](https://jwt.io/): Padrão para autenticação em APIs.
- [MySQL2](https://github.com/mysqljs/mysql#readme): Biblioteca para conexão com o banco de dados MySQL.
- [Sequelize](https://sequelize.org/): ORM para banco de dados em Node.js.

### DevDependencies

- [ESLint Config Trybe Backend](https://github.com/tryber/eslint-config-trybe-backend): Configurações do ESLint para projetos backend na Trybe.
- [Nodemon](https://nodemon.io/): Utilitário que reinicia automaticamente o servidor quando há alterações no código.
- [Sequelize CLI](https://github.com/sequelize/cli): Interface de linha de comando para o Sequelize.

## Atualizações futuras

Pretendo adicionar endpoints para pegar todos os posts, para pegar pelo id ou slug, para atualizar algum post, par deletar um post, para deletar um usuário e para pesquisar um post.
