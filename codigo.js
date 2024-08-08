//declaração de variáveis 

let quantidade = 0;
let total = 0;

//função  
function calculaAna(){
//promp para entrada de dados

quantidade = parseInt(prompt("digite a quantidade de vezes que a ana quase desistiu:"));

total = total + quantidade;
//mostra o resultado mostrando alert
//alert(total);

 
//mostra o resultado usando innerHTML
let dados = window.document.getElementById('contador');

dados.innerHTML = "Quantidade: "  + total + ".";

if(total == 10){
    dados.innerHTML = "Quantidade: " + total + " podi.";
}
}