/*Exercicio 4 MANZANO
Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar
se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução
se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo. */
function exercicio04(){
    let contadora;
    for (contadora = 1; contadora <= 20; contadora++) {
        if (contadora % 2 !== 0) {
            console.log(contadora + " Numero impar ");
        } else {
            console.log(contadora + " Numero não é impar ");
        }
    }
}