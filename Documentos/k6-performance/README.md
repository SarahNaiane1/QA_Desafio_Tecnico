# Introdução aos testes de performance com k6


# User API

## 🔖 Requisitos funcionais

### Cadastro

- [X] Deve retornar os id ao cadastrar um novo usuário
- [X] Deve retornar 201 ao cadastrar um novo usuário
- [X] Deve retornar 400 ao tentar cadastrar sem email e senha
- [X] Deve retornar 400 se o email for duplicado

| campos   | descrição                             | tipo     | obrigatório |
| :-----   | :------------------------------------ | :------- | :---------- |
| email    | usuário identificador único           | email    | sim         |
| password | senha do usuário                      | texto    | sim         |

## 🔖 Requisitos não funcionais

### Cadastro

- [X] O cadastro com sucesso deve ocorrer em até 2 segundos
- [X] Cadastros sem sucesso devem ocorrer em até 2 segundos
- [X] Deve poder cadastrar até 100 usuários simultâneos
- [X] A margem de erro no cadastro deve ser de pelo menos 1%

## 🚀 Tecnologias

- [Node.js] - plataforma de desenvolvimento
- [Express] - framework onde a API foi construída
- [MongoDB] - Banco de dados (Não relacional)
- [k6] - ferramenta para teste de carga, performance, stress etc...

## 👨🏻‍💻 Como executar o projeto

[Node.js](https://nodejs.org/) v16 ou superior para executar.

Para liberar o gerenciador de pacotes Yarn:

```
corepack enable
```

Execute os comandos abaixo para instalar das dependências do projeto:

```sh
cd k6-perfomance/api
npm install
npm  dev
```


Execute o teste usando o comando k6 run

```
k6 run <nomedoarquivo>.js

```
## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

