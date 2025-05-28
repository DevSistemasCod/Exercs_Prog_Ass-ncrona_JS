function configurar() {
  let verificarBtn = document.getElementById('verificarBtn');

  if (verificarBtn instanceof HTMLButtonElement) {
    verificarBtn.addEventListener('click', verificarPalindromo);
  }
}

function verificarSePalindromo(texto) {
  return new Promise((resolve, reject) => {
    if (typeof texto !== 'string' || !texto.trim()) {
      reject('Entrada inválida. Forneça uma string não vazia.');
    } else {
      // Remove caracteres especiais e espaços
      let semCaracteresEspeciais = texto.replace(/[^a-zA-Z0-9]/g, '');
      let textoMinusculo = semCaracteresEspeciais.toLowerCase();

      // Converte a string em um array de caracteres
      let arrayCaracteres = textoMinusculo.split('');
      // Reverte o array
      let arrayReverso = arrayCaracteres.reverse();
      // Junta o array em uma string novamente
      let textoReverso = arrayReverso.join('');

      // Compara o texto normalizado com o texto reverso
      if (textoMinusculo === textoReverso) {
        resolve('É um palíndromo');
      } else {
        reject('Não é um palíndromo');
      }
    }
  });
}


function verificarPalindromo() {
  try {
    let textoInput = document.getElementById('texto');

    if (textoInput instanceof HTMLInputElement) {
      let texto = textoInput.value.trim();

      if (!texto) {
        throw new Error('O campo não pode estar vazio.');
      }

      verificarSePalindromo(texto)
        .then((mensagem) => exibirMensagem(mensagem, 'green'))
        .catch((erro) => exibirMensagem(erro, 'red'));
    }
  } catch (erro) {
    exibirMensagem(erro.message, 'red');
  }
}

function exibirMensagem(conteudo, cor) {
  let mensagemElemento = document.getElementById('mensagem');

  if (mensagemElemento instanceof HTMLParagraphElement) {
    mensagemElemento.textContent = conteudo;
    mensagemElemento.style.color = cor;
  }
}

document.addEventListener('DOMContentLoaded', configurar);
