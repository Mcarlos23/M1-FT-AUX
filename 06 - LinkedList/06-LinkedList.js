const { LinkedList, Node } = require("../estructuras")
  //agregar el metodo size al prototipo de LinkedList.
  // Este metodo deberia retornar la cantidad de elementos de la lista
  LinkedList.prototype.size=function(){
    return this.len;
  }


// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [3]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [5] --> [4] --> [1]
// ACLARACIÓN: Se debe ordenar la lista original y no una nueva.
LinkedList.prototype.orderList = function () {
    // Tu código aca:
   let current = this.head;
   let current2 = this.head;
   if (this.len <= 1) return;
   let array = [];
   while (current) {
     array.push(current.value);
     current = current.next;
   }
   array.sort((a, b) => b - a);
   let counter = 0;
   while (current2) {
     current2.value = array[counter]; 
     current2 = current2.next;
     counter++;
   }
  };


  //agregar el metodo insert al prototipo de LinkedList.
  // Este metodo deberia recibir una posicion y un valor
  // agregar el valor en la posicion indicada
  //tomar el head como posicion 1  
  // {value 4, next: {value: 3, next: {value: 2, next: {value: 1, next: null}}}}
  // pos > 1
  // 3                   2              1
LinkedList.prototype.insert = function(data,pos) {
  let current = this.head;
  let node = new Node(data);
  if (pos > this.len) return this.add(data);
  if (pos === 0) {
    node.next = this.head;
    this.head = node;
    this.len++;
    return;
  }
  // Dos opcions, counter = 0; or pos > 1 , --;
 // let counter = 0;
  while (pos > 1) {
    current = current.next;
    pos--;
  }
  let aux = current.next;
  current.next = node;
  node.next = aux;
  this.len++;
  return;
}
  




module.exports={
  LinkedList
}



