function calculoPagamento(valorTitulo, diasAtraso){
    let juros = 0;

    let response = {
        taxaJuros: 0,
        valorPagamento: 0
    };

    if(diasAtraso < 3){
        juros = 0;
        response.taxaJuros = 0;
        response.valorPagamento = valorTitulo - (valorTitulo * juros);
    }
    else if(diasAtraso >= 3 && diasAtraso < 15){
        juros = 0.1;
        response.taxaJuros = 10;
        response.valorPagamento = valorTitulo - (valorTitulo * juros);
    }
    else if(diasAtraso >= 15){
        juros = 0.15;
        response.taxaJuros = 15;
        response.valorPagamento = valorTitulo - (valorTitulo * juros);
    }
    else
        alert('Pagamento inválido');

    return response;
}