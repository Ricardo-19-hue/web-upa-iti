function enviarMensaje(){
    const nombre = document.getElementById("nombre")
    const correo = document.getElementById("correo")
    const mensaje = document.getElementById("mensaje")

    const datos_validados = validarDatos(nombre) && validarDatos(correo) && validarDatos(mensaje)


    if (datos_validados == true){
        alert("Los datos se ingresaron de manera correcta.");
    }else{
        alert("Por favor, Ingrese todos los datos solicitados");
    }
    
    return false
} 

function validarDatos(elemento){
    let validacion = false;
    let valor_elemento = elemento.value;
    if(valor_elemento != "" && valor_elemento != null){
        validacion = true;
    }else{
        mostrarErro(elemento);
    }
    return validacion
}

function mostrarErro(elemento){
    elemento.classList.add('input-error');
}