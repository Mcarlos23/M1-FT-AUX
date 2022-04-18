
function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"
    let reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] < 10) {
            reversedArray.push(array[i]);
        }
    }
    return reversedArray;
};


function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos
let aux;
let min = 0;
array1.forEach(elem1 => {
    if (elem1 < min || min === 0) {
        min = elem1;
    } array2.forEach(elem2 => {
        if (elem1 === elem2) {
            aux = elem1;
        } if (elem2 < min) {
            min = elem2;
        }
    })
})
if (!aux) return min;
return aux;
};



function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
let newArray = [];
array.forEach(elem => {
    if (Array.isArray(elem)) {
        let suma = 0;
        elem.map(elemento => {
            suma += elemento;
        })
        newArray.push(suma);
    } else {
        newArray.push(elem);
    }
})
return newArray;
};

function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false
    // (8, 4) --> [2, 2, 2, 2]; 
let array = [];
if (numero % 2 !== 0) return false;
for (let i = 0; i < divisor; i++) {
    array.push(numero / divisor);
}
return array;
};


function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if(array[j] > array[j + 1]) {
            let aux = array[j];
            array[j] = array[j + 1];
            array[j + 1] = aux;
        }
    }
}
return [array[0], array[array.length - 1]];
}



module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};