let nomes = [];

nomes.push(prompt('Insira o primeiro nome: '));
nomes.push(prompt('Insira o segundo nome: '));
nomes.push(prompt('Insira o terceiro nome: '));
nomes.push(prompt('Insira o quarto nome: '));

nomes.sort();

console.log('Lista ordenada: ');

for(let i = 0; i< nomes.length; i++){
    console.log(nomes[i].toUpperCase());
}