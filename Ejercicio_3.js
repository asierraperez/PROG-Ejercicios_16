function aficiones(evt, contador, valor_selector, selector) {
    if (valor_selector) {
        contador++
    } else if (!valor_selector) {
        contador--
    }

    if (contador > 2) {
        alert("No se puede seleccionar mas de 2 aficiones")
        //valor_selector = 0
        selector.checked = false
        contador--
    }
    return contador

}