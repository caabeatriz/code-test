const inputName = document.querySelector("#bannerName")
const messageErrorName = document.querySelector("#error")
const inputEmail = document.querySelector("#bannerEmail")
const messageErrorEmail = document.querySelector("#errorEmail") 

inputName.addEventListener("blur", function(event){
    if(inputName.value.length < "2"){
        messageErrorName.innerHTML = "digite seu nome completo"
    }
})

inputEmail.addEventListener("blur", function(event){
    if(inputEmail.value == "" || inputEmail.value.indexOf('@') == -1 || inputEmail.value.indexOf('.') == -1 || inputEmail.value.indexOf('@') < 1 || inputEmail.value.lastIndexOf('.')  < inputEmail.value.indexOf('@') +2){
        messageErrorEmail.style.display = "block";
        messageErrorEmail.innerHTML = "digite seu e-mail válido"
    }    
})

inputEmail.addEventListener("keyup", function(event){
   event.preventDefault()
    messageErrorEmail.style.display = "none";
    messageErrorEmail.innerHTML = "teste"
    console.log("teste11")
})