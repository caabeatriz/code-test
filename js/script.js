const inputName = document.querySelector("#bannerName")
const messageErrorName = document.querySelector("#error")
const inputEmail = document.querySelector("#bannerEmail")
const messageErrorEmail = document.querySelector("#errorEmail") 
const btnDownload = document.querySelector("#forms-download-btn")

inputName.addEventListener("blur", function(event){
    event.preventDefault()
    if(inputName.value.length <= "2"){
        messageErrorName.style.display = "block";
        messageErrorName.innerHTML = "digite seu nome completo"
    }
})

inputName.addEventListener("keyup", function(event){
    event.preventDefault()
     messageErrorName.style.display = "none";
 })

inputEmail.addEventListener("blur", function(event){
    event.preventDefault()
    if(inputEmail.value == "" || inputEmail.value.indexOf('@') == -1 || inputEmail.value.indexOf('.') == -1 || inputEmail.value.indexOf('@') < 1 || inputEmail.value.lastIndexOf('.')  < inputEmail.value.indexOf('@') +2){
        messageErrorEmail.style.display = "block";
        messageErrorEmail.innerHTML = "digite um e-mail válido"
    }    
})

inputEmail.addEventListener("keyup", function(event){
   event.preventDefault()
    messageErrorEmail.style.display = "none";
})


// btnDownload.addEventListener("click", function(event){
//     event.preventDefault();

//     if(messageErrorName.style.display == "none" && messageErrorEmail.style.display == "none"){
//         location.href="thankyou.html"

//     }
// })
