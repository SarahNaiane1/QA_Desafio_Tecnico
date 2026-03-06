describe('Testes de Front-End - NEXDOM', () => {

  context('Página Inicial', () => {
    it('Verifica elementos principais', () => {
      cy.visit('https://nexdom.tec.br/');
      cy.get('img[alt="NEXDOM"]').should('be.visible'); 
      cy.get('nav').should('be.visible');
      cy.get('.banner-principal').should('be.visible'); 
    });
  });

  context('Navegação', () => {
    it('Acessa a página de Soluções', () => {
      cy.visit('https://nexdom.tec.br/');
      cy.contains('Soluções').click();
      cy.url().should('include', '/solucoes');
      cy.get('h1').should('contain.text', 'Soluções');
    });
  });

  context('Formulário de Contato', () => {
    it('Submete formulário com sucesso', () => {
      cy.visit('https://nexdom.tec.br/contato');
      cy.get('input[name="nome"]').type('Sarah Teste');
      cy.get('input[name="email"]').type('sarah@teste.com');
      cy.get('textarea[name="mensagem"]').type('Mensagem de teste automatizado.');
      cy.contains('Enviar').click();
      cy.get('.mensagem-sucesso').should('be.visible');
    });
  });

});
