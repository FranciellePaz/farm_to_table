/* Validação email */

let emailInput = document.getElementById("e-mail");
let emailLabel = document.querySelector('label[for="e-mail"]');
let emailHelper = document.getElementById("e-mail-helper");

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

mostrarPopup (emailInput, emailLabel)

/* Validar valor do input */

emailInput.addEventListener("change", function(e){
    let valor = e.target.value
    if (valor.includes("@") && valor.includes(".com")){
        emailInput.classList.remove("error");
        emailInput.classList.add("correct");
        emailHelper.classList.remove("visible");
    }else{
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");
        emailHelper.innerText = "O email está invalido";
        emailHelper.classList.add("visible");
    }
})

let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

mostrarPopup (passwordInput, passwordLabel)

/* Validar valor do input */
passwordInput.addEventListener("change", function(e){
    let valor = e.target.value
    if (valor.lenght < 6){
        passwordInput.classList.remove("correct");
        passwordInput.classList.add("error");
        passwordHelper.innerText = "A senha deve ter pelo menos 6 digitos";
        passwordHelper.classList.add("visible");
    }else{
        passwordInput.classList.remove("error");
        passwordInput.classList.add("correct");
        passwordHelper.classList.remove("visible");
    }
})
