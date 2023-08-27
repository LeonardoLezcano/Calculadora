const displayValorAnterior = document.getElementsByClassName("valor_anterior");
const displayValorActual = document.getElementsByClassName("valor_actual");
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");

const calculadora = new Calculadora();
console.log(calculadora.sumar(2, 2));
