function inicializar() {
  let calcularBtn = document.getElementById('calcularBtn');

  if (calcularBtn instanceof HTMLButtonElement) {
    calcularBtn.addEventListener('click', calcular);
  }
}

async function calcular() {
  try {
    let data1Input = document.getElementById('data1');
    let data2Input = document.getElementById('data2');

    //prettier-ignore
    if ((data1Input instanceof HTMLInputElement) && (data2Input instanceof HTMLInputElement)
    ){
      let data1 = data1Input.value;
      let data2 = data2Input.value;

      if (!data1 || !data2) {
        throw new Error('Ambas as datas devem ser preenchidas.');
      }

      let diferenca = await calcularDiferencaDias(data1, data2);

      //prettier-ignore
      exibirMensagem(`A diferença entre as datas é de ${diferenca} dias.`,'green');
    }
  } catch (erro) {
    // Exibe mensagem de erro na tela
    exibirMensagem(erro.message || erro, 'red');
  }
}

function calcularDiferencaDias(primeiraData, segundaData) {
  return new Promise((resolve, reject) => {
    if (!primeiraData || !segundaData) {
      reject('Por favor, insira ambas as datas.');
    } else {
      let data1 = new Date(primeiraData);
      let data2 = new Date(segundaData);

      if (isNaN(data1.getTime()) || isNaN(data2.getTime())) {
        reject('As datas fornecidas são inválidas.');
      } else {
        //prettier-ignore
        let diferencaMilissegundos = Math.abs(data2.getTime() - data1.getTime());
        //prettier-ignore
        let diferencaDias = Math.ceil(diferencaMilissegundos / (1000 * 60 * 60 * 24));
        resolve(diferencaDias);
      }
    }
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
