function enviarMensaje(){

    const nombre = document.getElementById("nombre").value
    const correo = document.getElementById("correo").value
    const mensaje = document.getElementById("mensaje").value

    console.log("Datos ingresados: ", nombre, correo, mensaje);

    return false;
}
