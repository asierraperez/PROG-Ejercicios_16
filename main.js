function main() {

    var contador = 0
    var btn_enviar = document.getElementById("envio")
    var selector_aficiones = document.getElementsByClassName("check")
    var selector_ocupacion = document.getElementById("ocupacion")
    var edad = document.getElementsByClassName("radio")
    var comentarios = document.getElementById("comentarios")
    var btn_reset = document.getElementById("reset")
    var btn_random = document.getElementById("random")
    var error_dni = false
    var dni = document.getElementById("nif")
    for (let i = 0; i < selector_aficiones.length; i++) {
        selector_aficiones[i].nextSibling.textContent = ""
        selector_aficiones[i].disabled = true
    }

    btn_enviar.addEventListener("click", (evt) => {
        comprueba_numeros(evt)
        comprueba_dni(evt)

    })
    selector_aficiones[0].addEventListener("change", (evt) => {
        contador = aficiones(evt, contador, selector_aficiones[0].checked, selector_aficiones[0])
    })
    selector_aficiones[1].addEventListener("change", (evt) => {
        contador = aficiones(evt, contador, selector_aficiones[1].checked, selector_aficiones[1])
    })
    selector_aficiones[2].addEventListener("change", (evt) => {
        contador = aficiones(evt, contador, selector_aficiones[2].checked, selector_aficiones[2])
    })
    selector_aficiones[3].addEventListener("change", (evt) => {
        contador = aficiones(evt, contador, selector_aficiones[3].checked, selector_aficiones[3])
    })

    edad[0].addEventListener("change", (evt) => {
        cambio_aficiones(evt, edad, selector_aficiones)
        cambio_ocupaciones(evt, edad, selector_ocupacion)
    })
    edad[1].addEventListener("change", (evt) => {
        cambio_aficiones(evt, edad, selector_aficiones)
        cambio_ocupaciones(evt, edad, selector_ocupacion)
    })
    edad[2].addEventListener("change", (evt) => {
        cambio_aficiones(evt, edad, selector_aficiones)
        cambio_ocupaciones(evt, edad, selector_ocupacion)
    })

    comentarios.addEventListener("keyup", (evt) => {
        max_caracteres(evt, comentarios.value, comentarios)

    })

    btn_reset.addEventListener("click", (evt) => {

        contador = reset_form(evt, selector_aficiones, contador)
    })

    dni.addEventListener("change", (evt) => {
        comprueba_dni(evt)
        error_dni = ejercicio_extra(evt, dni, error_dni)
    })

    btn_random.addEventListener("mousedown", (evt) => {
        contador = aleatorio(evt, dni, edad, selector_aficiones, selector_ocupacion)
    })

}

main()