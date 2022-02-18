function max_caracteres(evt, n_caracteres, texto) {
    console.log(n_caracteres.length)
    if (n_caracteres.length > 250) {
        alert("Numero maximo de caracteres alcanzada")
        n_caracteres = n_caracteres.substring(0, n_caracteres.length - 1)
        texto.value = n_caracteres
    }

}