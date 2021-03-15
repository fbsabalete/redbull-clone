let email = document.querySelector("#inputEmail")
let formEmail = document.querySelector("#formEmail")
let nome = document.querySelector("#inputNome")
let formNome = document.querySelector("#formNome")
let indicacao = document.querySelector("#inputIndicacao")
let formIndicacao = document.querySelector("#formIndicacao")
let form = document.querySelector("#formulario")

function validaEmail(){
    formEmail.classList.add("was-validated")
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

window.addEventListener("scroll", hideNav)
let lastScroll = 0
function hideNav() {
    let scroll = window.scrollY;
    let bar = document.querySelector("#navegacao");
    console.log("Scroll");
    console.log(scroll);
    console.log("LastScroll");
    console.log(lastScroll);

    if(scroll != 0){
        if(scroll > lastScroll) {
        bar.classList.remove("scroll-up");
        bar.classList.add("scroll-down");
        } else {
        bar.classList.remove("scroll-down");
        bar.classList.add("scroll-up");
        }
    }else{
        bar.classList.add("scroll-min")
        bar.classList.remove("scroll-down");
        bar.classList.remove("scroll-up");
    }
    lastScroll = scroll;
}
