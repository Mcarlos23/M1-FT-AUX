const { Stack, Queue } = require("../estructuras")

// Utilizando un STACK, y dado un string, invertir el orden de las palabras.
// OJO: Para este ejercicio NO se pueden usar metodos de Array.
// Deben utilizar solo los metodos provistos por la STACK

// Parametro:
//  (String): string con un texto cargado de palabras
 
// Salida: 
// > string con el mismo texto, el mismo orden, pero con las palabras invertidas. 

// Ejemplo:
//   Colombia Argentina: aibmoloC anitnegrA 
//   Mar Azulado oro : raM odaluzA oro


function efectoEspejo(str){  
//tu codigo aqui
let stack = new Stack();
let reversedString = "";
for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
        while (stack.size() > 0) {
            reversedString += stack.pop();
        } reversedString += str[i];
    } else {
        stack.push(str[i]);
    }
}
while (stack.size() > 0) {
    reversedString += stack.pop();
}
return reversedString;
}




module.exports = {
    efectoEspejo,
   
}