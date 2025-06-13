// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array.

const prompt = require("prompt-sync")();

const frase = prompt("Digite uma palavra: ");
const palavras = frase.split(" ");

const contagem = {};

for (i = 0; i < palavras.length; i++) {
  const palavra = palavras[i];

  if (contagem[palavra]) {
    contagem[palavra]++;
  } else {
    contagem[palavra] = 1;
  }
}

const unicas = [];

for (let i = 0; i < palavras.length; i++) {
  const palavra = palavras[i];
  if (contagem[palavra] === 1) {
    if (!unicas.includes(palavra)) {
      unicas.push(palavra);
    }
  }
}

console.log("Palavras Unicas: ", unicas);
