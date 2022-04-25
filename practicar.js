
function balanced(exp) {
  // Tu código aca:
  var cantidad = 0;
  var parentesis = [];

  for (var i = 0; i < exp.length; i++) {
    if (exp[i] == ")" || exp[i] == ""){
      parentesis.push(exp[i]);
       cantidad++;
  }
  }
    console.log(parentesis + "-");
    if (parentesis[0] == ")") return 5;
    if (cantidad % 2 == 0) return 0;
    if (cantidad % 2 != 0) return 1
} 