/*Exercicio 3 MANZANO
Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de
1 até 500*/
function exercicio03(){
    let soma = 0;
    let contadora;

    // Seção de Comandos, procedimento, funções, operadores, etc...
    for (contadora = 2; contadora <= 500; contadora += 2) {
        soma += contadora;
        console.log(contadora + "+");
    }

    console.log(" = " + soma);
    console.log("Resultado da soma: " + soma);
}