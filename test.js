// test.js
const { JSDOM } = require('jsdom');
const jquery = require('jquery');

// Criação do ambiente DOM
const { window } = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = window.document;
global.window = window;
global.$ = jquery(window);

// Simulação do ScrollReveal
global.ScrollReveal = {
  reveal: jest.fn()
};

// Definindo o HTML para os testes
document.body.innerHTML = `
  <header>
    <nav id="navbar"> 
      <i class="fa-brands fa-connectdevelop" id="nav_logo"> Aquele Site</i>
      <ul id="nav_list">
        <li class="nav-item active"><a href="#home">Início</a></li>
        <li class="nav-item"><a href="#menu" id="btnFerramentas">Ferramentas</a></li>
      </ul>
      <button id="mobile_btn"><i class="fa-solid fa-bars"></i></button>
    </nav>
    <div id="mobile_menu">
      <ul id="mobile_nav_list">
        <li class="nav-item"><a href="#home">Início</a></li>
        <li class="nav-item"><a href="#menu">ferramentas</a></li>
      </ul>
    </div>
  </header>
  <main id="content">
    <section id="home">
      <div class="shape"></div>
      <div id="cta">
        <h1 class="title">Aquela ferramenta que <span>você Precisa</span></h1>
        <p class="description">A melhor plataforma com as melhores ferramentas da engenharia de software você encontra aqui!</p>
      </div>
      <div id="banner"><img src="src/images/IMG01.png" alt=""></div>
    </section>
    <section id="menu">
      <h2 class="section-title">Ferramentas</h2>
      <div id="tool">
        <div class="tool">
          <img src="src/images/Jira.png" class="tool-image" alt="">
          <h3 class="tool-title">Jira</h3>
          <span class="tool-description">Jira é um software comercial desenvolvido pela empresa Australiana Atlassian. É uma ferramenta que permite o monitoramento de tarefas e acompanhamento de projetos garantindo o gerenciamento de todas as suas atividades em único lugar.</span>
          <div class="tool-price">
            <h4>Ver mais</h4>
            <button class="btn-default">
              <a href="https://www.atlassian.com/software/jira/guides/getting-started/introduction#what-is-jira-software" class="btn-default" target="_blank">
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer>
    <img src="src/images/wave.svg" alt="">
    <div id="footer_items">
      <span id="copyright">&copy Unifacs</span>
    </div>
  </footer>
`;

// Importação do código JavaScript a ser testado
require('./src/javascript/script.js');

describe('Toolbox Button', () => {
  test('deve criar a caixa de ferramentas ao clicar no botão', () => {
    $('#btnFerramentas').click();
    expect($('#toolbox')).toBeDefined();
  });

  test('deve remover a caixa de ferramentas ao clicar fora dela', () => {
    $('#btnFerramentas').click();
    $(document).click({ target: $('#btnFerramentas') });
    expect($('#toolbox').length).toBe(0);
  });
});
