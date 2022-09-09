function animarRelogio() {
    let atual = new Date()

    let hora = atual.getHours()
    let minutos = atual.getMinutes()
    let segundos = atual.getSeconds()

    h.textContent = zeroEsquerda(hora)
    m.textContent = zeroEsquerda(minutos)
    s.textContent = zeroEsquerda(segundos)

    setTimeout("animarRelogio()", 1000)

}

function data() {

    let atual = new Date()

    let dia = atual.getDay()
    let mes = atual.getMonth() + 1
    let ano = atual.getFullYear()

    d.textContent = diaSemana(dia)
    mN.textContent = zeroEsquerda(mes)
    mS.textContent = mesAno(mes)
    a.textContent = ano


}