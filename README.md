# Bishops And Cannibals
<div align="center">

<img height="50" alt="logo (1)" src="https://github.com/user-attachments/assets/ee8b14db-b14c-423f-86bb-726b5d110ebd" />

</div>

### Mini-game de lógica

#### Overview:
Treine sua lógica com a minha versão do mini-game "Canibais e missionários". Encontre um jeito de fazer todos atravessarem para a outra margem enquanto se certifica de nunca deixar os canibais em vantagem numérica.

<img width="1896" height="912" alt="Captura de tela 2026-03-02 212319" src="https://github.com/user-attachments/assets/637669b3-ca6b-424d-b8a7-f9f9e47f95ae" />


#### Descrição:
Página web interativa feita em HTML, CSS e JavaScript. Possibilita interação via teclado, mouse ou touchscreen, se ajustando responsivamente a diferentes tamanhos e tipos de tela. Com um aspecto lúdico em pixel art, a página conta com uma interface limpa e intuitiva, possibilitando ao usuário uma experiência clara e simplificada.

---
#### Estrutura do projeto:

O projeto conta com uma estrutura simples de pastas:
- css 
  - (...)
- images
  - background
  - characters
  - controls
  - (...)
- javascript
  - <strong> script.js </strong>
- <strong> Index.html </strong>

Css: Conta com toda a estilização da página, separando as style sheet por segmento de acordo com a estrutura do documento HTML. 

Images: Agrupa subpastas categorizando e separando imagens pelo seu propósito dentro do documento.

javascript: Contém o arquivo script.js que centraliza toda a lógica do sistema.

Index.html: Documento HTML principal.

## Sobre o mini-game

Aqui vemos uma versão visual do clássico desafio de lógica "Canibais e missionários" onde seu principal objetivo é fazer com que todos os canibais e missionários alcancem à margem oposta com um barco, mas sem nunca permitir que os canibais estejam em vantagem numérica.

### Regras:

1. A seguinte quantidade de indivíduos deverão ser conduzidos à margem oposta:
    - 3 Missionários
    - 3 Canibais

2. Para fazer a travessia, você deverá contar com um barco com espaço para no máximo 2 indivíduos por vez.

3. Para o barco se mover entre as margens, é obrigatório que dentro dele tenha pelo menos 1 indivíduo.

4. Em nenhum momento, o número de canibais deverá ser maior do que o número de missionários em nenhuma das margens.

5. Você vence quando todos os 6 indivíduos estiverem na margem oposta.
---

### Lógica a nível de código:

O monitoramento de regras é feito a partir de interações e análises diretas com o dom da página. Através de classes e ids determinados no documento, são feitas inúmeras análises em sua estrutura. 

#### Métodos centralizados:

O core da lógica do sistema é baseado em event listeners, responsáveis por capturar interações do usuário via mouse ou teclado.

O estado do jogo é determinado dinamicamente a partir da estrutura atual do DOM, que atua como fonte de verdade para as validações realizadas.

A cada ação relevante (como interações diretas com o barco) é disparada uma função central responsável por validar o estado do jogo e refletir mudanças diretas no dom de acordo com o estado atual.

Essas verificações de estado são intrinsecamente ligadas ao DOM dos elementos da página e suas classes, onde, a partir delas são feitas verificações como contagem de um tipo específico de personagem em cada uma das margens, ou se há espaços livres para realização de certa interação.

### Funcionalidades da página:

#### Interação com personagens e elementos:
Durante sua gameplay, seu grau de interação com os personagens será basicamente voltado a cliques ou interações diretas com o teclado (Em caso de dispositivos desktop). A página conta com um estilo de interação adaptado a depender do dispositivo que está sendo usado (essa análise é feita com base nas dimensões da tela do usuário)
<br>

Desktop: <br>
Em dispositivos com telas maiores, o game entrará em exibição adaptada para dispositivos desktop, mostrando informações visuais que guiam o usuário a atalhos que poderá utilizar para interação com os personagens.

Interação com personagens: <br>
Os personagens poderão ter as seguintes ações:
- Alocados no barco (Se espaço disponível)
- Alocados na margem atual do barco

Para ser capaz de fazer isso, o usuário pode optar por <strong> clicar diretamente </strong> com seu mouse no personagem desejado ou clicar diretamente em um dos atalhos de teclado exibidos sobre a posição atual do personagem desejado.

Interação com o barco:

Em modo desktop, a única maneira de interagir com o barco é através das teclas direcionais do teclado. 

Atalhos de teclado:


- Teclado numérico (1 a 6): Em cada uma das margens, as posições dos personagens são indicadas por um número de 1 a 6, o usuário poderá clicar em seu teclado a numeração correspondente da posição do personagem que deseja alocar no barco.

<div align="center">
  <img height="50px" alt="Captura_de_tela_2026-03-03_011449-removebg-preview" src="https://github.com/user-attachments/assets/a9e73d17-c8fa-438d-86b0-d73dababe46b" />
</div>

- Tecla "espaço": Utilize da tecla de espaço como um atalho para remover todos os personagens presentes no barco para a margem atual em que o barco se encontra.
<div align="center">
  <img width="50" alt="space-key" src="https://github.com/user-attachments/assets/c5caa005-95a1-481b-9052-f826765650d7" />
</div>

- Teclas direcionais: Utilize das teclas direcionais no seu teclado (esquerda e direita) para mover o barco entre as margens.
<div align="center">
  <img height=50px alt="Captura_de_tela_2026-03-03_010843-removebg-preview" src="https://github.com/user-attachments/assets/aa2a641b-0f77-4e22-9ec4-17b9fbafabca"/>
</div>

Mobile:

Em telas menores, a página se adapta para um estilo apropriado para dispositivos móveis. 

A principal maneira do usuário interagir com os personagens será através de toques diretos no personagem desejado. Além disso, será exibido na base central da página controles que ajudarão o usuário de dispostivos móveis a realizar interações que antes dependeriam exclusivamente de um teclado, como mover o barco entre as margens e remover todos os personagens dele.

<div align="center">
  <img height="50" alt="Captura_de_tela_2026-03-03_011925-removebg-preview" src="https://github.com/user-attachments/assets/5d9073b7-9d13-47f2-a013-67932b832754" />
</div>

#### Elementos auxiliares:


Menu: Icone de menu no header da página, ao ser clicado abrirá um menu que permitirá o usuário obter mais informações sobre os personagens e link para redes sociais.

Botão de restart e logo: Ao serem clicados recarregam o game para seu estado inicial.

<img width="1897" height="97" alt="image" src="https://github.com/user-attachments/assets/026d9678-ae96-4d5c-8686-6754d6eab29a" />
<br>

Icone de ajuda: Localizado no canto inferior direito da página, ao ser clicado exibirá uma tela que conterá todas as regras e atalhos que podem ser utilizados pelo jogador.

<div align="center">
  <img height="106" alt="image" src="https://github.com/user-attachments/assets/02f15718-792e-4050-be80-349f9669b443" />
</div>


#### Tecnologias utilizadas:

<div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="JavaScript" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="HTML5" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="CSS3" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height="40" alt="VS Code" />
</div>

#### Teste o jogo:
Visite pela hospedagem em nuvem feita através da plataforma Netlify:

<a href="https://bishopandcannibals.netlify.app/#">Clique aqui para acessar</a>

#### Novos conceitos aprendidos:
- Implementação de event listeners com JS para interação básica com teclado.
- Utilização de propriedade transition no CSS para efeitos de transições básicos.
- Utilização da at-rule @keyFrames em css para animações complexas.
