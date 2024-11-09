/* Validação Nome */

let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");

function mostrarPopup(input, label) {
    /* Mostrar pop-up de campo obrigatório */

    input.addEventListener("focus", function(){
    label.classList.add("required-popup")
    })

    /* Ocultar pop-up de campo obrigatório */
    input.addEventListener("blur", function(){
    label.classList.remove("required-popup")
    })
}

mostrarPopup (nomeInput, nomeLabel)

/* Validação CPF */

let cpfInput = document.getElementById("cpf");
let cpfLabel = document.querySelector('label[for="cpf"]');
let cpfHelper = document.getElementById("cpf-helper");

function mostrarPopup(input, label) {
    /* Mostrar pop-up de campo obrigatório */

    input.addEventListener("focus", function(){
    label.classList.add("required-popup")
    })

    /* Ocultar pop-up de campo obrigatório */
    input.addEventListener("blur", function(){
    label.classList.remove("required-popup")
    })
}

mostrarPopup (nomeInput, nomeLabel)

/* Validação data nascimento */

let data_nascimentoInput = document.getElementById("data_nascimento");
let data_nascimentoLabel = document.querySelector('label[for="data_nascimento"]');
let data_nascimentoHelper = document.getElementById("data_nascimento-helper");

function mostrarPopup(input, label) {
    /* Mostrar pop-up de campo obrigatório */

    input.addEventListener("focus", function(){
    label.classList.add("required-popup")
    })

    /* Ocultar pop-up de campo obrigatório */
    input.addEventListener("blur", function(){
    label.classList.remove("required-popup")
    })
}

mostrarPopup (nomeInput, nomeLabel)

/* Validação email */

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

function mostrarPopup(input, label) {
    /* Mostrar pop-up de campo obrigatório */

    input.addEventListener("focus", function(){
    label.classList.add("required-popup")
    })

    /* Ocultar pop-up de campo obrigatório */
    input.addEventListener("blur", function(){
    label.classList.remove("required-popup")
    })
}

mostrarPopup (nomeInput, nomeLabel)

/* Validar valor do input */

emailInput.addEventListener("change", function(e){
    let valor = e.target.value
     // Verificar se o e-mail possui "@" e termina com um domínio válido como ".com"
    let emailRegex = /^[^\s@]+@[^\s@]+\.com$/;
    if (emailRegex.test(valor)) {
        emailInput.classList.remove("error");
        emailInput.classList.add("correct");
        emailHelper.classList.remove("visible");
    } else {
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");
        emailHelper.innerText = "O e-mail está inválido.";
        emailHelper.classList.add("visible");
    }
})


/* Validação endereço */

let enderecoInput = document.getElementById("endereco");
let enderecoLabel = document.querySelector('label[for="endereco"]');
let enderecoHelper = document.getElementById("endereco-helper");

function mostrarPopup(input, label) {
    /* Mostrar pop-up de campo obrigatório */

    input.addEventListener("focus", function(){
    label.classList.add("required-popup")
    })

    /* Ocultar pop-up de campo obrigatório */
    input.addEventListener("blur", function(){
    label.classList.remove("required-popup")
    })
}

mostrarPopup (nomeInput, nomeLabel)

/* Validação senha */

let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

function mostrarPopup(input, label) {
    /* Mostrar pop-up de campo obrigatório */

    input.addEventListener("focus", function(){
    label.classList.add("required-popup")
    })

    /* Ocultar pop-up de campo obrigatório */
    input.addEventListener("blur", function(){
    label.classList.remove("required-popup")
    })
}

mostrarPopup (nomeInput, nomeLabel)

/* Validar valor do input */
senhaInput.addEventListener("change", function(e){
    let valor = e.target.value
    if (valor.length < 6){
        senhaInput.classList.remove("correct");
        senhaInput.classList.add("error");
        senhaHelper.innerText = "A senha deve ter pelo menos 6 digitos";
        senhaHelper.classList.add("visible");
    }else{
        senhaInput.classList.remove("error");
        senhaInput.classList.add("correct");
        senhaHelper.classList.remove("visible");
    }
})

// Verificação de campo vazio para senha e e-mail
document.querySelector("form").addEventListener("submit", function(e) {
    if (emailInput.value.trim() === "") {
        emailHelper.innerText = "O e-mail é obrigatório";
        emailHelper.classList.add("visible");
        emailInput.classList.add("error");
        e.preventDefault();
    }
    if (senhaInput.value.trim() === "") {
        senhaHelper.innerText = "A senha é obrigatória";
        senhaHelper.classList.add("visible");
        senhaInput.classList.add("error");
        e.preventDefault();
    }
});
