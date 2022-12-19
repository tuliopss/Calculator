
function insert(num) {
   var number = document.getElementById('resultado').value
   document.getElementById('resultado').value = number + num;

}

function erase() {
    document.getElementById('resultado').value = ""
}

function calculate() {
    var result = document.getElementById('resultado').value;
    
    if (result == 0) {
        document.getElementById('resultado').value = 'EMPTY'
    } else {
        document.getElementById('resultado').value = eval(result)
    }
}




function soma(a, b) {
    return a + b;

}

function subtracao(a, b) {
    return a - b;

}

function divisao(a, b) {
    return a / b;

}

function multiplicacao(a, b) {
    return a * b;
}

