function adicionarCaracter(number) {

    verificaçaoError(number)

    if (document.querySelector(".display").value.length === 0 && !Number(number)) {
        return
    }

    const display = document.querySelector(".display").value

    document.querySelector(".display").value = display + number

}
function limpaTela() {

    document.querySelector(".display").value = ""

}
function calcular() {

    const display = document.querySelector(".display").value

    document.querySelector(".display").value = eval(display)

}
function inverterSinal() {
    const display = document.querySelector(".display").value

    if (Number(document.querySelector(".display").value)) {

        document.querySelector(".display").value = display * -1
    }

}
function deletarUltimaLetra() {

    document.querySelector(".display").value
        = document.querySelector(".display").value.slice(0, -1)

}
function verificaçaoError(numberDigit) {


    let ultimoValorNoInputResultado = document.querySelector(".display").value
    [document.querySelector(".display").value.length - 1]

    if (
        ultimoValorNoInputResultado && !Number(ultimoValorNoInputResultado) &&
        !Number(numberDigit) &&
        ultimoValorNoInputResultado != 0 &&
        numberDigit != 0
    ) {
        deletarUltimaLetra();
    }
}
