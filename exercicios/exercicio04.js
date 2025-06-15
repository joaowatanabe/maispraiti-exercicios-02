// 4. Fatorial Recursivo
// 1. Implemente function fatorial(n) de forma recursiva; (n * fatorial (n - 1))
// 2. trate n < 0 lançando um Error; (Se n < 0 deve lançar um erro)
// 3. e n === 0 retornando.

// Uma função recursiva é uma função que chama a si mesma; e precisa de um caso base (1)  para não rodar infinitamente

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
