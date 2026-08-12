//obtem as informaçoes salvas no armazenamento local apos a pagina ser carregada
window.onload = function () {
  const nome = localStorage.getItem("prod_nome");
  const preco = localStorage.getItem("prod_preco");
  const estoque = localStorage.getItem("prod_estoque");
  const quantidade = localStorage.getItem("prod_quantidade");
  const subTotal = parseInt(quantidade) * parseFloat(preco);
  const estoqueFinal = parseInt(estoque) - parseInt(quantidade);

  //Verifica se as variaveis nao sao vazias, se verdadeiro, muda os valores para os dados locais
  //Parte da seção SubTotal
  if (nome) {
    document.getElementById("nome1").textContent = nome;
  }

  if (preco) {
    document.getElementById("preco1").textContent =
      "Valor Unitario: R$ " + preco + ".00";
  }

  if (estoque) {
    document.getElementById("estoque1").textContent =
      "Estoque: " + estoque + " unidades";
  }

  if (quantidade) {
    document.getElementById("quantidade1").textContent =
      "Quantidade: " + quantidade + " unidades ";
  }
  if (subTotal) {
    document.getElementById("sub-total1").textContent =
      "Sub Total: R$ " + subTotal + ".00";
  }

  //Parte da seção Total
  if (estoqueFinal) {
    document.getElementById("estoque-final").textContent =
      "Estoque Restante: " + estoqueFinal + " unidades";
  }

  if (quantidade) {
    document.getElementById("quantidade-final").textContent =
      "Quantia Total: " + quantidade + " unidades";
  }

  if (subTotal) {
    document.getElementById("valor-total").textContent =
      "Valor Total: R$" + subTotal + ".00";
  }
};
