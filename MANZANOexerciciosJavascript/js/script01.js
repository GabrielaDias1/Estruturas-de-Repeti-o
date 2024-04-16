/*Exercicio 1 MANZANO
Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer. */
function exercicio01(){
    let numero = parseInt(prompt("Digite um número para ver a tabuada de multiplicação: "));
    console.log("Tabuada de multiplicação do " + numero + ":");
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(numero + " x " + i + " = " + resultado);
    }
}
