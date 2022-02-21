function ejercicio_extra(evt, aux_error_dni) {
    var error_anterior = aux_error_dni
    var aux_nif = document.getElementById("nif")
    var aux_dni = aux_nif.value.toLowerCase()
    var error_anterior
    var body = document.getElementsByTagName("body")
    var error = false
    var numeros = /[0-9]/
    var letras = /[a-z]/
    if (aux_dni.length == 9) {
        for (let i = 0; i < aux_dni.length; i++) {
            if (i + 1 == aux_dni.length) {
                if (!error && numeros.test(aux_dni[i])) {
                    error = true
                    console.log("di error " + (i + 1))
                }
            } else
                if (!error && letras.test(aux_dni[i])) {
                    error = true
                    console.log("di error " + (i + 1))
                }
        }
    }
    if (error && !error_anterior) {
        var explicacion_dni = document.createElement("div")
        explicacion_dni.innerText = "El DNI no coincide con el patrón requerido"
        body[0].appendChild(explicacion_dni)
        error_anterior = true
        return error_anterior
    } else if (!error && error_anterior) {
        var ultimo_hijo = body[0].lastChild
        body[0].removeChild(ultimo_hijo)
        error_anterior = false
        return error_anterior
    } else if (error && error_anterior) {
        error_anterior = true
        return error_anterior
    } else {
        error_anterior = false
        return error_anterior
    }





}