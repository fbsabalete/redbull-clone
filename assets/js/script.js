let email = document.querySelector("#inputEmail")
let formEmail = document.querySelector("#formEmail")
let nome = document.querySelector("#inputNome")
let formNome = document.querySelector("#formNome")
let indicacao = document.querySelector("#inputIndicacao")
let formIndicacao = document.querySelector("#formIndicacao")
let form = document.querySelector("#formulario")

function validaEmail(){
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        formEmail.classList.add("was-validated")
    }
}

function validaNome(){
    if(nome.value.indexOf("@") == -1 || nome.value.indexOf(".") == -1){
        formNome.classList.add("was-validated")
    }
}

function validaIndicacao(){
    if(indicacao.value.indexOf("@") == -1 || indicacao.value.indexOf(".") == -1){
        formIndicacao.classList.add("was-validated")
    }
}

function enviar(){
    if(form.checkValidity()){
        alert("Formulario enviado")
        $('#modalNewsletter').modal('hide')
    }else{
        alert("Preencha corretamente os dados.")
    }
}