//obtem as informaçoes salvas no armazenamento local apos a pagina ser carregada
window.onload = function () {
  const imagem = localStorage.getItem("prod_img");
  const nome = localStorage.getItem("prod_nome");
  const preco = localStorage.getItem("prod_preco");
  const estoque = localStorage.getItem("prod_estoque");
  const descricao = localStorage.getItem("prod_descricao");

  //verifica se as variaveis nao sao vazias, se verdadeiro, muda os valores para os dados locais
  if (imagem) {
    document.getElementById("imagem").src = imagem;
  }

  if (nome) {
    document.getElementById("nome").textContent = nome;
  }
  if (descricao) {
    document.getElementById("descricao").textContent = descricao;
  }
  if (preco) {
    document.getElementById("precoin").textContent = preco;
  }
  if (estoque) {
    document.getElementById("estoque").textContent = "Estoque: " + estoque;
  }
};

//salva a quantidade comprada pelo usuario ao clicar em comprar
function comprar() {
  let input = document.getElementById("inputValor");
  let valor = input.value;
  localStorage.setItem("prod_quantidade", valor);
}

// funcao que controla os botoes de alteração de valor do input de compra
function alterarValor(valor) {
  const min = 0;
  let input = document.getElementById("inputValor");
  let valorAtual = parseInt(input.value);
  let novoValor = valorAtual + parseInt(valor);
  input.value = novoValor;
  validarLimite();
}

//verifica se a quantidade digitada é menor que 0 ou maior que o estoque
function validarLimite() {
  let input = document.getElementById("inputValor");
  const estoque = parseInt(localStorage.getItem("prod_estoque"));
  if (input.value < 0) {
    input.value = 0;
  }

  if (input.value > estoque) {
    input.value = estoque;
  }

  if (!input.value) {
    input.value = 0;
  }
}
