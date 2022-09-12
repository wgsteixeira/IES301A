function zeroEsquerda(x) {
    let valor = new String(x)

    if (valor.length == 1) valor = "0" + valor

    return valor
}

function diaSemana(dia) {

    if (dia == 0) dia = "Domingo"
    if (dia == 1) dia = "Segunda-Feira"
    if (dia == 2) dia = "Terça-Feira"
    if (dia == 3) dia = "Quarta-Feira"
    if (dia == 4) dia = "Quinta-Feira"
    if (dia == 5) dia = "Sexta-Feira"
    if (dia == 6) dia = "Sabado"


    return dia
}

function mesAno(mes) {

    if (mes == 1) mes = "Janeiro"
    if (mes == 2) mes = "Fevereiro"
    if (mes == 3) mes = "Março"
    if (mes == 4) mes = "Abril"
    if (mes == 5) mes = "Maio"
    if (mes == 6) mes = "Junho"
    if (mes == 7) mes = "Julho"
    if (mes == 8) mes = "Agosto"
    if (mes == 9) mes = "Setembro"
    if (mes == 10) mes = "Outubro"
    if (mes == 11) mes = "Novembro"
    if (mes == 12) mes = "Dezembro"

    return mes
}
