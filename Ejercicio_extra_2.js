function cambio_ocupaciones(evt, ocup_edad, ocup_selector) {
    for (let i = 0; i < ocup_selector.length; i++) {
        ocup_selector[i].innerHTML = ""

    }
    if (ocup_edad[0].checked) {
        ocup_selector[0].innerHTML = "Estudiante"
        ocup_selector[1].innerHTML = "Universitario"
    }
    if (ocup_edad[1].checked) {
        ocup_selector[0].innerHTML = "Universitario"
        ocup_selector[1].innerHTML = "Trabajador"
        ocup_selector[2].innerHTML = "Parado"
    }
    if (ocup_edad[2].checked) {
        ocup_selector[0].innerHTML = "Parado"
        ocup_selector[1].innerHTML = "Trabajador"
        ocup_selector[2].innerHTML = "Autónomo"
    }
}