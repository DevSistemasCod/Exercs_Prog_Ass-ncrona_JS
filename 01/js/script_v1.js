function configurar() {
  let loginBtn = document.getElementById('loginBtn');

  if (loginBtn instanceof HTMLButtonElement) {
    loginBtn.addEventListener('click', validarLogin);
  }
}

function simularLogin(username) {
  return new Promise((resolve, reject) => {
    if (username === 'admin') {
      resolve('Login bem-sucedido');
    } else {
      reject('Credenciais inválidas');
    }
  });
}

function validarLogin() {
  try {
    let usuarioInput = document.getElementById('usuario');

    if (usuarioInput instanceof HTMLInputElement) {
      let usuario = usuarioInput.value.trim();

      if (!usuario) {
        throw new Error('O campo de usuário não pode estar vazio.');
      }

      simularLogin(usuario)
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
