function main() {

    var contador = 0
    var btn_enviar = document.getElementById("envio")
    var selector = document.getElementsByClassName("check")
    var edad = document.getElementsByClassName("radio")
    var comentarios = document.getElementById("comentarios")
    var btn_reset = document.getElementById("reset")

    for (let i = 0; i < selector.length; i++) {
        selector[i].nextSibling.textContent = ""
        selector[i].disabled = true
    }

    btn_enviar.addEventListener("click", (evt) => {
        comprueba_numeros(evt)
        comprueba_dni(evt)

    })
    selector[0].addEventListener("change", (evt) => {
        contador = aficiones(evt, contador, selector[0].checked, selector[0])
    })
    selector[1].addEventListener("change", (evt) => {
        contador = aficiones(evt, contador, selector[1].checked, selector[1])
    })
    selector[2].addEventListener("change", (evt) => {
        contador = aficiones(evt, contador, selector[2].checked, selector[2])
    })
    selector[3].addEventListener("change", (evt) => {
        contador = aficiones(evt, contador, selector[3].checked, selector[3])
    })

    edad[0].addEventListener("change", (evt) => {
        cambio_aficiones(evt, edad, selector)
    })
    edad[1].addEventListener("change", (evt) => {
        cambio_aficiones(evt, edad, selector)
    })
    edad[2].addEventListener("change", (evt) => {
        cambio_aficiones(evt, edad, selector)
    })

    comentarios.addEventListener("keyup", (evt) => {
        max_caracteres(evt, comentarios.value, comentarios)

    })

    btn_reset.addEventListener("click", (evt) => {

        contador = reset_form(evt, selector, contador)
    })

}

main()