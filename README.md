# Back-end FIAP Blog

Este é um projeto desenvolvido para o Hackathon (desafio final) do curso de pós graduação em desenvolvimento full stack da universidade FIAP. O mesmo consiste na criação de uma API back-end em Node.js para uma plataforma que permite que professores da rede pública de ensino criem provas ou questões customizadas para cada estudante, de acordo com seus interesses, idade e série. Esta iniciativa visa promover um maior engajamento dos alunos e aproveitamento do aprendizado, uma vez que as provas criadas terão as matérias dadas em sala de aula adaptadas aos interesses de cada aluno.

## 🛠️ Tecnologias utilizadas

- Node.js
- Express
- Mongoose
- MongoDB Atlas

## 💻 Pré-requisitos

Antes de iniciar, verifique se seu computador possui instalado:

- [Node.js](https://nodejs.org/pt);

## 🔧 Instalação

Para executar o back-end localmente, siga estas etapas, utilizando seu terminal preferido:

```bash
# Clonar repositório:
git clone https://github.com/HeloiseSantos/fiap-hackathon-backend-api

# Acessar pasta do projeto
cd fiap-hackathon-backend-api

# Abrir projeto no editor de código:
code .

# Instalar dependências
npm install
```

## 🚀 Executar projeto localmente

```bash
# Levantar server local
npm start
```
Com o projeto rodando na porta 3001 [http://localhost:3001], é possível utilizar este projeto no front-end desenvolvido especificamente para o desafio deste hackathon. Para rodar junto com o front-end, siga as instruções disponíveis no README.md do seguinte repositório: https://github.com/jmoreira7/fiap-hackathon-frontend 

Também é possível utilizá-lo com ferramentas de acesso a APIs REST, como o [Insomnia](https://insomnia.rest/download) ou [Postman](https://www.postman.com/).
A collection com as requisições prontas estão disponíveis no projeto no seguinte diretório: `collection/collection-api-hackathon-fiap`. Basta baixar o arquivo e importá-lo na ferramenta de preferência.

Rotas/funcionalidades da aplicação:

- Cadastrar novo aluno (POST): `/students`
- Listar todos os alunos cadastrados (GET): `/students`
- Pesquisa de alunos por palavras chave (GET): `/students/search`
- Selecionar aluno por id (GET): `/students/:id`
- Editar dados de um aluno (PUT): `/students/:id`
- Deletar um aluno (DELETE): `/students/:id`

## 🌐 Publicação na nuvem (Deploy)

A interface do projeto pode ser publicada em serviços como [Vercel](https://vercel.com/) ou [Netlify](https://www.netlify.com/). No momento, o projeto está configurado para rodar localmente.

## 🧑🏻‍💻👩🏻‍💻 Colaboradores

Grupo composto por:

- Heloíse Silva Santos - https://github.com/HeloiseSantos
- Jonas de Andrade Zuazo Moreira - https://github.com/jmoreira7
