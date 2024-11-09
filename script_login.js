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
     // Verificar se o e-mail possui "@" e termina com um domínio válido como ".com"
    // if (valor.includes("@") && valor.includes(".com")){
    //     emailInput.classList.remove("error");
    //     emailInput.classList.add("correct");
    //     emailHelper.classList.remove("visible");
    // }else{
    //     emailInput.classList.remove("correct");
    //     emailInput.classList.add("error");
    //     emailHelper.innerText = "O email está invalido";
    //     emailHelper.classList.add("visible");
    // }
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

let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

mostrarPopup (senhaInput, senhaLabel)

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