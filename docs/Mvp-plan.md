# 🧱 MVP do StudyFlow

## 🎯 Objetivo do MVP

Criar uma plataforma SaaS funcional e estável para centros de estudo gerirem:

* Alunos, professores, aulas e horários
* Autenticação com Firebase
* Dashboard com KPIs
* Gestão multi-tenant por centro
* Upload de materiais e sumários

---

## 📦 Funcionalidades mínimas (MVP)

### 1. Autenticação e Sessões

* Login por e-mail/password (Firebase)
* Middleware para proteger rotas privadas

### 2. Estrutura multi-tenant

* `centerId` por utilizador
* Isolamento de dados entre centros

### 3. Gestão de utilizadores

* Registo de admins, professores e alunos
* Atribuição de permissões por tipo

### 4. Aulas e horários

* gestao de presenças
* Agendamento de aulas
* Atribuição a professor e alunos
* Sumário e materiais por aula

### 5. Dashboard

* Nº de aulas, alunos, professores
* Estatísticas visuais (com `DashboardCard.tsx`)

### 6. Uploads e conteúdos

* Upload para AWS S3 (signed URLs)
* Visualização dos materiais por aluno

### 7. Marcação de explicações (básico)

* Alunos solicitam sessões
* Professores confirmam

### 8. chat (básico)

* conversas entre professores e alunos

---

## 🕒 Estimativa de desenvolvimento (equipa de 3 a 4 devs)

| Fase                                       | Duração estimada |
| ------------------------------------------ | ---------------- |
| Setup inicial (Tailwind, Prisma, Firebase) | 1 semana         |
| Autenticação + middleware                  | 2-3 dias         |
| Gestão de utilizadores                     | 1 semana         |
| Aulas + horários + dashboard               | 2 semanas        |
| Multi-tenant funcional                     | 4-5 dias         |
| Uploads + sumários                         | 1 semana         |
| Estabilização + testes                     | 1 semana         |

🎯 **Total estimado: 4 a 5 semanas**

---

## 🔄 Entregáveis

* Plataforma online funcional (Fly.io)
* Documentação técnica
* Base de dados pronta para escalar
* Repositório GitHub com Issues, Project e CI/CD activos

Última actualização: 19 de Maio de 2025
