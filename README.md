# API Testing Project

Este projeto é destinado a testar APIs utilizando PactumJS, GraphQL, Mocha e Supertest. Os testes são focados em operações de usuário e login.

## Pré-requisitos

- Node.js
- npm

## Dependências

- pactum
- pactum-matchers
- mocha
- graphql
- supertest

## Instalação

Instale as dependências do projeto executando o seguinte comando:

```bash
npm install
```

## Estrutura do Projeto
O projeto é estruturado da seguinte maneira:

- tests/: Diretório que contém todos os arquivos de teste.
- user.test.js: Arquivo de teste para operações de usuário.
- login.test.js: Arquivo de teste para operações de login.

## Execução dos Testes
Para executar os testes, execute o seguinte comando:
```bash
npm test
```

## Descrição dos Testes
- Testes de Usuário
    Os testes de usuário verificam as operações CRUD básicas para um usuário. Isso inclui a criação de um novo usuário, a leitura de informações de um usuário existente, a atualização de informações de um usuário e a exclusão de um usuário.

- Testes de Login
    Os testes de login verificam se a autenticação e a autorização funcionam corretamente. Isso inclui testar se um usuário pode fazer login com credenciais válidas e se um token de acesso é retornado.