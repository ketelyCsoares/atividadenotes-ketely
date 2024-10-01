const prompt = require('prompt-sync');
const entrada = prompt();

const nomeCompleto ="ketely Cristina Soares";
const anoNascimento = 2006;
let anoAtual = 2024;
let idade = 17;

console.log("Olá eu sou " + nomeCompleto + " estamos no ano " + anoAtual + " minha idade é " + idade + " e sou nascido no ano " + anoNascimento);

anoQueVem = anoAtual + 1;
idadeAnoQueVem= idade + 1;

console.log("Olá eu sou " + nomeCompleto + " estamos no ano " + anoQueVem + " minha idade é " + idadeAnoQueVem + " estou cursando psicologia");

console.log(`oi eu sou ${nomeCompleto} meu ano de nascimento é ${anoNascimento} minha idade é ${idade}`);

const loginCerto = "ketely";
const senhaCerta = 123;
console.log(" ");
console.log("AGÊNCIAS DE VIAGENS");
console.log(" ");

console.log("Faça seu login para continuar");

var login = entrada("Digite seu login:");
var senha = entrada("Digite sua senha:");

while(login != loginCerto){
  console.log("login Incorreto");
  login = entrada("Digite seu login novamente:");
}
  while(senha != senhaCerta){
    console.log("senha Incorreta");
    senha = entrada("Digite sua senha novamente:");
  }

const listaDeViagens = new Array(
  `Tokyo`,
  `Egito`,
  `Paris`,
  `Nova York`,
  `Roma`
);

console.log(listaDeViagens);

console.log(listaDeViagens[4]);
listaDeViagens.push("Coronel Vivida");
console.log(listaDeViagens);

listaDeViagens.splice(4,2);
console.log(listaDeViagens);

var nomeComprador = entrada ("qual é seu nome? ");
var idadeComprador = entrada("qual é a sua idade? ");

if(idadeComprador < 18){
  console.log(`olá ${nomeComprador}, já que a sua idade é ${idadeComprador} anos, não podemos vender nossas passagens.`);
}

if(idadeComprador >= 18){
  console.log(`olá ${nomeComprador} qual é o seu destino? Aqui estão as nossas opções:`)
  console.log(listaDeViagens)
}
