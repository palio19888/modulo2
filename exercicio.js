// calculadora de media 5 notas


const cadastro = require("readline-sync")

const estudante = cadastro.question("informe o nome do estudanrte:");
const primeiraNota = parsefloat(cadastro.question ("insira nota um"))
const segundaNota = parsefloat(cadastro.question("insira nota dois"))
const terceiraNota = parsefloat(cadastro.question("insira nota tres"))
const quartaNota = parsefloat(cadastro.question("insira nota quatro"))
const quintaNota = parsefloat(cadastro.question("insira nota cinco"))
const media = (primeiraNota + segundaNota + terceiraNota + quartaNota + quintaNota)/5


console.log("a media de" + estudante + "é" + media)

if (media >= 0 &&media < 4){
    console.log("você está reprovado")
}else if(media >= 4 && media < 7){
    console.log("você está em recuperação")
} else if(media >= 7 && <= 10) {
    console.log("você foi aprovadooo!!")


} else {
    console.log("verifique se digitou a nota corretamente")
}