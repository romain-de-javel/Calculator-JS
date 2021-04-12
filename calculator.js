var sign = '';
var temp = 0;

function res() {
    document.getElementById("dot").disabled = false;
}

function addnumber(value) {
    document.getElementById("input").value += value;
    if (value === '.')
        document.getElementById("dot").disabled = true;
}

function add() {
    sign = document.getElementById("plus").value;
    temp = parseFloat(document.getElementById("input").value);
    document.getElementById("input").value = "";
    document.getElementById("dot").disabled = false;
}

function multi() {
    sign = document.getElementById("mult").value;
    temp = parseFloat(document.getElementById("input").value);
    document.getElementById("input").value = "";
    document.getElementById("dot").disabled = false;

}

function div() {
    sign = '/';
    temp = parseFloat(document.getElementById("input").value);
    document.getElementById("input").value = "";
    document.getElementById("dot").disabled = false;

}

function minu() {
    sign = '-';
    temp = parseFloat(document.getElementById("input").value);
    document.getElementById("input").value = "";
    document.getElementById("dot").disabled = false;

}

function calculate() {
    switch (sign) {
        case '+':
            document.getElementById("input").value = temp + parseFloat(document.getElementById("input").value);
            break;
        case '-':
            document.getElementById("input").value = temp - parseFloat(document.getElementById("input").value);
            break;
        case '*':
            document.getElementById("input").value = temp * parseFloat(document.getElementById("input").value);
            break;
        case '/':
            document.getElementById("input").value = temp / parseFloat(document.getElementById("input").value);
            break;
    }
}