let array = [0, 0, 0, 0];

function zero() {
    document.querySelector("#tela").innerHTML += 0;
}
function um() {
    document.querySelector("#tela").innerHTML += 1;
}
function dois() {
    document.querySelector("#tela").innerHTML += 2;
}
function tres() {
    document.querySelector("#tela").innerHTML += 3;
}
function quatro() {
    document.querySelector("#tela").innerHTML += 4;
}
function cinco() {
    document.querySelector("#tela").innerHTML += 5;
}
function seis() {
    document.querySelector("#tela").innerHTML += 6;
}
function sete() {
    document.querySelector("#tela").innerHTML += 7;
}
function oito() {
    document.querySelector("#tela").innerHTML += 8;
}
function nove() {
    document.querySelector("#tela").innerHTML += 9;
}
function ponto() {
    document.querySelector("#tela").innerHTML += ".";
}
//=====================================================
function soma() {
    array[0] = document.querySelector("#tela").innerHTML;
    array[0] = parseFloat(array[0]);
    array[1] = "+";
    document.querySelector("#tela").innerHTML = "";
    document.querySelector("#hist").innerHTML = array[0] + " + ";
    document.getElementById("hist").style.animation = "diminuindo 1s linear forwards";

}

function subtracao() {
    array[0] = document.querySelector("#tela").innerHTML;
    array[0] = parseFloat(array[0]);
    array[1] = "-";
    document.querySelector("#tela").innerHTML = "";
    document.querySelector("#hist").innerHTML = array[0] + " - ";
    document.getElementById("hist").style.animation = "diminuindo 1s linear forwards";
}

function multiplicacao() {
    array[0] = document.querySelector("#tela").innerHTML;
    array[0] = parseFloat(array[0]);
    array[1] = "*";
    document.querySelector("#tela").innerHTML = "";
    document.querySelector("#hist").innerHTML = array[0] + " * ";
    document.getElementById("hist").style.animation = "diminuindo 1s linear forwards";
}

function divisao() {
    array[0] = document.querySelector("#tela").innerHTML;
    array[0] = parseFloat(array[0]);
    array[1] = "/";
    document.querySelector("#tela").innerHTML = "";
    document.querySelector("#hist").innerHTML = array[0] + " / ";
    document.getElementById("hist").style.animation = "diminuindo 1s linear forwards";
}

function porcentagem() {
    array[0] = document.querySelector("#tela").innerHTML;
    array[0] = parseFloat(array[0]);
    array[1] = "%";
    document.querySelector("#tela").innerHTML = "";
    document.querySelector("#hist").innerHTML = array[0] + " % ";
    document.getElementById("hist").style.animation = "diminuindo 1s linear forwards";
}
//=====================================================
function limpar() {
    document.querySelector("#tela").innerHTML = "";
    document.querySelector("#hist").innerHTML = "";
    array = [0, 0, 0, 0, 0];
    document.getElementById("hist").style.animation = "";
    document.getElementById("tela").style.animation = "";
}

function resultado() {
    array[2] = document.querySelector("#tela").innerHTML;
    array[2] = parseFloat(array[2]);

    if (array[1] == "+") {
        array[3] = array[0] + array[2];
    } else if (array[1] == "-") {
        array[3] = array[0] - array[2];
    } else if (array[1] == "*") {
        array[3] = array[0] * array[2];
    } else if (array[1] == "/") {
        array[3] = array[0] / array[2];
    } else if (array[1] == "%") {
        array[3] = (array[0] / 100) * array[2];
    }

    result = array[3].toFixed(2);

    document.querySelector("#tela").innerHTML = result;
    document.getElementById("tela").style.animation = "opacidade 5s linear forwards";
    document.querySelector("#hist").innerHTML += array[2] + " = " + result;
    document.getElementById("hist").style.animation = "diminuindo 1s linear forwards";
}

function tema() {
    if (document.getElementById("tema").innerHTML == "Tema 2") {
        document.getElementById("bg_1").style.backgroundColor = "pink";
        document.getElementById("bg_2").style.backgroundColor = "#B076B4";
        document.getElementById("background").style.backgroundColor = "#E6C3E8";
        document.getElementById("calculadora").style.backgroundColor = "#C4ABC6";
        document.getElementById("teclado").style.backgroundColor = "#E7BFE0";
        document.getElementById("eu_que_criei").style.backgroundColor = "#671F5B";
        document.getElementById("tema").style.backgroundColor = "black";
        document.getElementById("tema").innerHTML = "Tema 1";
    } else {
        document.getElementById("bg_1").style.backgroundColor = "black";
        document.getElementById("bg_2").style.backgroundColor = "rgb(63, 168, 157)";
        document.getElementById("background").style.backgroundColor = "rgb(146, 192, 212)";
        document.getElementById("calculadora").style.backgroundColor = "rgb(78, 133, 142)";
        document.getElementById("teclado").style.backgroundColor = "rgb(28, 104, 104)";
        document.getElementById("eu_que_criei").style.backgroundColor = "black";
        document.getElementById("tema").style.backgroundColor = "rgb(164, 30, 177)";
        document.getElementById("tema").innerHTML = "Tema 2";
    }
}
