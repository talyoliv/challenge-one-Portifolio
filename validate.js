const camposDoFormulario = document.querySelectorAll("[required]");

const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", () => {
    alert("E-mail enviado com sucesso");
})

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'tooShort'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
    valueMissing: "O campo de e-mail não pode estar vazio.",
    typeMismatch: "Por favor, preencha um email válido.",
    tooShort: "Por favor, preencha um e-mail válido."
    },
    assunto: {
        valueMissing: "O campo assunto não pode estar vazio.",
        typeMismatch: "Por favor, preencha um assunto válido.",
        tooShort: "Por favor, preencha um assunto válido."
    },
    mensagem: {
        valueMissing: "O campo mensagem não pode estar vazio.",
        typeMismatch: "Por favor, preencha uma mensagem válida.",
        tooShort: "Por favor, preencha uma mensagem válida."
    }     
}

function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');
    
    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        }
    })

    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorDeInput = campo.checkValidity();

    if (!validadorDeInput) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
}



