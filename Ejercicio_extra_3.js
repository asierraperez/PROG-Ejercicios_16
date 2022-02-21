function aleatorio(evt, dni_random, edad_random, selector_random, ocupacion_random) {

    var n_dni
    var dni = ""
    var Mayus = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "X", "Y", "Z"]
    var letra_random = Math.floor(Math.random() * 28)

    for (let i = 0; i < 8; i++) {
        n_dni = Math.floor(Math.random() * 10)
        dni = dni + n_dni
    }
    dni = dni + Mayus[letra_random]
    dni = String(dni)
    console.log(dni)
    dni_random.value = dni


    var array_nombres = ["Álvaro", "Ana", "Rocío", "Iago", "Adrián", "Pablo", "Marta", "Marina"]
    var array_apellidos = ["Sierra", "Pérez", "Vázquez", "Pais", "Arce", "Rodríguez", "Abalde", "Vila", "García", "Alonso"]
    var nombre_random = Math.floor(Math.random() * array_nombres.length)
    var apellido_random1 = Math.floor(Math.random() * array_apellidos.length)
    var apellido_random2 = Math.floor(Math.random() * array_apellidos.length)

    var nombre = array_nombres[nombre_random]
    nombre = String(nombre)
    var apellidos = array_apellidos[apellido_random1] + " " + array_apellidos[apellido_random2]
    apellidos = String(apellidos)
    console.log(nombre + " " + apellidos)
    document.getElementById("nombre").value = nombre
    document.getElementById("apellidos").value = apellidos

    var selector_edad_random = Math.floor(Math.random() * edad_random.length)
    document.getElementsByClassName("radio")[selector_edad_random].checked = true
    //edad_random[selector_edad_random].checked = true
    cambio_aficiones(evt, edad_random, selector_random)
    cambio_ocupaciones(evt, edad_random, ocupacion_random)

    var aux_cuenta = 0
    var n_aficiones = Math.floor(Math.random() * (3 - 1) + 1)
    console.log(n_aficiones)
    for (let i = 0; i < n_aficiones; i++) {
        selector_random[Math.floor(Math.random() * 4)].checked = true;
        aux_cuenta++
    }

    var estado = document.getElementById("estado")
    estado[Math.floor(Math.random() * (estado.length - 1) + 1)].selected = true

    ocupacion_random[Math.floor(Math.random() * (ocupacion_random.length - 1) + 1)].selected = true
    return aux_cuenta









}