let valorCompra = parseInt(prompt('Informe o valor da compra: '));
let atraso = parseInt(prompt('Informe o atraso: '));

let result = calculoPagamento(valorCompra, atraso);

if(!result){alert('Erro ao calcular pagamento');}

else{
    alert('Taxa de juros: ' + result.taxaJuros);
    alert('Valor total do pagamento: ' + result.valorPagamento);    
}