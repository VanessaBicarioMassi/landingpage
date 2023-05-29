let validarObrigatorio = () => {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let numCartao = document.getElementById('numero-cartao').value;
    let nomeCartao = document.getElementById('nome-cartao').value;
    let validadeCartao = document.getElementById('validade-cartao').value;
    let cvvCartao = document.getElementById('cvv-cartao').value;
    let cep = document.getElementById('cep').value;
    let rua = document.getElementById('endereco').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;

    if (nome === "") {
        alert('O campo "nome" é obrigatório.');
        return;
    }

    if (email === "") {
        alert('O campo "e-mail" é obrigatório.');
        return;
    }

    if (telefone === "") {
        alert('O campo "telefone" é obrigatório.');
        return;
    }

    if (numCartao === "") {
        alert('O campo "numero do cartão" é obrigatório.');
        return;
    }

    if (nomeCartao === "") {
        alert('O campo "nome no cartão" é obrigatório.');
        return;
    }

    if (validadeCartao === "") {
        alert('O campo "validade do cartão" é obrigatório.');
        return;
    }

    if (cvvCartao === "") {
        alert('O campo "CVV do cartão" é obrigatório.');
        return;
    }

    if (cep === "") {
        alert('O campo "CEP" é obrigatório.');
        return;
    }

    if (rua === "") {
        alert('O campo "Rua" é obrigatório.');
        return;
    }

    if (cidade === "") {
        alert('O campo "Cidade" é obrigatório.');
        return;
    }

    if (estado === "") {
        alert('O campo "Estado" é obrigatório.');
        return;
    }
  };
  
let btnFinalizar = document.getElementById('button-finale')
btnFinalizar.addEventListener('click', validarObrigatorio);