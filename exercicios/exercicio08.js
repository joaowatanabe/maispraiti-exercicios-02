// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

const vendas = [
  { cliente: "Ana", total: 100 },
  { cliente: "Joao", total: 200 },
  { cliente: "Joao", total: 550 },
  { cliente: "Ana", total: 300 },
];

// usar o reduce para gerar um obj onde cada chave é o nome do cliente e o valor é a soma dos totais;
// { Ana: 400, Joao: 750 }

const agruparVendas = (vendas) => {
  return vendas.reduce((acc, venda) => {
    if (acc[venda.cliente]) { //acc vai guardar os totais , venda é cada item do array vendas
      acc[venda.cliente] += venda.total;
    } else {
      acc[venda.cliente] = venda.total;
    }

    return acc;
  }, {}); // começa com obj vazio
};

const resultado = agruparVendas(vendas);
console.table(resultado);
