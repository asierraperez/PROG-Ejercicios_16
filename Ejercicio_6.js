function reset_form(evt, reset_aficiones, reset_contador) {
    for (let i = 0; i < reset_aficiones.length; i++) {
        reset_aficiones[i].nextSibling.textContent = ""
        reset_aficiones[i].disabled = true
    }
    reset_contador = 0
    return reset_contador
}