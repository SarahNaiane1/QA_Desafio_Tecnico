import { Dado, Quando, Então } from "@badeball/cypress-cucumber-preprocessor";

//
// Contexto
//
Dado("que o usuário acessa a página inicial da NEXDOM", () => {
  cy.visit("https://nexdom.tec.br/");
});

//
// Cenário 1 - Página Inicial
//
Quando("a página é carregada", () => {
  cy.get("body").should("be.visible");
});

Então("o logotipo da NEXDOM deve estar visível", () => {
  cy.get('img[alt="NEXDOM"]').should("be.visible");
});

Então("o menu de navegação deve estar presente", () => {
  cy.get("nav").should("be.visible");
});

Então("o banner principal deve ser exibido", () => {
  cy.get(".banner-principal").should("be.visible");
});

//
// Cenário 2 - Navegação
//
Quando('o usuário clica no link "Soluções"', () => {
  cy.contains("Soluções").click();
});

Então("a página de Soluções deve ser carregada", () => {
  cy.url().should("include", "/solucoes");
});

Então('o título "Soluções" deve estar visível', () => {
  cy.get("h1").should("contain.text", "Soluções");
});

//
// Cenário 3 - Formulário de Contato
//
Dado("que o usuário acessa a página de Contato da NEXDOM", () => {
  cy.visit("https://nexdom.tec.br/contato");
});

Quando("o usuário preenche o formulário com nome, email e mensagem válidos", () => {
  cy.get('input[name="nome"]').type("Sarah Teste");
  cy.get('input[name="email"]').type("sarah@teste.com");
  cy.get('textarea[name="mensagem"]').type("Mensagem de teste automatizado.");
});

Quando('clica no botão "Enviar"', () => {
  cy.contains("Enviar").click();
});

Então("uma mensagem de sucesso deve ser exibida", () => {
  cy.get(".mensagem-sucesso").should("be.visible");
});
