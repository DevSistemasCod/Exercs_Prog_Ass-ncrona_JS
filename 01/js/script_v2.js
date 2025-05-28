function configurar() {
  let loginBtn = document.getElementById('loginBtn');

  if (loginBtn instanceof HTMLButtonElement) {
    loginBtn.addEventListener('click', validarLogin);
  }
}

function simularLogin(usuario) {
  return new Promise((resolve, reject) => {
    if (usuario === 'admin') {
      resolve('Login bem-sucedido');
    } else {
      reject('Credenciais inválidas');
    }
  });
}

async function validarLogin() {
  try {
    let usuarioInput = document.getElementById('usuario');

    if (usuarioInput instanceof HTMLInputElement) {
      let usuario = usuarioInput.value.trim();

      if (!usuario) {
        throw new Error('O campo de usuário não pode estar vazio.');
      }

      // Utilizando async/await para lidar com a Promise
      let mensagem = await simularLogin(usuario);
      exibirMensagem(mensagem, 'green');
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
