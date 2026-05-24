function login(){

    let usuarioAprobado = "allis";

    let contraAprobada = "1234";

    let usuario = document.getElementById("usuario").value;

    let contrasena = document.getElementById("contrasena").value;

    if(

        usuario == usuarioAprobado &&

        contrasena == contraAprobada

    ){

        window.location.href = "opciones.html";

    }else{

        alert("Usuario o contraseña incorrectos");

    }
}
<<<<<<< HEAD
=======

>>>>>>> 62637ac (Corregir rutas para Render)
