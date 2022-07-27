/**
 * Declaracion de variables
 */
var operandoa;
var operandob;
var operacion;

/**
 * Eventos de click
 */
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

/**
 * Eventos de click en cientifica
 */
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

/**
 * Eventos de click en inversa
 */
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

cuadrado.onclick = function(){
    resultado.textContent = resultado.textContent  + "x²";
    operandoa = resultado.textContent;
    operacion = "x²";
    resolver();
}

/**
 * elimina el contenido en el contenedor
 * @method limpiar()
 * @return " "
 */
function limpiar(){
    resultado.textContent = "";
}

/**
 * elimina el contenido en el contenedor y reinicializa las variables en cero
 * @method borrartodo()
 * @return " 0 " - cero
 */
function borrartodo(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

/**
 * segun lo que se elija a traves de un evento de click, la operacion entra en un switch y resuelve segun corresponda
 * @method resolver()
 * @param {number} parámetro a - almacena un numero cuando se ingresa la operacion a realizar
 * @param {number} parámetro b - almacena un numero cuando se hace click en el boton " = "
 * @return " res " - resultado
 */
function resolver(){
    var res = 0;
    var aux = 0;
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
            aux = Math.sin(parseFloat(operandoa));
            res = Math.round(aux*100.0)/100.0;
            break;
        case "cos":
            aux = Math.cos(parseFloat(operandoa));
            res = Math.round(aux*100.0)/100.0;
            break;
        case "tg":
            aux = Math.tan(parseFloat(operandoa));
            res = Math.round(aux*100.0)/100.0;
            break;
        case "sign":
            res = Math.sign(parseFloat(operandoa));
            break;
        case "log":
            aux = Math.log10(parseFloat(operandoa));
            res = Math.round(aux*100.0)/100.0;
            break;
        case "ln":
            aux = Math.log(parseFloat(operandoa));
            res = Math.round(aux*100.0)/100.0;
            break;
        case "√":
            aux = Math.sqrt(parseFloat(operandoa));
            res = Math.round(aux*100.0)/100.0;
            break;
        case "%":
            res = parseFloat(operandoa) * (parseFloat(operandob)/100);
            break;
        //+ operaciones inversa
        case "sen⁻¹":
            aux = Math.asin(parseFloat(operandoa));
            res = Math.round(aux*100.0)/100.0;
            break;
        case "cos⁻¹":
            aux = Math.acos(parseFloat(operandoa));
            res = Math.round(aux*100.0)/100.0;
            break;
        case "tg⁻¹":
            aux = Math.atan(parseFloat(operandoa));
            res = Math.round(aux*100.0)/100.0;
            break;
        case "x²":
            res = Math.pow(parseFloat(operandoa), 2);
            break;
    }
    borrartodo();
    resultado.textContent = res;
}

/**
 * Canvas
 */
var event;
var bandera;

/**
 * grafica segun el estado del mouse
 * @method dibujar()
 * @param parámetro a - evento de click segun se presione o no el mouse
 * @return punto
 */
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
    }
}

/**
 * elimina el contenido en el canvas
 * @method borrarGrafico()
 * @return canvas limpio
 */
function borrarGrafico() {
    var canvas = document.getElementById("canvasAdibujar");

    canvas.width = canvas.width;
}
