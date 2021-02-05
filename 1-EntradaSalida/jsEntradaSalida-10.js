/* Amarillo Matias
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
	let importe;
	let nuevoimporte;
	let descuento;
	let porcentaje

	importe = parseFloat(document.getElementById("txtIdImporte").value);

	porcentaje = prompt ("Ingrese el porcentaje a calcular")

	porcentaje = parseInt (porcentaje)

	descuento = importe * porcentaje / 100; 

	nuevoimporte = importe - descuento;

	document.getElementById("txtIdResultado").value = nuevoimporte;
}


//Las consignas del 9 y 10 bis es agregarle que el % lo indica el ususario, hay que pedirselo