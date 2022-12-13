const formulario_login = document.querySelector(".formulario__login");
const formulario_register = document.querySelector(".formulario__register");
const contenedor_login_register = document.querySelector(".contenedor__login-register");
const caja_trasera_login = document.querySelector(".caja__trasera-login");
const caja_trasera_register = document.querySelector(".caja__trasera-register");
const button_registrarse = document.getElementById("button__registrarse")

document.getElementById("button__registrarse").addEventListener("click", register);
document.getElementById("button__inisiar-sesion").addEventListener("click", iniciarSesion);
window.addEventListener("resize", anchoPagina);


function anchoPagina(){
   if (window.innerWidth > 850) { 
    formulario_login.style.display = "block";
    formulario_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.opacity = "0";
        caja_trasera_register.style.opacity = "1";
        contenedor_login_register.style.left = "-680px";
        contenedor_login_register.style.top = "-175px";
   
        
}
else {
    caja_trasera_login.style.display = "block";
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.opacity = "0";
    caja_trasera_register.style.opacity = "1";
    contenedor_login_register.style.top = "-340px";
    contenedor_login_register.style.left = "-335px";
    

}
}


function iniciarSesion() {
    if (window.innerWidth > 850) {
    formulario_register.style.display = "none";
   
    contenedor_login_register.style.left = "-670px";
    contenedor_login_register.position = "relative"
    formulario_login.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
    }
    else {
        formulario_register.style.display = "none";
        contenedor_login_register.style.top = "-340px";
        contenedor_login_register.position = "relative"
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    }
}


function register() {
    if (window.innerWidth > 850) {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "-350px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
}

else  {
    formulario_register.style.display = "block";
    contenedor_login_register.style.top = " -40px";
    contenedor_login_register.position = "relative"
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
}
}