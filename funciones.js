//declaro variables
var operandoa;
var operandob;
var operacion;

function init(){
    //variables estandar
    var resultado = document.getElementById("resultado");
    var borrar = document.getElementById("borrar")
    var sacartodo = document.getElementById("borrartodo");
    var suma = document.getElementById("sumar")
    var resta = document.getElementById("restar");
    var multiplicacion = document.getElementById("multiplicar");
    var division = document.getElementById("dividir");
    var igual = document.getElementById("igual");
    var volver = document.getElementById("volver");
    var parentesis = document.getElementById("parentesis");
    var punto = document.getElementById("punto");
    const uno = document.getElementById("uno");
    const dos = document.getElementById("dos");
    const tres = document.getElementById("tres");
    const cuatro = document.getElementById("cuatro");
    const cinco = document.getElementById("cinco");
    const seis = document.getElementById("seis");
    const siete = document.getElementById("siete");
    const ocho = document.getElementById("ocho");
    const nueve = document.getElementById("nueve");
    const cero = document.getElementById("cero");

    //+ variables cientifica
    const pi = document.getElementById("pi");
    const euler = document.getElementById("euler");
    var factorial = document.getElementById("factorial");
    var seno = document.getElementById("seno");
    var coseno = document.getElementById("coseno");
    var tangente = document.getElementById("tangente");
    var signo = document.getElementById("signo");
    var invseno = document.getElementById("invseno");
    var invcoseno = document.getElementById("invcoseno");
    var invtangente = document.getElementById("invtangente");
    var logaritmo = document.getElementById("logaritmo");
    var lognatural = document.getElementById("lognatural");
    var raiz = document.getElementById("raiz");
    var porcentaje = document.getElementById("porcentaje");
    var exponencial = document.getElementById("exp");
    var en = document.getElementById("en");
    var cuadrado = document.getElementById("cuadrado");
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

sacartodo.onclick = function(e){
    borrartodo();
}

sumar.onclick = function(e){
    resultado.textContent = resultado.textContent  + "+";
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}

restar.onclick = function(e){
    resultado.textContent = resultado.textContent  + "-";
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}

multiplicar.onclick = function(e){
    resultado.textContent = resultado.textContent  + "×";
    operandoa = resultado.textContent;
    operacion = "×";
    limpiar();
}

dividir.onclick = function(e){
    resultado.textContent = resultado.textContent  + "÷";
    operandoa = resultado.textContent;
    operacion = "÷";
    limpiar();
}

igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
}

//+ eventos de click en cientifica
//constantes
pi.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3.14";
}

euler.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2.71";
}

//funciones
factorial.onclick = function(e){
    resultado.textContent = resultado.textContent  + "!";
    operandoa = resultado.textContent;
    operacion = "!";
    resolver();
}

seno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "sen";
    operandoa = resultado.textContent;
    operacion = "sen";
    resolver();
}

coseno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "cos";
    operandoa = resultado.textContent;
    operacion = "cos";
    resolver();
}

tangente.onclick = function(e){
    resultado.textContent = resultado.textContent  + "tg";
    operandoa = resultado.textContent;
    operacion = "tg";
    resolver();
}

signo.onclick = function(e){
    resultado.textContent = resultado.textContent  + "sign";
    operandoa = resultado.textContent;
    operacion = "sign";
    resolver();
}

logaritmo.onclick = function(e){
    resultado.textContent = resultado.textContent  + "log";
    operandoa = resultado.textContent;
    operacion = "log";
    resolver();
}

lognatural.onclick = function(e){
    resultado.textContent = resultado.textContent  + "ln";
    operandoa = resultado.textContent;
    operacion = "ln";
    resolver();
}

raiz.onclick = function(e){
    resultado.textContent = resultado.textContent + "√";
    operandoa = resultado.textContent;
    operacion = "√";
    resolver();
}

porcentaje.onclick = function(e){
    resultado.textContent = resultado.textContent  + "%";
    operandoa = resultado.textContent;
    operacion = "%";
    limpiar();
}

//+ eventos de click en inversa
//cambiar nombre a sen-1, cos-1, tg-1
invseno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "invseno";
    operandoa = resultado.textContent;
    operacion = "invseno";
    resolver();
}

invcoseno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "invcoseno";
    operandoa = resultado.textContent;
    operacion = "invcoseno";
    resolver();
}

invtangente.onclick = function(e){
    resultado.textContent = resultado.textContent  + "invtangente";
    operandoa = resultado.textContent;
    operacion = "invtangente";
    resolver();
}

exp.onclick = function (e){
    resultado.textContent = resultado.textContent + "exp";
    operandoa = resultado.textContent;
    operacion = "exp";
    resolver();
}

en.onclick = function(e){
    resultado.textContent = resultado.textContent + "en";
    operandoa = resultado.textContent;
    operacion = "en";
    resolver();
}

cuadrado.onclick = function(e){
    resultado.textContent = resultado.textContent  + "cuadrado";
    operandoa = resultado.textContent;
    operacion = "cuadrado";
    resolver();
}

//funciones
function limpiar(){
    resultado.textContent = "";
}

function borrartodo(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver(){
    var res = 0;
    switch(operacion){
        //operaciones estandar
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
        //+ operaciones cientifica
        case "!":
            let answer = 1;
            if (parseFloat(operandoa) == 0 || parseFloat(operandoa) == 1){
                return answer;
            }else{
                for(var i = parseFloat(operandoa); i >= 1; i--){
                    answer = answer * i;
                }
            }
            res = answer;
            break;
        case "sen":
            res = Math.sin(parseFloat(operandoa));
            break;
        case "cos":
            res = Math.cos(parseFloat(operandoa));
            break;
        case "tg":
            res = Math.tan(parseFloat(operandoa));
            break;
        case "sign":
            res = Math.sign(parseFloat(operandoa));
            break;
        case "log":
            res = Math.log10(parseFloat(operandoa));
            break;
        case "ln":
            res = Math.log(parseFloat(operandoa));
            break;
        case "√":
            res = Math.sqrt(parseFloat(operandoa));
            break;
        case "%":
            res = parseFloat(operandoa) * (parseFloat(operandob)/100);
            break;
        //+ operaciones inversa
        case "invseno":
            res = Math.asin(parseFloat(operandoa));
            break;
        case "invcoseno":
            res = Math.acos(parseFloat(operandoa));
            break;
        case "invtangente":
            res = Math.atan(parseFloat(operandoa));
            break;
        case "exp":
            res = Math.pow(10, parseFloat(operandoa));
            break;
        case "en":
            res =  Math.exp(parseFloat(operandoa));
            break;
        case "cuadrado":
            res = Math.pow(parseFloat(operandoa), 2);
            break;
    }
    borrartodo();
    resultado.textContent = res;
}

