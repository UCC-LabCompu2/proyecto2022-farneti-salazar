//declaro variables
var operandoa;
var operandob;
var operacion;

function init(){
    //variables
    var resultado = document.getElementById("resultado");
    var borrar = document.getElementById("borrar")
    var borrartodo = document.getElementById("borrartodo");
    var suma = document.getElementById("sumar")
    var resta = document.getElementById("restar");
    var multiplicacion = document.getElementById("multiplicar");
    var division = document.getElementById("dividir");
    var igual = document.getElementById("igual");
    var volver = document.getElementById("volver");
    var parentesis = document.getElementById("parentesis");
    var punto = document.getElementById("punto");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");
}

//Eventos de click
uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}

dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}

tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}

cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}

cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}

seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}

siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}

ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}

nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}

cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}

borrartodo.onclick = function(e){
    borrartodo();
}

sumar.onclick = function(e){
    resultado.textContent = resultado.textContent  + "+";
    operandoa = resultado.textContent;
    operacion = "+";
}

restar.onclick = function(e){
    resultado.textContent = resultado.textContent  + "-";
    operandoa = resultado.textContent;
    operacion = "-";
}

multiplicar.onclick = function(e){
    resultado.textContent = resultado.textContent  + "×";
    operandoa = resultado.textContent;
    operacion = "×";
}
dividir.onclick = function(e){
    resultado.textContent = resultado.textContent  + "÷";
    operandoa = resultado.textContent;
    operacion = "÷";
}

igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
}

//funciones

function borrartodo(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "×":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "÷":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    borrartodo();
    resultado.textContent = res;
}