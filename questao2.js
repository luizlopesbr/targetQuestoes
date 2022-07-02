let num = 8;//número de vezes que a sequencia será executada.
let pri = 0, seg = 1;
let aux,prox;
prox = pri + seg;
let fibo = [];
fibo.push(pri);
fibo.push(seg);
fibo.push(prox);
//gera a sequência
for(let i = 0; i < num - 3;i++){
    pri = seg;
    seg = prox;
    prox = pri + seg;
    fibo.push(prox);
}
//imprime o conteúdo do vetor fibo
for(i = 0; i < fibo.length; i++){
    console.log(`${fibo[i]}`);
}
let resultado = 0;
//verifica se o número pertence ou não
for(i = 0; i < fibo.length; i++){
    if(fibo[i] == num){
        resultado = 1;
        break;
    }
}
//exibe o resultado de pertencer ou não
if(resultado == 1){
    console.log(`O número: ${num} pertence à sequência`);
}else{
    console.log(`O número: ${num} não pertence à sequência`);
}