# 📚 StudyFlow

**StudyFlow** é uma plataforma SaaS moderna para gestão de centros de estudo, desenvolvida com tecnologias de ponta para oferecer uma experiência completa a administradores, professores e alunos. A aplicação permite gerir aulas, horários, pagamentos, conteúdos e interações, tanto em ambiente web como, futuramente, em app móvel.

## 🚀 MVP - Funcionalidades Implementadas

- 📊 **Painel de gestão** para direcção:
  - Estatísticas financeiras (ganhos, gastos)
  - Número de aulas, alunos e professores
  - Número de horas (total do centro, total de cada professor e de cada aluno, total de professores e de alunos)
  - inserir comunicados
  - registar professores e alunos
  - registar explicações
- 🧑‍🏫 **Gestão de horários**:
  - Para professores e alunos, com sobreposição detectada
  - Marcação de explicações
- 📁 **Gestão de aulas**:
  - Registo e gestão de presenças
  - Criação de sumários e conteúdos
  - Upload de ficheiros (via AWS S3)
- 🔐 **Autenticação via Firebase**:
  - Login por email e número de telemóvel
  - Presença em tempo real e sistema de chat (via Firebase Realtime)
- 🔎 **Analytics de uso** (Firebase)
- ☁️ **Deploy contínuo com GitHub Actions + Fly.io**

---

## 🧪 Stack Tecnológica

| Tecnologia     | Função                              |
|----------------|-------------------------------------|
| `Remix.run`    | Fullstack React framework           |
| `TailwindCSS`, `TailwindUI`, `HeadlessUI` | UI e componentes acessíveis |
| `PostgreSQL`   | Base de dados relacional            |
| `Prisma ORM`   | Mapeamento e acesso à base de dados |
| `Zod`          | Validação e transformação de dados  |
| `AWS S3`       | Armazenamento de ficheiros          |
| `Firebase`     | Auth, Realtime DB, Analytics        |
| `GitHub`       | Repositório, Projects, Actions(CI/CD)        |
| `Fly.io`       | Deploy escalável                    |

---

## 🛠️ Como executar localmente

```bash
# Clonar repositório
git clone https://github.com/teu-username/studyflow.git
cd studyflow

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env
# (Preencher com credenciais do Firebase, AWS S3, PostgreSQL, etc.)

# Migrar base de dados
npx prisma migrate dev

# Iniciar aplicação
npm run dev


