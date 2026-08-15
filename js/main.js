//Leitores que reconhecem quando o link/produto é clicado
document.getElementById("hdmi").addEventListener("click", function () {
  salvarProduto(
    "assets/caboHDMI.webp",
    "Cabo HDMI",
    25,
    30,
    "Este cabo HDMI de alta performance é a escolha ideal para quem busca máxima fidelidade de áudio e vídeo digital, garantindo uma transmissão de sinal perfeitamente estável e livre de interferências ou engasgos para a sua TV, monitor, projetor ou videogame. Construído com materiais de alta durabilidade e conectores resistentes à oxidação, ele suporta resoluções em alta definição com cores vibrantes e pretos profundos, sendo o acessório indispensável para transformar a sua sala em um verdadeiro cinema ou elevar o nível das suas gameplays com uma resposta visual imediata e som totalmente imersivo."
  );
});

document.getElementById("rede").addEventListener("click", function () {
  salvarProduto(
    "assets/caboRede.webp",
    "Cabo de Rede",
    15,
    50,
    "Esqueça as oscilações e a lentidão do Wi-Fi com este cabo de rede LAN de alta velocidade, projetado especificamente para entregar uma conexão de internet ultrarrápida, estável e com a menor taxa de latência possível para o seu computador, notebook ou console de jogos. Fabricado com condutores de excelente condutividade e blindagem eficiente contra interferências eletromagnéticas, ele é perfeito para quem realiza downloads pesados, trabalha com home office, assiste a streamings em altíssima resolução ou joga online profissionalmente, garantindo o máximo aproveitamento do plano da sua banda larga por um custo-benefício imbatível."
  );
});

document.getElementById("pendrive").addEventListener("click", function () {
  salvarProduto(
    "assets/pendrive.webp",
    "Pendrive 32GB",
    40,
    20,
    "Leve seus arquivos mais importantes sempre com você utilizando o Pendrive SanDisk, um dispositivo de armazenamento portátil premium que combina alta velocidade de leitura, segurança de dados excepcional e um design compacto ultraresistente que cabe facilmente no seu bolso ou chaveiro. Perfeito para estudantes, fotógrafos e profissionais de TI, ele permite transferir fotos, vídeos, músicas e documentos pesados em poucos segundos com total compatibilidade plug-and-play em computadores, notebooks, smart TVs e som automotivo, oferecendo a confiabilidade de uma das marcas líderes mundiais no mercado de memória."
  );
});

document.getElementById("energia").addEventListener("click", function () {
  salvarProduto(
    "assets/energia.webp",
    "Cabo de Energia",
    20,
    35,
    "Garanta a segurança e o funcionamento contínuo dos seus principais eletrodomésticos e eletrônicos com este cabo de energia robusto, desenvolvido sob rigorosos padrões de segurança técnica para suportar variações de carga sem aquecer ou apresentar falhas de condução. Ideal para computadores, monitores, impressoras e panelas elétricas que utilizam o padrão correspondente, ele possui revestimento em PVC reforçado com excelente flexibilidade e conectores perfeitamente moldados que evitam o mau contato, protegendo seu investmento e assegurando que seus aparelhos recebam uma alimentação elétrica limpa e constante."
  );
});

document.getElementById("vga").addEventListener("click", function () {
  salvarProduto(
    "assets/vga.webp",
    "Cabo VGA",
    35,
    14,
    "Resgate a funcionalidade de monitores, projetores e computadores mais antigos com este cabo VGA de alta qualidade, engenhebrado para fornecer uma transmissão de vídeo analógico limpa, nítida e completamente livre de fantasmas ou distorções na imagem. Equipado com parafusos de fixação manual que garantem uma conexão firme e segura nas portas dos aparelhos, além de condutores internos protegidos e filtros de ferrite nas extremidades para barrar ruídos externos, este cabo é a solução corporativa e acadêmica perfeita para apresentações, salas de aula ou para estender a vida útil do seu hardware confiável."
  );
});

document.getElementById("usbc").addEventListener("click", function () {
  salvarProduto(
    "assets/usbc.webp",
    "Cabo USB-C",
    55,
    80,
    "Experimente o futuro da conectividade com este cabo USB-C de última geração, projetado para oferecer carregamento ultrarrápido e transferência de dados em velocidades impressionantes para os smartphones, tablets e notebooks mais modernos do mercado. Construído com um revestimento externo altamente reforçado contra torções, nós e rompimentos cotidianos, ele possui um conector simétrico reversível que encaixa perfeitamente de qualquer lado, proporcionando uma experiência de uso extremamente prática, segura e durável que acompanha o ritmo dinâmico da sua rotina tecnológica."
  );
});

document.getElementById("p2").addEventListener("click", function () {
  salvarProduto(
    "assets/p2.webp",
    "Cabo P2",
    15,
    22,
    "Conecte seus dispositivos de áudio com total clareza sonora através deste cabo P2 auxiliar, a solução perfeita para transmitir suas músicas favoritas do celular, tablet ou notebook direto para o som do carro, caixas de som portáteis ou fones de ouvido. Com conectores usinados com precisão que evitam chiados, estalos e o incômodo mau contato ao movimentar o fio, este cabo oferece uma reprodução acústica limpa e fiel, permitindo que você aproveite cada detalhe das suas playlists com a máxima pureza sonora e flexibilidade que a sua música exige."
  );
});

document.getElementById("ps2").addEventListener("click", function () {
  salvarProduto(
    "assets/ps2.webp",
    "Cabo PS/2",
    40,
    5,
    "Ideal para a manutenção de sistemas legados, servidores industriais e computadores retrô, este cabo PS/2 oferece a conexão perfeita, direta e sem latência para teclados e mouses que dependem desta interface clássica e altamente estável. Livre da necessidade de drivers ou configurações complexas do sistema operacional, sua arquitetura interna robusta e pinagem blindada garantem que cada comando seja registrado instantaneamente pelo hardware, sendo a ferramenta técnica essencial para profissionais de suporte e entusiastas que exigem compatibilidade exata e durabilidade a longo prazo."
  );
});

//função que armazena os dados dos produtos no armazenamento local
function salvarProduto(img, nome, preco, estoque, descricao) {
  localStorage.setItem("prod_img", img);
  localStorage.setItem("prod_nome", nome);
  localStorage.setItem("prod_preco", preco);
  localStorage.setItem("prod_estoque", estoque);
  localStorage.setItem("prod_descricao", descricao);
}
