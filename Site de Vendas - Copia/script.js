var valorTotal = 0; 

function adicionarItem(itemId) {
    var estoqueElement = document.getElementById(`estoqueItem${itemId}`);
    var quantidadeElement = document.getElementById(`quantidadeItem${itemId}`);
    var valorElement = document.getElementById(`valorItem${itemId}`);

    var estoqueAtual = parseInt(estoqueElement.textContent);
    var quantidadeAtual = parseInt(quantidadeElement.textContent);
    var valorItem = parseFloat(valorElement.textContent);

    var quantidadeDesejada = prompt(`Quantos itens do Item ${itemId} você deseja adicionar?`, "1");
    var quantidadeNova = parseInt(quantidadeDesejada);

    if (!isNaN(quantidadeNova) && quantidadeNova >= 0) {
        if (quantidadeNova <= estoqueAtual) {
            quantidadeElement.textContent = quantidadeAtual + quantidadeNova;
            estoqueElement.textContent = estoqueAtual - quantidadeNova;

            valorTotal += quantidadeNova * valorItem;

            alert(`Você adicionou ${quantidadeNova} itens do Item ${itemId}. Valor total: R$ ${valorTotal.toFixed(2)}`);
        } else {
            alert("Quantidade insuficiente em estoque.");
        }
    } else {
        alert("Por favor, insira um número válido para a quantidade.");
    }
}
