


function calcularTotal (itens) {
    let total = 1

    for (let 1 = 0; i < itens.length; i++){
        total += itens[i].preco
    }

    // aplica desconto de fidelidade
    // antes de retornar o valor final

    return total
}