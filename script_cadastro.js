function mostrarPopup(input, label, helper) {
    // Mostrar pop-up de campo obrigatório ao perder foco
    
        if (input.value.trim() === "") {
            label.classList.add("required-popup");
            helper.classList.add("visible");
            input.classList.add("error");
            helper.innerText = "Campo obrigatório";
            return false;
        } else {
            label.classList.remove("required-popup");
            helper.classList.remove("visible");
            input.classList.remove("error");
        }

}


function validaFormulario(){
/* Validação Nome */
retorno=true;

let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");

if (mostrarPopup (nomeInput, nomeLabel,nomeHelper) == false) {
    retorno=false;
}

/* Validação CPF */

let cpfInput = document.getElementById("cpf");
let cpfLabel = document.querySelector('label[for="cpf"]');
let cpfHelper = document.getElementById("cpf-helper");

mostrarPopup (cpfInput, cpfLabel,cpfHelper)

if (mostrarPopup (cpfInput, cpfLabel,cpfHelper) == false) {
    retorno=false;
}

/* Validação data nascimento */

let data_nascimentoInput = document.getElementById("data_nascimento");
let data_nascimentoLabel = document.querySelector('label[for="data_nascimento"]');
let data_nascimentoHelper = document.getElementById("data_nascimento-helper");

if (mostrarPopup (data_nascimentoInput, data_nascimentoLabel,data_nascimentoHelper)==false) {
    retorno=false;
}
/* Validação email */

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

if (mostrarPopup (emailInput, emailLabel,emailHelper) ==false) {
    retorno=false;
}

/* Validação endereço */

let enderecoInput = document.getElementById("endereco");
let enderecoLabel = document.querySelector('label[for="endereco"]');
let enderecoHelper = document.getElementById("endereco-helper");

if (mostrarPopup (enderecoInput, enderecoLabel,enderecoHelper)==false) {
    retorno=false;
}

/* Validação celular */

let celularInput = document.getElementById("celular");
let celularLabel = document.querySelector('label[for="celular"]');
let celularHelper = document.getElementById("celular-helper");

if (mostrarPopup (celularInput, celularLabel,celularHelper)==false) {
    retorno=false;
}


return retorno;

}
