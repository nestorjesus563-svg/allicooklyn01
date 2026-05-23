function entrar(){

    let usuario = document.getElementById("usuario").value;

    let clave = document.getElementById("clave").value;

    if(usuario == "admin" && clave == "1234"){

        window.location.href = "admin.html";

    }else{

        alert("Usuario o contraseña incorrectos");
    }
}