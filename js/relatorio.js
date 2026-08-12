// Obtém as informações salvas no armazenamento local após a página ser carregada
window.onload = function () {
  const nome = localStorage.getItem("prod_nome");
  const preco = localStorage.getItem("prod_preco");
  const estoque = localStorage.getItem("prod_estoque");
  const quantidade = localStorage.getItem("prod_quantidade");

  // Converte os valores para números com segurança (caso venham vazios, assume 0)
  const numPreco = parseFloat(preco) || 0;
  const numEstoque = parseInt(estoque) || 0;
  const numQuantidade = parseInt(quantidade) || 0;

  // Realiza os cálculos matemáticos
  const subTotal = numQuantidade * numPreco;
  const estoqueFinal = numEstoque - numQuantidade;

  // Parte da seção SubTotal
  if (nome !== null) {
    document.getElementById("nome1").textContent = nome;
  }

  if (preco !== null) {
    document.getElementById("preco1").textContent =
      "Valor Unitário: R$ " + numPreco.toFixed(2);
  }

  if (estoque !== null) {
    document.getElementById("estoque1").textContent =
      "Estoque Inicial: " + numEstoque + " unidades";
  }

  if (quantidade !== null) {
    document.getElementById("quantidade1").textContent =
      "Quantidade: " + numQuantidade + " unidades";
  }
  
  document.getElementById("sub-total1").textContent =
    "Sub-Total: R$ " + subTotal.toFixed(2);

  // Parte da seção Total
  // Aqui usamos !== null para aceitar o número 0 quando o estoque zerar
  if (estoque !== null && quantidade !== null) {
    document.getElementById("estoque-final").textContent =
      "Estoque Restante: " + estoqueFinal + " unidades";
  }

  if (quantidade !== null) {
    document.getElementById("quantidade-final").textContent =
      "Quantia Total: " + numQuantidade + " unidades";
  }

  document.getElementById("valor-total").textContent =
    "Valor Total: R$ " + subTotal.toFixed(2);
};
