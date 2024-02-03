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

    // Define o tamanho inicial e a transição
    novaImagem.style.transform = 'scale(0)';
    novaImagem.style.transition = 'transform 2s ease';

    // Adiciona nova imagem
    imagensContainer.appendChild(novaImagem);

    // Força um novo layout antes de aplicar a escala
    novaImagem.offsetWidth;

    // Aplica a escala para aumentar o tamanho
    novaImagem.style.transform = 'scale(1)';

    // Remove a imagem anterior após transição
    setTimeout(() => {
      const imagemAnterior = imagensContainer.querySelector('img:not(:last-child)');
      if (imagemAnterior) {
        imagemAnterior.style.opacity = 0;
        imagemAnterior.addEventListener('transitionend', () => {
          imagensContainer.removeChild(imagemAnterior);
        }, {
          once: true
        });
      }
    }, 4000);

    // Atualiza o índice para a próxima imagem
    imagemAtualIndex = (imagemAtualIndex + 1) % imagemUrls.length;
  }

  // Exibe a primeira imagem imediatamente
  exibirProximaImagem();

  // Configura o intervalo para exibir automaticamente as imagens
  setInterval(exibirProximaImagem, intervalo);
});
