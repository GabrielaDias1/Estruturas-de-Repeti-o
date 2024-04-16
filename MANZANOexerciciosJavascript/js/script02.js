/*Exercicio 2
Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).*/
let soma = 0;
function exercicio02(){
    for (let contadora = 1; contadora <= 100; contadora++) {
         soma = soma + contadora
}
    alert("Total da soma: " + soma)
    alert("Resultado da soma:" + soma)
}
