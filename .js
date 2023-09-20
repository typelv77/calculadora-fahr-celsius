const prompt = require("prompt-sync")();

let fator1
let fator2
let reiniciar=true


function calcular(){
    console.log("Calculadora de Graus!\n")
    console.log("Esolha a operção\n")
    console.log("1 - Celsius (°C) para Fahrenheit (°F)\n")
    console.log("2 - Fahrenheit (°F) para Celsius (°C)\n")
    let nub = parseFloat(prompt())
    console.clear()
    
    if (nub ==1){
       console.log("Digite o valor de Celsius\n")
       fator1 = parseFloat(prompt())
       console.log("Resultado é:\t",(fator1*9/5+32),"\tFahrenheit")
    }
    if (nub==2){
       console.log("digite o valor de Fahrenheit\n")
       fator2=parseFloat(prompt())
       console.log("Resultado é;\t",(fator2-32*5/9),"\tCelsius")
    } 
}

function inicio(){
    while(reiniciar){
        calcular()
        console.log("Deseja reiniciar, escreva true para sim ou falso para não.\n")
        reiniciar=prompt()
    }
}

inicio()
