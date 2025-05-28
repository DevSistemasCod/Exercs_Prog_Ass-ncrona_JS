function inicializar() {
  let inverterBtn = document.getElementById('inverterBtn');

  if (inverterBtn instanceof HTMLButtonElement) {
    inverterBtn.addEventListener('click', transformarTexto);
  }
}

async function transformarTexto() {
  try {
    let textoInput = document.getElementById('texto');

    if (textoInput instanceof HTMLInputElement) {
      let texto = textoInput.value.trim();

      if (!texto) {
        throw new Error('O campo não pode estar vazio.');
      }

      // Encadeia as Promises para inverter e transformar em maiúsculas
      let textoInvertido = await inverterString(texto);
      let textoFinal = await transformarParaMaiusculas(textoInvertido);

      // Exibe mensagem ao usuário
      exibirMensagem(`Resultado: ${textoFinal}`, 'green');
    }
  } catch (erro) {
    // Exibe mensagem de erro ao usuário
    exibirMensagem(erro.message || erro, 'red');
  }
}

function inverterString(texto) {
  return new Promise((resolve, reject) => {
    if (typeof texto !== 'string' || !texto.trim()) {
      reject('Entrada inválida. Forneça uma string não vazia.');
    } else {
      let textoInvertido = texto.split('').reverse().join('');
      resolve(textoInvertido);
    }
  });
}

// Função que retorna uma Promise para transformar texto em maiúsculas
function transformarParaMaiusculas(texto) {
  return new Promise((resolve) => {
    resolve(texto.toUpperCase());
  });
}

// Função para exibir mensagens
function exibirMensagem(conteudo, cor) {
  let mensagemElemento = document.getElementById('mensagem');

  if (mensagemElemento instanceof HTMLParagraphElement) {
    mensagemElemento.textContent = conteudo;
    mensagemElemento.style.color = cor;
  }
}

document.addEventListener('DOMContentLoaded', inicializar);
