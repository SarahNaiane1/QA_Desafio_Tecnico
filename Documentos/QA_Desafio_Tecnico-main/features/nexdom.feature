Funcionalidade: Testes de Front-End no site da NEXDOM

  Contexto:
    Dado que o usuário acessa a página inicial da NEXDOM

  Cenário: Verificar elementos principais da página inicial
    Quando a página é carregada
    Então o logotipo da NEXDOM deve estar visível
    E o menu de navegação deve estar presente
    E o banner principal deve ser exibido

  Cenário: Navegar para a página de Soluções
    Quando o usuário clica no link "Soluções"
    Então a página de Soluções deve ser carregada
    E o título "Soluções" deve estar visível

  Cenário: Submeter formulário de contato com sucesso
    Dado que o usuário acessa a página de Contato da NEXDOM
    Quando o usuário preenche o formulário com nome, email e mensagem válidos
    E clica no botão "Enviar"
    Então uma mensagem de sucesso deve ser exibida

