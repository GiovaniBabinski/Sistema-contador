var btnCalcular = document.querySelector("#btnIniciar")

function iniciarContagem() {
    var btn1 = document.querySelector("#num1")
    var btn2 = document.querySelector("#num2")
    var btn3 = document.querySelector("#num3")
    var msg = document.querySelector(".mens")


    if (btn1.value.length == 0 || btn2.value.length == 0 || btn3.value.length == 0) {
        msg.innerHTML = "<p id='msgError'><strong>Preencha todos os campos!</strong></p>"
        msg.style.background = "red"
        msg.style.color = "white"
        msg.classList.add("block")

    } else {
        var inicio = Number.parseInt(btn1.value)
        var fim = Number.parseInt(btn2.value)
        var passo = Number.parseInt(btn3.value)

        if (!msg.classList.contains("block")) {

            for (cont = inicio; cont <= fim; cont += passo) {
                msg.innerHTML += cont + "👉"
                msg.classList.add("block")
            }
        }

        if (!msg.classList.contains("block")) {
            if (cont > fim) {
                for (cont = inicio; cont >= fim; cont -= passo) {
                    msg.innerHTML += cont + "👉"
                    msg.classList.add("block")
                }
            }
        }
        if (inicio > 100 || fim > 100) {
            alert("O limite dos caracteres é 100")
            msg.innerHTML = ""
        }

    }
}


btnCalcular.addEventListener("click", iniciarContagem)
