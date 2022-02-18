function cambio_aficiones(evt, edad, aficiones) {
    for (let i = 0; i < aficiones.length; i++) {
        aficiones[i].disabled = false
    }

    if (edad[0].checked) {
        aficiones[0].nextSibling.textContent = "Fútbol"
        aficiones[1].nextSibling.textContent = "Música"
        aficiones[2].nextSibling.textContent = "Videojuegos"
        aficiones[3].nextSibling.textContent = "Lectura"
    }
    if (edad[1].checked) {
        aficiones[0].nextSibling.textContent = "Fútbol"
        aficiones[1].nextSibling.textContent = "Cine"
        aficiones[2].nextSibling.textContent = "Ciclismo"
        aficiones[3].nextSibling.textContent = "Videojuegos"
    }
    if (edad[2].checked) {
        aficiones[0].nextSibling.textContent = "Fórmula 1"
        aficiones[1].nextSibling.textContent = "Senderismo"
        aficiones[2].nextSibling.textContent = "Cine"
        aficiones[3].nextSibling.textContent = "Lectura"
    }

}