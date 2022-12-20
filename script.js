
function insert(num) {
   let number = document.getElementById('resultado').value
   document.getElementById('resultado').value = number + num;

}

function erase() {
    document.getElementById('resultado').value = ""
}

function backspace() {
    var field = document.getElementById('resultado').value;
    document.getElementById('resultado').value = field.substring(0, field.length -1);
}

function calculate() {
    var result = document.getElementById('resultado').value;
    
    if (result == 0) {
        document.getElementById('resultado').value = 'EMPTY';
    } 
    else {
        document.getElementById('resultado').value = eval(result)
    }
}

function negative() {
    let number = document.getElementById('resultado').value
    document.getElementById('resultado').value = number.replace(number, -number)

    
}

function potentional() {
    let number = document.getElementById('resultado').value;
    document.getElementById('resultado').value = number*number;
}






