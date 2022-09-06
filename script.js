let sliderelement = document.querySelector('#slider');
let buttonelement = document.querySelector('#button');

let sizepassword = document.querySelector('#valor');
let password = document.querySelector('#password');

let containerPassword = document.querySelector('#container-password');

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$";
let novasenha = "";

sizepassword.innerHTML = sliderelement.value

sliderelement.oninput = function(){
    sizepassword.innerHTML = this.value;
}

function generationpassword(){
    
    let pass = "";

    for(let i = 0, n = charset.length; i < sliderelement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novasenha = pass;

}

function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novasenha);
}

