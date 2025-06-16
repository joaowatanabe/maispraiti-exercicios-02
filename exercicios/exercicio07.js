// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, …], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

// a funcao deve: 
// 1. ordenar os produtos com preco crescente (menor > maior) .sort
// 2. retornar um novo array so com os nomes .map


const produtos = [
  { nome: "teclado", preco: 100 },
  { nome: "mouse", preco: 50 },
  { nome: "monitor", preco: 800 },
  { nome: "macbook", preco: 10000 },

];

const produtosOrdenados = (produtos) => {
  const ordenado = [...produtos].sort((a, b) => a.preco - b.preco) // ordena o preco

  return ordenado.map(produto => produto.nome) // retorna os nomes
};

console.log(produtosOrdenados(produtos));
