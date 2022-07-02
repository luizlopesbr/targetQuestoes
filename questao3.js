const jsonData = require('./dados.json'); 

let tam = jsonData.length;
let faturamento = [];
for(let i = 0; i < tam; i++){
    faturamento[i] = jsonData[i].valor;
}

// menor valor de um array
Array.min = function(array) {
    return Math.min.apply(Math, array);
};

// maior valor de um array
Array.max = function(array) {
    return Math.max.apply(Math, array);
};

let min = Array.min(faturamento);
let max = Array.max(faturamento);

//converter para o formato de moeda Brasileiro
let menor = min.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
let maior = max.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})

//Exibição do menor e maior valor
console.log( `O menor valor de faturamento foi: ${menor}` );
console.log( `O maior valor de faturamento foi: ${maior}` ); 

//cálculo do faturamento total do mês
let total=0;
for(i = 0; i < faturamento.length; i++){
    total = total + faturamento[i];
}

//valor de faturamento médio
let media = total / faturamento.length;

let cont = 0;
for(i = 0; i < faturamento.length; i++){
    if(faturamento[i] > media){
        cont = cont + 1;
    }
}
console.log(`Nº de dias em que o faturamento diário foi superior à média mensal: ${cont} dias`);


