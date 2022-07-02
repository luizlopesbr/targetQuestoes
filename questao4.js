let faturamento = [
    {uf:'SP',valor: 67836.43},
    {uf:'RJ',valor: 36678.66},
    {uf:'MG',valor: 29229.88},
    {uf:'ES',valor: 27165.48},
    {uf:'Outros',valor: 19849.53}
]

let total = 0;

for(let i = 0; i < faturamento.length; i++){
    total = total + faturamento[i].valor;
}

for(i = 0; i < faturamento.length;i++){
    console.log(`Percentural do estado: ${faturamento[i].uf} foi de: ${(faturamento[i].valor / total * 100).toFixed(2)} % \n`);
}