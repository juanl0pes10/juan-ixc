/*alert ("Boas vindas ao Jogo do Número Secreto");
let numeroSecreto = parseInt(Math.random ()*100+1)
console.log(numeroSecreto)
let chute 
let tentativas =1;


while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 100');

if(numeroSecreto == chute ){
    break
}
else {
   if(numeroSecreto >chute){
    alert("O número secreto é maior que"+chute)
   }
   else {
    alert("O número secreto é menor que"+chute)
   }
     
}
tentativas++
}
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
alert(`Boa! Você acertou! ${numeroSecreto} com ${tentativas} ${palavraTentativa}` );

/*if(tentativas>1){    
alert(`Boa! Você acertou! ${numeroSecreto} com ${tentativas} tentativas` );
}
else {
alert(`Boa! Você acertou! ${numeroSecreto} com ${tentativas} tentativa` );
}*/



//ATIVIDADE 3
//let cont=0


//while (cont<=10){
//cont++
//console.log(cont)
//}



/* ATIVIDADE 1
alert("Boas vindas ao nosso site")
let nome = "Lua"
let idade =25
let numeroVendas = 50
let saldoDisponivel = 1000
alert("Preencha todos os campos")
let mensagemDeErro="Erro! Preencha todos os campos"
alert (mensagemDeErro)

let nomeUsuario = prompt ("Digite seu nome")
let idade2=prompt ("Digite sua idade")
if (idade2 >=18){
   alert("Você pode tirar a habilitação!")
}
*/

/*ATIVIDADE 2

let diaDaSemana = prompt("Digite o dia da semana")
if (diaDaSemana == "sabado" || diaDaSemana== "domingo"){
    alert("Bom fim de semana")
}
else{
    alert("Boa semana")
}

let numeroDigitado = prompt("Digite um número")
if (numeroDigitado>=1){
    alert("Positivo")
}
else{
    alert("Negativo")
}

*/

//DESAFIO: TROCAR O NÚMERO DE POSSIBILIDADES E TROCAR AUTOMATICAMENTE NO AVISO AO USUARIO
alert ("Boas vindas ao Jogo do Número Secreto");
let numeroMaximo =5000
let numeroSecreto = parseInt(Math.random ()*numeroMaximo+1)
console.log(numeroSecreto)
let chute 
let tentativas =1;


while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

if(numeroSecreto == chute ){
    break
}
else {
   if(numeroSecreto >chute){
    alert("O número secreto é maior que"+chute)
   }
   else {
    alert("O número secreto é menor que"+chute)
   }
     
}
tentativas++
}
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
alert(`Boa! Você acertou! ${numeroSecreto} com ${tentativas} ${palavraTentativa}` );
