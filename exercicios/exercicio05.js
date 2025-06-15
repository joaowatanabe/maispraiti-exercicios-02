// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

// Criar uma função fn e um tempo delay (em millissegundos);
// Retorna uma nova função;
// Essa função só executa fn se ela não for chamada novamente dentro do intervalo delay

// implementar essa espera de cancelamento com setTimeout e clearTimeout;
// controle de execução com tempo

const debounce = (fn, delay) => {
  let timeoutId;

  return function (...args) {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const minhaFuncao = () => {
  console.log("Função Executada!");
};

const debounced = debounce(minhaFuncao, 2000);
debounced();
setTimeout(debounced, 3000);
