// //const idade =22
// const input = require("readline-sync");
// //esta entrada permite que a variavel input ultilize a dependencia a dependencia readline-sync.   
// console.log("seja bem vindo! vamos fazer o seu login")
// const idade = input.question("qual a sua idade?")

// if (idade >=16 && idade < 18) {
//     console.log("Pode entrar. mas não vai beber")
// } else if(idade >= 18){
//     console.log("pode entrar. bora beber!")
// }else {
//     console.log("entrada não permitida")
// };

// serve para importar uma funcionalidade para capitura de informações via console
const input = require("readline-sync")

// imprimir uma mensagem para informar a funcionalidade do sistema
console.log("que seja permitida a entrada de 70 anos em diante")

// criar uma variavel para receber via console a informação a ser validada
const idade = input.question("qual a sua idade?")

// metodologia para validar a informação recebida via console e imprimir o resultado da validação
if (idade>=70){
    console.log ("pode entrar.")

}else {
    console.log ("não pode entrar")
}

console.log("_________________________________________________________________________________________")
console.log("Primiação dos funcionarios conforme o sexo. Para o sexo fiminio, vestido, masculino calça")
const sexo = input.question("Qual o sexo?")
if (sexo == "masculino") {
    console.log("parabéns, você ganhou uma calça")
} else{
    console.log("parabéns, você ganhou um vestido")
}

console.log("permitida a entrada de apenas do seculo feminino.")
const sexo = input.question("qual é o sexo?" )
if (sexo=="")






