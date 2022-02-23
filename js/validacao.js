const validadores = {
    dataNascimento:input => validaDataNascimento(input)
}

const tiposDeErro = [
    "valueMissing", 
    "typeMismatch", 
    "customError"
]

const mensagemDeErro = {
    nome:{
        valueMissing: "O campo nome não pode estar vazio"
    },
    email:{
        valueMissing: "O campo email não pode estar vazio",
        typeMismatch: "O email digitado não é válido, inclua o @"
    },
    senha:{
        valueMissing: "O campo de senha não pode estar vazio",
    },
    dataNascimento:{
        valueMissing: "O campo data de nascimento não pode estar vazio",
        customError: "A data de nascimento precisa ser menor que a data atual"
    }
}

export function valida(input){
    const tipoDeInput = input.dataset.tipo
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }

    if(input.validity.valid){
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML= ''
    }
    else{
        input.parentElement.classList.add('input-container--invalido');
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML= obtemMensagemDeErro(input, tipoDeInput);
    }
}

function obtemMensagemDeErro(input, tipoInput){
    let mensagem = '';
    tiposDeErro.forEach( erro => {
        if(input.validity[erro]){
            mensagem = mensagemDeErro[tipoInput][erro];
        }
    })
    return mensagem;
}

function validaDataNascimento(input){
    const dataRecebida = new Date(input.value);
    var mensagem = '';
    
    if(maiorQueDiaAtual(dataRecebida)){
        mensagem = "A data de nascimento precisa ser menor que a data atual"
    }

    input.setCustomValidity(mensagem)
}

function maiorQueDiaAtual(data){
    const dataAtual = new Date()
    return data > dataAtual;
}