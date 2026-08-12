// Obtém as informações salvas no armazenamento local após a página ser carregada
window.onload = function () {
  const imagem = localStorage.getItem("prod_img");
  const nome = localStorage.getItem("prod_nome");
  const preco = localStorage.getItem("prod_preco");
  const estoque = localStorage.getItem("prod_estoque");
  const descricao = localStorage.getItem("prod_descricao");

  // Verifica se as variáveis não são vazias, se verdadeiro, muda os valores para os dados locais
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

  // Define a quantidade inicial padrão como 1 se houver estoque
  let input = document.getElementById("inputValor");
  if (estoque && parseInt(estoque) > 0) {
    input.value = 1;
  } else {
    input.value = 0;
  }
};

// Salva a quantidade comprada pelo usuário ao clicar em comprar
function comprar(event) {
  // Evita o redirecionamento imediato do link HTML para dar tempo de salvar os dados
  if (event) event.preventDefault();

  let input = document.getElementById("inputValor");
  let valor = parseInt(input.value) || 0;
  const estoque = parseInt(localStorage.getItem("prod_estoque")) || 0;

  if (valor <= 0) {
    alert("Por favor, selecione uma quantidade maior que zero.");
    return;
  }

  if (valor > estoque) {
    alert("Quantidade acima do estoque disponível.");
    return;
  }

  localStorage.setItem("prod_quantidade", valor);
  
  // Redireciona manualmente para a página de relatório com segurança
  window.location.href = "relatorio.html";
}

// Função que controla os botões de alteração de valor do input de compra
function alterarValor(valor) {
  let input = document.getElementById("inputValor");
  
  // Se o campo estiver vazio ou inválido, assume 0
  let valorAtual = parseInt(input.value);
  if (isNaN(valorAtual)) {
    valorAtual = 0;
  }

  let novoValor = valorAtual + parseInt(valor);
  input.value = novoValor;
  
  // Executa a validação para corrigir o texto na tela se necessário
  validarLimite();
}

// Verifica se a quantidade digitada é menor que 1 ou maior que o estoque
function validarLimite() {
  let input = document.getElementById("inputValor");
  const estoque = parseInt(localStorage.getItem("prod_estoque")) || 0;
  let valorVerificado = parseInt(input.value);

  // Se o usuário apagar o número digitado
  if (isNaN(valorVerificado)) {
    input.value = "";
    return;
  }

  // Não permite comprar menos que zero ou ultrapassar o estoque disponível
  if (valorVerificado < 0) {
    input.value = 0;
  } else if (valorVerificado > estoque) {
    input.value = estoque;
  }
}
