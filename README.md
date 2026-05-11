📌 TODO API — Node.js + Express + Prisma + PostgreSQL

Repositório: https://github.com/josecarlos2601/todo-api.git

Uma API simples e eficiente para gerenciamento de tarefas (TODO), desenvolvida com Node.js, Express, Prisma ORM e PostgreSQL.
Ideal para estudos, projetos acadêmicos e como base para aplicações maiores.

🚀 Tecnologias Utilizadas
Node.js
Express
Prisma ORM
PostgreSQL
Docker (opcional)
Nodemon (ambiente de desenvolvimento)

📁 Estrutura do Projeto
todo-api/
│── prisma/
│   ├── schema.prisma
│   └── migrations/
│── src/
│   ├── controllers/
│   ├── routes/
│   ├── server.js
│   └── prisma.js
│── package.json
│── prisma.config.ts
│── README.md

⚙️ Como rodar o projeto

1️⃣ Clonar o repositório
git clone https://github.com/josecarlos2601/todo-api.git
cd todo-api

2️⃣ Instalar as dependências
npm install

3️⃣ Configurar o banco de dados
Criar um arquivo .env na raiz:
DATABASE_URL="postgresql://postgres:Adm1234@localhost:5432/todo_db?schema=public"
Ou ajuste conforme seu PostgreSQL.

🛠️ Rodar migrations
npx prisma migrate dev

Gerar o client:
npx prisma generate

▶️ Iniciar o servidor
npm run dev

API disponível em:
👉 http://localhost:3000

📚 Rotas da API
➕ Criar tarefa
POST /todos
{
  "title": "Estudar Node",
  "description": "Finalizar CRUD"
}

📄 Listar tarefas
GET /todos

🔍 Buscar tarefa por ID
GET /todos/:id

✏️ Atualizar tarefa
PUT /todos/:id

❌ Deletar tarefa
DELETE /todos/:id

🧩 Melhorias Futuras (Sugestões)
✔️ Validação com Zod ou Joi
✔️ Testes automatizados (Jest)
🔒 Autenticação JWT
🧑‍💻 Swagger para documentação
📦 Docker Compose para facilitar setup
🧱 Arquitetura mais robusta (MVC / Clean Architecture)
📊 Logs estruturados
🔄 Paginação e filtros nas rotas

🙌 Contribuição
Sinta-se à vontade para enviar PRs, sugestões ou abrir issues diretamente no repositório.

📜 Licença
MIT © 2026 — José Carlos
