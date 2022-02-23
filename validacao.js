const dataNascimento = document.querySelector('#nascimento');
// adiciona um ouvinte para quando o campo perder o foco chamar a função de validação
dataNascimento.addEventListener('blur', (evento) => {
    validaDataNascimento(evento.target)
})

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