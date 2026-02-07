function enviarMensaje(){

    const nombre = document.getElementById("nombre").value
    const correo = document.getElementById("correo").value
    const mensaje = document.getElementById("mensaje").value

    const datos_validados = validarDatos(nombre) && validarDatos(correo) && validarDatos(mensaje)

    if (datos_validados == true){
        alert("Los datos se ingresaron de manera correcta");
    }else
        alert("Por favor, ingrese los datos")
    return false;
}

function validarDatos(valor){
    let validacion = false;
    if(valor != "" && valor != null){
        validacion = true;

    }

    return validacion
}