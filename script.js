document.addEventListener('DOMContentLoaded', function () {
  // Array de URLs das imagens
  const imagemUrls = [
    './img/Imagem-aries.png',
    './img/imagem-Touro.png',
    './img/imagem-Gemeos.png',
    './img/imagem-Cancer.png',
    './img/imagem-Leao.png',
    './img/imagem-Virgem.png',
    './img/imagem-Libra.png',
    './img/imagem-Escorpiao.png',
    './img/imagem-Sagitario.png',
    './img/imagem-Capricornio.png',
    './img/imagem-Aquario.png',
    './img/imagem-Peixes.png'
  ];

  // Tempo de exibição
  const intervalo = 5000;

  const imagensContainer = document.querySelector('.imagens-container');
  let imagemAtualIndex = 0;

  function exibirProximaImagem() {
    // Cria uma nova imagem
    const novaImagem = document.createElement('img');
    novaImagem.src = imagemUrls[imagemAtualIndex];
    novaImagem.alt = 'Imagem #' + (imagemAtualIndex + 1);

    // Adiciona nova imagem
    imagensContainer.appendChild(novaImagem);

    // Configura a opacidade inicial para 0
    novaImagem.style.opacity = 0;

    // Gradualmente aumenta a opacidade para 1
    setTimeout(() => {
      novaImagem.style.opacity = 1;
    }, 10);

    // Incrementa o índice para a próxima imagem
    imagemAtualIndex = (imagemAtualIndex + 1) % imagemUrls.length;

    // Configura o próximo timeout para a próxima imagem
    setTimeout(exibirProximaImagem, intervalo);
  }

  // Exibe a primeira imagem imediatamente
  exibirProximaImagem();
});
