# 💪 Movimenta+

**Movimenta+** é uma aplicação web voltada à saúde e bem-estar, que permite o cadastro, autenticação e visualização de dados pessoais como nome, peso, altura, sexo e data de nascimento. O objetivo é oferecer uma experiência intuitiva e acessível, focada no cuidado com o usuário.

---

## 📌 Funcionalidades

- ✅ Tela de cadastro com validação
- ✅ Tela de login com autenticação
- ✅ Armazenamento de usuários no banco de dados
- ✅ Design responsivo
- ✅ Comunicação FrontEnd ↔ BackEnd via API REST

---

## 🛠️ Tecnologias utilizadas

### FrontEnd
- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [React Router DOM](https://reactrouter.com/)
- CSS Puro

### BackEnd
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [MongoDB](https://www.mongodb.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [CORS](https://expressjs.com/en/resources/middleware/cors.html)

---

## 🌍 Repositório

🔗 GitHub: [https://github.com/guigotrajano/MovimentaMais](https://github.com/guigotrajano/ProjetoMovimentaMais)

### 🔸 Branchs:
- [FrontEnd](https://github.com/guigotrajano/MovimentaMais/tree/FrontEnd)
- [BackEnd](https://github.com/guigotrajano/MovimentaMais/tree/BackEnd)

---

## ⚙️ Pré-requisitos

Instale os seguintes recursos:

- **[Node.js](https://nodejs.org/en)** (v18 ou superior)
- **npm** (instalado com o Node)
- **MongoDB** (local ou MongoDB Atlas)
- **Git** (para clonar o projeto)

---

## 🚀 Como rodar o projeto

### 🔧 1. Clonar o repositório

```bash
git clone https://github.com/guigotrajano/ProjetoMovimentaMais.git
cd MovimentaMais

## BackEnd:

git checkout BackEnd
cd BackEnd
npm install
cp .env.example .env
npx prisma generate
node server.js

## FrontEnd:

git checkout FrontEnd
cd src
npm install
npm run dev

🔐 Variáveis de ambiente

BackEnd: .env
DATABASE_URL="mongodb+srv://<usuario>:<senha>@cluster.mongodb.net/<database>"

👨‍💻 Autor
Guilherme Trajano
Engenharia da Computação – [UPE/Poli]
