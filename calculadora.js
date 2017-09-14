var buttons = document.getElementsByTagName('button');
var nums = [];
var result = 0;

limpar();
addMouseEvent(buttons);
addDisplayEvent();


function addDisplayEvent() {
    document.getElementById('display').setAttribute('onkeydown','return displayKey(event)');
}

function displayKey(event) {
    //console.log(event.keyCode);
    //key +
    if(event.keyCode == "187" || event.keyCode == "107" || (event.shiftKey && event.keyCode == "61")) {
        somar();
        return false;
    }
    //key -
    if(event.keyCode == "189" || event.keyCode == "109" || event.keyCode == "173") {
        subtrair();
        return false;
    }
    //key * 
    if(event.keyCode == "56" || event.keyCode == "106") {
        multiplicar();
        return false;
    }
    //key /
    if(event.keyCode == "111" || event.keyCode == "191") {
        dividir();
        return false;
    }
    //key enter
    if(event.keyCode == "13") {
        resultado();
        return false;
    }
    //key delete
    if(event.keyCode == "46") {
        limpar();
        return false;
    }
}

function addMouseEvent(buttons) {
    for(index = 0; index < buttons.length; ++index) {
        //console.log(buttons[index].innerHTML);
        var tipo = buttons[index].innerHTML;
        switch(tipo) {
            case '+':
                buttons[index].setAttribute('onclick', "somar()");
                break;
            case '-':
                buttons[index].setAttribute('onclick', "subtrair()");
                break;
            case '*':
                buttons[index].setAttribute('onclick', "multiplicar()");
                break;
            case '/':
                buttons[index].setAttribute('onclick', "dividir()");
                break;
            case 'C':
                buttons[index].setAttribute('onclick', "limpar()");
                break;
            case '=':
                buttons[index].setAttribute('onclick', "resultado()");
                break;
            default:
                buttons[index].setAttribute('onclick', "addNum('"+tipo+"')");
                break;
        }
    }
}

function somar() {
    nums.push(document.getElementById('display').value);
    nums.push("+");
    limpar();
}

function subtrair() {
    nums.push(document.getElementById('display').value);
    nums.push("-");
    limpar();
}

function multiplicar() {
    nums.push(document.getElementById('display').value);
    nums.push("*");
    limpar();
}

function dividir() {
    nums.push(document.getElementById('display').value);
    nums.push("/");
    limpar();
}

function resultado() {
    operacao = nums.pop();
    num1 = parseFloat(nums.shift());
    num2 = parseFloat(document.getElementById('display').value);
    switch(operacao) {
        case '+':
            result = num1+num2;
            break;
        case '-':
            result = num1-num2;
            break;
        case '*':
            result = num1*num2;
            break;
        case '/':
            result = num1/num2;
            break;
    }
    document.getElementById('display').value = result;
    document.getElementById('display').focus();
}

function addNum(num) {
    document.getElementById('display').value += num;
    document.getElementById('display').focus();
}

function limpar() {
    document.getElementById('display').value = "";
    document.getElementById('display').focus();
}
