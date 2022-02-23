export function valida(input){
    const tipoDeInput = input.dataset.tipo
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }
}

const validadores = {
    dataNascimento:input => validaDataNascimento(input)
}

function validaDataNascimento(input){
    const dataRecebida = new Date(input.value)
    var mensagem = ''
    
    if(maiorQueDiaAtual(dataRecebida)){
        mensagem = "A data de nascimento precisa ser menor que a data atual"
    }

    input.setCustomValidity(mensagem)
}

function maiorQueDiaAtual(data){
    const dataAtual = new Date()
    return data > dataAtual;
}