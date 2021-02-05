/* Amarillo Matias

1.Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{ 
    let precioUno;
    let precioDos;
    let precioTres;
    let total;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseInt (precioUno)
    precioDos = parseInt (precioDos)
    precioTres = parseInt (precioTres)

    total = precioUno + precioDos + precioTres;

    alert ("El resultado es: " + total);

	
}
function Promedio () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let total;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseInt (precioUno)
    precioDos = parseInt (precioDos)
    precioTres = parseInt (precioTres)

    total = (precioUno + precioDos + precioTres) / 3;

    alert ("El precio promedio es: " + total);
}
function PrecioFinal () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let total;
    let porcentaje;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseInt (precioUno)
    precioDos = parseInt (precioDos)
    precioTres = parseInt (precioTres)

    total = precioUno + precioDos + precioTres;
    porcentaje = total * 21 / 100;

    total = total + porcentaje;

    alert ("El total con IVA es: " + total);
}