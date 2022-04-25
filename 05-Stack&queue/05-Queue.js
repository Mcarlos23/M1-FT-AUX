const { Queue } = require("../estructuras")
// Implementar la función controlAcces: a partir de una Queue que va a recibir como paráemtro que tiene
// en cada posición un objeto que va a representar a una persona y tiene la siguiente forma:
// {
//   fullname: "Franco Etcheverri",
//   age: 26,
//   ticket: {
//     number: 1,
//     event: "Tomorrowland"
//   }
// }
// La idea es ir verificando uno a uno si la primer persona de la cola tiene los requisitos necesarios para
// ingresar al evento correspondiente (también recibido por parámetro). Los requisitos que debe cumplir son:
// - Ser mayor de 18 años (18 inclusive es válido)
// - Tener un ticket que corresponda con el evento (prop event de ticket)
// - Que no haya ingresado ya otra persona al evento con ese mismo número de ticket
// Finalmente la función debe devolver un arreglo con todos los nombres de las personas que pudieron ingresar
// Importante!: Aquellas personas que no cumplan con los requisitos para ingresar deben ser removidos de la cola 

// FIFO, shift, push(), size;
var controlAcces = function(queue, event){
    // Tu código aca:
  let cache = [];
  let counter = 0;
  let size = queue.size();
  let valido = [];
  while (counter < size) {
    let aux = queue.dequeue();
    if (aux.age >= 18 && aux.ticket.event === event) {
      if (!cache.includes(aux.ticket.number)) {
        cache.push(aux.ticket.number);
        valido.push(aux.fullname);
        queue.enqueue(aux);
      }
    }
    counter++;
  }
  return valido;
  };
      
  

  module.exports = {
    controlAcces,
   
}