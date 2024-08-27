const nomeCompleto ="ketely Cristina Soares";
const anoNascimento = 2006;
let anoAtual = 2024;
let idade = 17;

console.log("Olá eu sou " + nomeCompleto + " estamos no ano " + anoAtual + " minha idade é " + idade + " e sou nascido no ano " + anoNascimento);

anoQueVem = anoAtual + 1;
idadeAnoQueVem= idade + 1;

console.log("Olá eu sou " + nomeCompleto + " estamos no ano " + anoQueVem + " minha idade é " + idadeAnoQueVem + " estou cursando psicologia");

console.log(`oi eu sou ${nomeCompleto} meu ano de nascimento é ${anoNascimento} minha idade é ${idade}`);

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

const idadeComprador = 24;

if(idadeComprador < 18){
  console.log("infelizmente você é menor de idade, não podemos vender nossas passagens")
}

if(idadeComprador >= 18){
  console.log("parabens você adiquiriu sua passagem com sucesso")
}
