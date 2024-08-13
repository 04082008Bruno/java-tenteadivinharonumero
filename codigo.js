let resposta = document.getElementById('resposta');

let computador = 0;
let jogador = 0;

let numminimo = 1;
let nummaximo = 100;
let dif = nummaximo - numminimo;
let aleatorio =  Math.random();
computador = numminimo + Math.trunc(dif * aleatorio);

func Adivinha(){
    jogador = prompt("Qual é o seu palpite?")
}