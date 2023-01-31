/*Crie uma calculadora com as quatro operações
básicas utilizando JavaScript
Utilize dois campos input para o preenchimento
dos valores, um campo select para a seleção da
operação desejada, um campo div para resposta
e um button para solicitar o cálculo*/

const valor1 = document.querySelector("#valor1");
const valor2 = document.querySelector("#valor2");
const seletor = document.querySelector("#operacao");
const botao = document.querySelector("#calcular");
let resposta = document.querySelector("#resposta");

botao.addEventListener("click",fazerCalculo);

function fazerCalculo(){
    const campo1 = parseInt(valor1.value);
    const campo2 = parseInt(valor2.value);
    const operacao = seletor.value;
    if(operacao==="somar")
      resposta.innerHTML = campo1 + campo2;
    if(operacao==="subtrair")
      resposta.innerHTML = campo1 - campo2;
    if(operacao==="multiplicar")
      resposta.innerHTML = campo1 * campo2;
    if(operacao==="dividir")
      resposta.innerHTML = campo1 / campo2;
}