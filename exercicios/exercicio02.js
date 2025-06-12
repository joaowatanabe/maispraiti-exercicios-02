// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require("prompt-sync")();

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;
let acertou = false;
console.log("Adivinhe um numero entre 1 e 100!");

while (!acertou) {
  const chute = parseInt(prompt("Seu palpite: "));
  tentativas++;

  if (chute === numeroSecreto) {
    console.log(`Parabens! voce acertou em ${tentativas} tentativas`);
    acertou = true;
  } else if (chute < numeroSecreto) {
    console.log("Mais alto!");
  } else if (chute > numeroSecreto) {
    console.log("Mais baixo!");
  } else {
    console.log("Entrada invalida");
  }
}
