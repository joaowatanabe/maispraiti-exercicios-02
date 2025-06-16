// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

// Recebe um função (fn) como argumento;
// Retorna uma função q executa fn, porem se os mesmos argumentos forem passados, retorna o resultado armazenado
// sem executar fn novamente.

const memoize = (fn) => {
  const cache = {}; // obj vazio pra armazenar

  return function (...args) {
    // retorna a função que independe o n de argumentos
    const chave = JSON.stringify(args); // transforma em uma string unica para ser usada como chave

    if (cache[chave]) {
      // se já tiver os resultado salvo
      console.log("Usando cache...:", chave);
      return cache[chave]; // retorna o valor salvo
    }

    const resultado = fn(...args); // executa a funcao original com os argumentos
    cache[chave] = resultado; // salva
    return resultado;
  };
};

// mesma funcao de fatorial para testes do exercicio 4 

const prompt = require("prompt-sync")();

const numero = parseInt(prompt("Digite um número para calcular a fatorial: "));

const fatorial = (n) => {
  if (n < 0) {
    throw new Error("Não existe fatorial de número negativo.");
  }

  if (n === 0) {
    return 1;
  }

  return n * fatorial(n - 1);
};

try {
  const resultado = fatorial(numero);
  console.log(`A Fatorial de ${numero} é: ${resultado}`);
} catch (erro) {
  console.log(erro.message);
}

const fatorialMemo = memoize(fatorial);
