function mostrarPopup(input, label, helper) {
    // Mostrar pop-up de campo obrigatório ao perder foco
    input.addEventListener("blur", function () {
        if (input.value.trim() === "") {
            label.classList.add("required-popup");
            helper.classList.add("visible");
            input.classList.add("error");
        } else {
            label.classList.remove("required-popup");
            helper.classList.remove("visible");
            input.classList.remove("error");
        }
    });

    // Remover a mensagem de erro enquanto o usuário digita
    input.addEventListener("input", function () {
        if (input.value.trim() !== "") {
            helper.classList.remove("visible");
            input.classList.remove("error");
        }
    });
}

/* Validação Nome */

let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");

mostrarPopup (nomeInput, nomeLabel)

/* Validação CPF */

let cpfInput = document.getElementById("cpf");
let cpfLabel = document.querySelector('label[for="cpf"]');
let cpfHelper = document.getElementById("cpf-helper");

mostrarPopup (cpfInput, cpfLabel)

/* Validação data nascimento */

let data_nascimentoInput = document.getElementById("data_nascimento");
let data_nascimentoLabel = document.querySelector('label[for="data_nascimento"]');
let data_nascimentoHelper = document.getElementById("data_nascimento-helper");

mostrarPopup (data_nascimentoInput, data_nascimentoLabel)

/* Validação email */

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

mostrarPopup (emailInput, emailLabel)

/* Validação endereço */

let enderecoInput = document.getElementById("endereco");
let enderecoLabel = document.querySelector('label[for="endereco"]');
let enderecoHelper = document.getElementById("endereco-helper");

mostrarPopup (enderecoInput, enderecoLabel)

/* Validação celular */

let celularInput = document.getElementById("celular");
let celularLabel = document.querySelector('label[for="celular"]');
let celularHelper = document.getElementById("celular-helper");

mostrarPopup (celularInput, celularLabel)

// Verificação do campo nome
if (nomeInput.value.trim() === "") {
    nomeHelper.innerText = "O nome é obrigatório";
    nomeHelper.classList.add("visible");
    nomeInput.classList.add("error");
    e.preventDefault();
}

// Verificação do campo CPF
if (cpfInput.value.trim() === "") {
    cpfHelper.innerText = "O CPF é obrigatório";
    cpfHelper.classList.add("visible");
    cpfInput.classList.add("error");
    e.preventDefault();
}

// Verificação da data de nascimento
if (dataNascimentoInput.value.trim() === "") {
    dataNascimentoHelper.innerText = "A data de nascimento é obrigatória";
    dataNascimentoHelper.classList.add("visible");
    dataNascimentoInput.classList.add("error");
    e.preventDefault();
}

// Verificação do campo email
if (emailInput.value.trim() === "") {
    emailHelper.innerText = "O e-mail é obrigatório";
    emailHelper.classList.add("visible");
    emailInput.classList.add("error");
    e.preventDefault();
}

// Verificação do campo endereço
if (enderecoInput.value.trim() === "") {
    enderecoHelper.innerText = "O endereço é obrigatório";
    enderecoHelper.classList.add("visible");
    enderecoInput.classList.add("error");
    e.preventDefault();
}

// Verificação do campo celular
if (celularInput.value.trim() === "") {
    celularHelper.innerText = "O celular é obrigatório";
    celularHelper.classList.add("visible");
    celularInput.classList.add("error");
    e.preventDefault();
}

