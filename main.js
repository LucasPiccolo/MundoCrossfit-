
 "use strict";

//CAPTCHA

let captchaRandom = Math.floor((Math.random()*10000)+1);
let valueCaptcha = document.getElementById("captcha");
valueCaptcha.value = captchaRandom;
    
document.getElementById("enviar").addEventListener("click",validacion);
    
 function validacion() {
        event.preventDefault();
        let usu = document.getElementById("validacion").value;
        console.log(usu);
       if(usu == valueCaptcha.value) {
           let parrafo = document.getElementById("valido");
           parrafo.innerHTML = "El captcha es valido";
       } else {
        let parrafo = document.getElementById("valido");
        parrafo.innerHTML = "El captcha es invalido";
       }
    }