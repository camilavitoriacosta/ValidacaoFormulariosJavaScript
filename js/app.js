import { valida } from "./validacao.js";

const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('blur', (evento) => { // adiciona um ouvinte para quando o campo perder o foco chamar a função de validação
        valida(evento.target)
    })
})
