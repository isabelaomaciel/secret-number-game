
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1;
/* let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10'; */


function exibirTexto(tag, texto) {
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
   responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagensIniciais() {
  exibirTexto("h1", "Jogo do número secreto");
  exibirTexto("p", "Escolha um número entre 1 e 10");
}

exibirMensagensIniciais();

function verificarChute() {
   let chute = document.querySelector('input').value;
   if (chute == numeroSecreto) {
      exibirTexto('h1', 'Acertou!');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
      exibirTexto('p', mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
      if (chute > numeroSecreto) {
         exibirTexto('p', 'O numero secreto é menor que seu chute')
      } else {
         exibirTexto('p', 'O numero secreto é maior que seu chute')
      }

   }
   tentativas++;
   limparCampo();

}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadesDeElementosNaLista = listaDeNumerosSorteados.length;

   if (quantidadesDeElementosNaLista == numeroLimite) {
      listaDeNumerosSorteados = [];
   }

   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio();
   } else {
      listaDeNumerosSorteados.push(numeroEscolhido);
      return numeroEscolhido;
   }
}

function limparCampo() {
   chute = document.querySelector('input')
   chute.value = "";
}



function reiniciarJogo() {
   numeroSecreto = gerarNumeroAleatorio();
   limparCampo();
   tentativas = 1;
   exibirMensagensIniciais();
   document.getElementById('reiniciar').setAttribute('disabled', true);
}

