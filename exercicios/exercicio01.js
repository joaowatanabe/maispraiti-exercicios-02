// //1. Validação de Datas:
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário.

// 1. Verificar o mes se esta entre 1 e 12;
// 2. Verificar se o dia esta dentro do limite do mes;
// 3. Fevereiro pode ter 28 ou 29 dias a depender do ano bissexto;
// 4. Ano bissexto quando eh divisivel por 4 e nao por 100;

const prompt = require("prompt-sync")();

const ehDataValida = (dia, mes, ano) => {
  if (mes < 1 || mes > 12) return false;
  if (dia < 1 || dia > 31) return false;

  const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
  const diasPorMes = [
    31,
    bissexto ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  return dia <= diasPorMes[mes - 1];
};

const dia = parseInt(prompt("Digite o dia: "));
const mes = parseInt(prompt("Digite o mes: "));
const ano = parseInt(prompt("Digite o ano: "));

if (ehDataValida(dia, mes, ano)) {
  console.log("Data válida!");
} else {
  console.log("Data inválida");
}
