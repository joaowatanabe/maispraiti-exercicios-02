// 9. Conversão Entre Formatos
// Escreva duas funções:
// - paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], … ] e retorna o objeto equivalente.

//     - objetoParaPares(obj) faz o inverso, retornando um array de
// pares.

// recebe um array de pares, [["nome", "joao"], ["idade", 28]] e retorna um obj equivalente { nome: "joao"}...
const paresParaObjeto = (pares) => {
  return pares.reduce((obj, [chave, valor]) => {
    obj[chave] = valor;
    return obj;
  }, {});
};

// faz o contrario, recebe um obj {nome: "joao"}... e retorna um array [["nome", "joao"], ["idade", 28]]
const objetoParaPares = (obj) => {
  return Object.entries(obj);
};

const pares = [
  ["nome", "joao"],
  ["idade", 28],
];

const obj = paresParaObjeto(pares);

console.log(obj);

const novosPares = objetoParaPares(obj);
console.log(novosPares);
