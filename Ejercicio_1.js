function comprueba_numeros(evt) {
    var nombre = document.getElementById("nombre")
    var apellidos = document.getElementById("apellidos")
    var numeros = /[0-9]/
    if (numeros.test(nombre.value)) {
        alert("El nombre de usuario contiene un numero\nIntentalo de nuevo")
    } else if (numeros.test(apellidos.value)) {
        alert("El apellido contiene un numero\nIntentalo de nuevo")
    }
}