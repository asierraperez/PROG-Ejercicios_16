function comprueba_dni(evt) {
    var dni = document.getElementById("nif")
    if (dni.value.length < 9) {
        alert("En el campo dni hay menos de 9 caracteres")
    }

}