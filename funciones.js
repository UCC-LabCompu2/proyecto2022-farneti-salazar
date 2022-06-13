//declaro variables
var operandoa;
var operandob;
var operacion;

//Eventos de click
uno.onclick = function(){
    resultado.textContent = resultado.textContent  + "1";
}

dos.onclick = function(){
    resultado.textContent = resultado.textContent  + "2";
}

tres.onclick = function(){
    resultado.textContent = resultado.textContent  + "3";
}

cuatro.onclick = function(){
    resultado.textContent = resultado.textContent  + "4";
}

cinco.onclick = function(){
    resultado.textContent = resultado.textContent  + "5";
}

seis.onclick = function(){
    resultado.textContent = resultado.textContent  + "6";
}

siete.onclick = function(){
    resultado.textContent = resultado.textContent  + "7";
}

ocho.onclick = function(){
    resultado.textContent = resultado.textContent  + "8";
}

nueve.onclick = function(){
    resultado.textContent = resultado.textContent  + "9";
}

cero.onclick = function(){
    resultado.textContent = resultado.textContent  + "0";
}

sacartodo.onclick = function(){
    borrartodo();
}

sumar.onclick = function(){
    resultado.textContent = resultado.textContent  + "+";
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}

restar.onclick = function(){
    resultado.textContent = resultado.textContent  + "-";
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}

multiplicar.onclick = function(){
    resultado.textContent = resultado.textContent  + "×";
    operandoa = resultado.textContent;
    operacion = "×";
    limpiar();
}

dividir.onclick = function(){
    resultado.textContent = resultado.textContent  + "÷";
    operandoa = resultado.textContent;
    operacion = "÷";
    limpiar();
}

igual.onclick = function(){
    operandob = resultado.textContent;
    resolver();
}

//+ eventos de click en cientifica
//constantes
pi.onclick = function(){
    resultado.textContent = resultado.textContent  + "3.14";
}

euler.onclick = function(){
    resultado.textContent = resultado.textContent  + "2.71";
}

//funciones
factorial.onclick = function(){
    resultado.textContent = resultado.textContent  + "!";
    operandoa = resultado.textContent;
    operacion = "!";
    resolver();
}

seno.onclick = function(){
    resultado.textContent = resultado.textContent  + "sen";
    operandoa = resultado.textContent;
    operacion = "sen";
    resolver();
}

coseno.onclick = function(){
    resultado.textContent = resultado.textContent  + "cos";
    operandoa = resultado.textContent;
    operacion = "cos";
    resolver();
}

tangente.onclick = function(){
    resultado.textContent = resultado.textContent  + "tg";
    operandoa = resultado.textContent;
    operacion = "tg";
    resolver();
}

signo.onclick = function(){
    resultado.textContent = resultado.textContent  + "sign";
    operandoa = resultado.textContent;
    operacion = "sign";
    resolver();
}

logaritmo.onclick = function(){
    resultado.textContent = resultado.textContent  + "log";
    operandoa = resultado.textContent;
    operacion = "log";
    resolver();
}

lognatural.onclick = function(){
    resultado.textContent = resultado.textContent  + "ln";
    operandoa = resultado.textContent;
    operacion = "ln";
    resolver();
}

raiz.onclick = function(){
    resultado.textContent = resultado.textContent + "√";
    operandoa = resultado.textContent;
    operacion = "√";
    resolver();
}

porcentaje.onclick = function(){
    resultado.textContent = resultado.textContent  + "%";
    operandoa = resultado.textContent;
    operacion = "%";
    limpiar();
}

//+ eventos de click en inversa
invseno.onclick = function(){
    resultado.textContent = resultado.textContent  + "sen⁻¹";
    operandoa = resultado.textContent;
    operacion = "sen⁻¹";
    resolver();
}

invcoseno.onclick = function(){
    resultado.textContent = resultado.textContent  + "cos⁻¹";
    operandoa = resultado.textContent;
    operacion = "cos⁻¹";
    resolver();
}

invtangente.onclick = function(){
    resultado.textContent = resultado.textContent  + "tg⁻¹";
    operandoa = resultado.textContent;
    operacion = "tg⁻¹";
    resolver();
}

exp.onclick = function(){
    resultado.textContent = resultado.textContent + "10ⁿ";
    operandoa = resultado.textContent;
    operacion = "10ⁿ";
    resolver();
}

en.onclick = function(){
    resultado.textContent = resultado.textContent + "eⁿ";
    operandoa = resultado.textContent;
    operacion = "eⁿ";
    resolver();
}

cuadrado.onclick = function(){
    resultado.textContent = resultado.textContent  + "x²";
    operandoa = resultado.textContent;
    operacion = "x²";
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
            res = Math.sin(parseFloat(operandoa).toFixed(5));
            break;
        case "cos":
            res = Math.cos(parseFloat(operandoa).toFixed(5));
            break;
        case "tg":
            res = Math.tan(parseFloat(operandoa).toFixed(5));
            break;
        case "sign":
            res = Math.sign(parseFloat(operandoa));
            break;
        case "log":
            res = Math.log10(parseFloat(operandoa).toFixed(5));
            break;
        case "ln":
            res = Math.log(parseFloat(operandoa).toFixed(5));
            break;
        case "√":
            res = Math.sqrt(parseFloat(operandoa));
            break;
        case "%":
            res = parseFloat(operandoa) * (parseFloat(operandob)/100);
            break;
        //+ operaciones inversa
        case "sen⁻¹":
            res = Math.asin(parseFloat(operandoa));
            break;
        case "cos⁻¹":
            res = Math.acos(parseFloat(operandoa));
            break;
        case "tg⁻¹":
            res = Math.atan(parseFloat(operandoa));
            break;
        case "10ⁿ":
            res = Math.pow(10, parseFloat(operandoa));
            break;
        case "eⁿ":
            res =  Math.exp(parseFloat(operandoa));
            break;
        case "x²":
            res = Math.pow(parseFloat(operandoa), 2);
            break;
    }
    borrartodo();
    resultado.textContent = res;
}
var event;
var bandera;
function dibujar(event) {
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function() {bandera=true};
    canvas.onmouseup = function() {bandera=false};

    if (bandera) {
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill;
    }

}
function borrarGrafico() {
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}
    
