console.log("-----------------------------------------------------------------------------");
console.log("                    Trabalhando com condicionais                    ");

//Declarando Variáveis
const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "São Paulo";


//Declarando Array ou vetor.
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);
console.log("===========================================================================");

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador<3){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        console.log("===========================================================================");
       break;
             
    }
    contador +=1;
}

if(destinoExiste == true){
    console.log(listaDeDestinos[contador]);
    console.log("Destino existe: ",destinoExiste);
}else{
    
    console.log(destino);
    console.log("Destino existe: ",destinoExiste);
}

if(destinoExiste && podeComprar){
    console.log("Boa viagem");
}else{
    console.log("Desculpe, tivemos um erro!!");
}
