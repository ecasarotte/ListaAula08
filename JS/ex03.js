let numeros = [];
let soma = 0;

for(let i = 0; i< 10; i++){
    numeros.push(prompt(`Informe o ${i+1}° número: `));
}

window.alert('Números informados: ' + numeros);

numeros.sort((a, b)=> b - a);

window.alert('Números em órdem decrescente: ' + numeros);

for(let i = 0; i< numeros.length; i++){
    soma += parseInt(numeros[i]);
}

console.log('Maior número: ' + numeros[0]);
console.log('Menor número: ' + numeros[(numeros.length - 1)]);
console.log('Média dos números: ' + (soma / numeros.length));

