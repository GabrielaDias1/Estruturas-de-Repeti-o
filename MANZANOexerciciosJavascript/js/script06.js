/*Exercicio 6 MANZANO
Elaborar um programa que apresente como resultado o valor de uma potência de uma base
qualquer elevada a um expoente qualquer, ou seja, de BE
, em que B é o valor da base e E o valor
do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do
portuguol (^). */
function exercicio06(){
    let base;
    let expoente;
    let resultado;

    base = parseInt(prompt("Digite o valor da base:"));

    expoente = parseInt(prompt("Digite o valor do expoente:"));

    resultado = 1;

    for (let contador = 1; contador <= expoente; contador++) {
        resultado *= base;
    }

    alert("O resultado de " + base + " elevado a " + expoente + " é: " + resultado);
}