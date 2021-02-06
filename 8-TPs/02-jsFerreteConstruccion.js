/* Amarillo Matias
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let ancho;
    let largo;
    let perimetro;
    let alambre;

    ancho = parseInt(document.getElementById("txtIdAncho").value);
    largo = parseInt(document.getElementById("txtIdLargo").value);
    perimetro = (ancho + largo) * 2;
    alambre = perimetro * 3;

    alert ("Se necesita comprar " + alambre + " metros de alambre");



 
}
function Circulo () 
{
    let perimetro;
    let radio;
    let alambre;

    radio = parseInt(document.getElementById("txtIdRadio").value);
    perimetro = 2 * 3.14 * radio;
    alambre = perimetro * 3;

    alert ("Se necesita comprar " + alambre + " metros de alambre");


}
function Materiales () 
{
	let ancho;
    let largo;
    let superficie;
    let cemento ;
    let cal;


    ancho = parseInt(document.getElementById("txtIdAncho").value);
    largo = parseInt(document.getElementById("txtIdLargo").value);
    superficie = largo * ancho;
    cemento = superficie *2;
    cal= superficie *3;

    alert ("Para un contrapiso de " + superficie + " mts2 necesito comprar " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");

}