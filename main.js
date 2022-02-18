function main() {

    var btn_enviar = document.getElementById("envio")
    btn_enviar.addEventListener("click", (evt) => {
        comprueba_numeros(evt)
        comprueba_dni(evt)
    })
}
main()