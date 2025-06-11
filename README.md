# 🧠 Peak Form - Backend API

Este é o backend do projeto **Peak Form**, uma aplicação completa para gerenciamento de treinos e acompanhamento físico. A API foi construída com Node.js e Express, utilizando PostgreSQL como banco de dados relacional e Prisma como ORM.

---

## 🌐 Link do Projeto

- 🔗 Repositório principal (com frontend): https://github.com/iagoliziero/PeakForm-Train-Manager
- Frontend do projeto: https://peak-form-psi.vercel.app/
---

## ⚙️ Tecnologias Utilizadas

- **Node.js**
- **Express**
- **Prisma ORM**
- **PostgreSQL** (banco de dados relacional)
- **NeonDB** (PostgreSQL na nuvem)
- **JWT (JSON Web Token)** – autenticação segura
- **Cors** – configuração de requisições cross-origin

---

## 🔐 Funcionalidades da API

- [x] CRUD completo de usuários e informações corporais
- [x] Login com autenticação por token JWT
- [x] Middleware de verificação de token
- [x] CRUD completo de treinos
- [x] Filtragem de treinos por dia, tipo e grupo muscular
- [x] Proteção de rotas privadas

---

## 📁 Estrutura de Pastas

```

backend/
├── node_modules/
├── prisma/
│   ├── migrations/               # Histórico de migrações do Prisma
│   └── schema.prisma             # Esquema do banco de dados
├── src/
│   ├── config/                   # (opcional) Arquivos de configuração do Prisma
│   ├── controller/               # Controladores da aplicação
│   │   ├── controllerBody.js     # Lógica dos treinos para corpo
│   │   ├── controllerExercises.js# Lógica dos exercícios
│   │   └── controllerUser.js     # Lógica de autenticação e usuários
│   ├── middleware/
│   │   └── verifyToken.js        # Middleware para verificar o token JWT
│   └── routes/
│       ├── body.routes.js        # Rotas relacionadas ao corpo
│       ├── exercises.routes.js   # Rotas de exercícios
│       └── users.routes.js       # Rotas de usuários (login/cadastro)
├── .env                          # Variáveis de ambiente (DB, JWT, etc.)
├── server.js                     # Ponto de entrada do servidor
├── package.json                  # Dependências e scripts
└── package-lock.json             # Versão exata das dependências


````

---

## 🔧 Instalação e Execução

1. **Clone o repositório:**
```bash
git clone https://github.com/iagoliziero/backend-peakform
cd backend-peakform
````

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure o banco de dados:**

* Crie um arquivo `.env` com a variável:

```
DATABASE_URL="postgresql://user:password@host:port/database"
JWT_SECRET="sua_chave_secreta"
```

4. **Execute as migrações:**

```bash
npx prisma migrate dev
```

5. **Inicie o servidor:**

```bash
npm start
```

---

## 🔐 Autenticação JWT

* Após o login, o backend retorna um token JWT.
* Para acessar rotas protegidas, envie esse token no `Authorization` header:

```
Authorization: Bearer SEU_TOKEN_AQUI
```

---

## 📫 Contato

Desenvolvido por Iago Liziero.

* 💼 Linkedin: https://www.linkedin.com/in/iago-liziero-54b81232b/
---

## 📌 Observação

Esse backend foi desenvolvido para ser facilmente escalável e adaptável. Sinta-se livre para contribuir, abrir issues ou sugerir melhorias.

