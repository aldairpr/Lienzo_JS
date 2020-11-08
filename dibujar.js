/*                 C O L O R E S                    */
var b_color = document.getElementById("boton_color");
b_color.addEventListener("input", paletaDeColores);
/*b_color.addEventListener("change", paletaDeColores);*/

function paletaDeColores(event) 
{
    console.log(event.target.value);
    colorcito = event.target.value;
}
/*                                                   */


/*         A N C H O  D E  L I N E A                  */
var texto = document.getElementById("ancho_linea");
var boton_ancho = document.getElementById("boton_ancho");
var ancho = 3;
boton_ancho.addEventListener("click", anchoLinea);

function anchoLinea()
{
    ancho = parseInt(texto.value)
}
/*                                                   */


/*               D I B U J A R                     */
var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d");
var colorcito;
var dibujar = false;
document.addEventListener("mousedown", dibujarDown);
document.addEventListener("mouseup", dibujarUp);
document.addEventListener("mousemove", dibujarMove);

function dibujarLinea(color, ancho, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = ancho;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarDown(evento1)
{
    xi = evento1.offsetX;
    yi = evento1.offsetY;
    dibujar = true;
}

function dibujarMove(evento2)
{
    if (dibujar == true)
    {
        dibujarLinea(colorcito, ancho, xi, yi, evento2.offsetX, evento2.offsetY, papel);
        xi = evento2.offsetX;
        yi = evento2.offsetY;
    }
}

function dibujarUp(evento3)
{
    if (dibujar == true)
    {
        dibujarLinea(colorcito, ancho, xi, yi, evento3.offsetX, evento3.offsetY, papel);
        dibujar = false;
    }
}
/*                                                   */


/*              CREAR HOJA NUEVA                     */
var borrar = document.getElementById("boton_borrar");
borrar.addEventListener("click", borrarDibujo );
function borrarDibujo()
{
    papel.clearRect(0, 0, cuadro.width, cuadro.height);
}