let placar1 = '';
let placar2 = '';
let placarGeral1 = 0;
let placarGeral2 = 0;
let contagem = 0;

//mostra placar no final do jogo
function placarFinal() {
  let textoPlacar = document.getElementById("placar");

  if (placarGeral1 > placarGeral2) {
    textoPlacar.innerHTML = 'FIM DE JOGO: Jogador 1 venceu o jogo!';
  } else if (placarGeral1 == placarGeral2) {
    textoPlacar.innerHTML = 'FIM DE JOGO:Os jogadores empataram!';
  } else {
    textoPlacar.innerHTML = 'FIM DE JOGO:Jogador 2 venceu a rodada!';
  }
}

//mostra placar no fim de cada rodada
function placarRodada() {
  let textoPlacar = document.getElementById("placar");

  if (placar1 > placar2) {
    contagem++ //add 1 na contagem de rodadas
    placarGeral1++ //add 1 nos pontos do 1 jogador
    textoPlacar.innerHTML = 'Jogador 1 venceu a rodada!';

    //checa se já chegou na 10 rodada
    if (contagem == 10) {
      document.getElementById("botao2").disabled = true;
      document.getElementById("botao1").disabled = true;
      placarFinal(); //chama função do placar final se já for a 10 rodada
    }
  } else if (placar1 == placar2) {
    //ninguem pontua pq foi empate
    contagem++ //add 1 na contagem de rodadas
    textoPlacar.innerHTML = 'Os jogadores empataram nessa rodada!';

    //checa se já chegou na 10 rodada
    if (contagem == 10) {
      document.getElementById("botao2").disabled = true;
      document.getElementById("botao1").disabled = true;
      placarFinal(); //chama função do placar final se já for a 10 rodada
    }
  } else {
    contagem++ //add 1 na contagem de rodadas
    placarGeral2++ //add 1 nos pontos do 2 jogador
    textoPlacar.innerHTML = 'Jogador 2 venceu a rodada!';

    //checa se já chegou na 10 rodada
    if (contagem == 10) {
      document.getElementById("botao2").disabled = true;
      document.getElementById("botao1").disabled = true;
      document.getElementById("botao2").style.backgroundColor = 'grey';
      document.getElementById("botao1").style.backgroundColor = 'grey';
      placarFinal(); //chama função do placar final se já for a 10 rodada
    }
  }
}

function rodarDado() {
  let textoPlacar = document.getElementById("placar");
  let texto = document.getElementById("texto");

  //gera numeros aleatoriamente de 1 a 6
  let dado = (Math.floor(Math.random() * 6)) + 1;

  //tira a info de quem ganhou a ultima rodada pq uma nova começou
  textoPlacar.innerHTML = '';

  //ativa o botão de reiniciar q estava desativado enquanto nenhum jogo começava 
  document.getElementById("botaoReiniciar").disabled = false;
  //coloca a cor do botao ativo
  document.getElementById("botaoReiniciar").style.backgroundColor = '#3b3b3b';
  //muda a cor quando o mouse passa por cima pra dar a ideia de botão clicavel
  document.getElementById("botaoReiniciar").addEventListener("mouseover", function () {
    document.getElementById("botaoReiniciar").style.backgroundColor = '#000000';
  });
  //volta a cor inicial quando o mouse sai de cima do botão
  document.getElementById("botaoReiniciar").addEventListener("mouseout", function () {
    document.getElementById("botaoReiniciar").style.backgroundColor = '#3b3b3b';
  });

  //ativa o botão2 que estava desativado enquanto era a vez o jogador1
  document.getElementById("botao2").disabled = false;
  //coloca a cor do botao ativo
  document.getElementById("botao2").style.backgroundColor = '#3b3b3b';
  //muda a cor quando o mouse passa por cima pra dar a ideia de botão clicavel
  document.getElementById("botao2").addEventListener("mouseover", function () {
    document.getElementById("botao2").style.backgroundColor = '#000000';
  });
  //volta a cor inicial quando o mouse sai de cima do botão
  document.getElementById("botao2").addEventListener("mouseout", function () {
    document.getElementById("botao2").style.backgroundColor = '#3b3b3b';
  });

  //desativa o botao1 pq não é mais a vez desse jogador
  document.getElementById("botao1").disabled = true;
  //coloca a cor do botao inativo
  document.getElementById("botao1").style.backgroundColor = 'grey';

  //mostra a imagem de do dado acordo com o número da variavel dado
  if (dado == 1) {
    placar1 = dado;
    texto.innerHTML = ` <img src="img/dado-01.png" class="chacolha-dado"> `;

  } else if (dado == 2) {
    placar1 = dado;
    texto.innerHTML = ` <img src="img/dado-02.png" class="chacolha-dado"> `;

  } else if (dado == 3) {
    placar1 = dado;
    texto.innerHTML = ` <img src="img/dado-03.png" class="chacolha-dado"> `;

  } else if (dado == 4) {
    placar1 = dado;
    texto.innerHTML = ` <img src="img/dado-04.png" class="chacolha-dado"> `;

  } else if (dado == 5) {
    placar1 = dado;
    texto.innerHTML = ` <img src="img/dado-05.png" class="chacolha-dado"> `;

  } else if (dado == 6) {
    placar1 = dado;
    texto.innerHTML = ` <img src="img/dado-06.png" class="chacolha-dado"> `;

  }
}

function rodarDado2() {
  let texto1 = document.getElementById("texto1");

  //gera numeros aleatoriamente de 1 a 6
  let dado = (Math.floor(Math.random() * 6)) + 1;

  //desativa o botão2 pq não é mais a vez desse jogador
  document.getElementById("botao2").disabled = true;
  //coloca a cor do botao inativo
  document.getElementById("botao2").style.backgroundColor = 'grey';

  //ativa o botão1 que estava desativado enquanto era a vez o jogador2
  document.getElementById("botao1").disabled = false;
  //coloca a cor do botao ativo
  document.getElementById("botao1").style.backgroundColor = '#3b3b3b';
  //muda a cor quando o mouse passa por cima pra dar a ideia de botão clicavel 
  document.getElementById("botao1").addEventListener("mouseover", function () {
    document.getElementById("botao1").style.backgroundColor = '#000000';
  });
  //volta a cor inicial quando o mouse sai de cima do botão
  document.getElementById("botao1").addEventListener("mouseout", function () {
    document.getElementById("botao1").style.backgroundColor = '#3b3b3b';
  });

  //mostra a imagem de do dado acordo com o número da variavel dado
  if (dado == 1) {
    placar2 = dado;
    texto1.innerHTML = ` <img src="img/dado-01.png" class="chacolha-dado"> `;

  } else if (dado == 2) {
    placar2 = dado;
    texto1.innerHTML = ` <img src="img/dado-02.png" class="chacolha-dado"> `;

  } else if (dado == 3) {
    placar2 = dado;
    texto1.innerHTML = ` <img src="img/dado-03.png" class="chacolha-dado"> `;

  } else if (dado == 4) {
    placar2 = dado;
    texto1.innerHTML = ` <img src="img/dado-04.png" class="chacolha-dado"> `;

  } else if (dado == 5) {
    placar2 = dado;
    texto1.innerHTML = ` <img src="img/dado-05.png" class="chacolha-dado"> `;

  } else if (dado == 6) {
    placar2 = dado;
    texto1.innerHTML = ` <img src="img/dado-06.png" class="chacolha-dado"> `;
  }

  placarRodada(); //chama função que mostra quem venceu aquela rodada
}

function reiniciarJogo() {
  let texto = document.getElementById("texto");
  let texto1 = document.getElementById("texto1");
  let textoPlacar = document.getElementById("placar");

  //desativa o botao2 pq é necessário que o jogador1 jogue primeiro para começar o jogo
  document.getElementById("botao2").disabled = true;
  //coloca a cor do botao inativo
  document.getElementById("botao2").style.backgroundColor = 'grey';

  //ativa o botão1
  document.getElementById("botao1").disabled = false;
  //coloca a cor do botao ativo
  document.getElementById("botao1").style.backgroundColor = '#3b3b3b';
  //muda a cor quando o mouse passa por cima pra dar a ideia de botão clicavel 
  document.getElementById("botao1").addEventListener("mouseover", function () {
    document.getElementById("botao1").style.backgroundColor = '#000000';
  });
  //volta a cor inicial quando o mouse sai de cima do botão
  document.getElementById("botao1").addEventListener("mouseout", function () {
    document.getElementById("botao1").style.backgroundColor = '#3b3b3b';
  });

  //desativa o de reiniciar pq nenhum jogo foi começado
  document.getElementById("botaoReiniciar").disabled = true;
  //coloca a cor do botao inativo
  document.getElementById("botaoReiniciar").style.backgroundColor = 'grey';

  //tira a imagem dos dados e do resultado da rodada ou da partida
  textoPlacar.innerHTML = '';
  texto1.innerHTML = '';
  texto.innerHTML = '';


}


