/* Amarillo Matias
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let nuevosueldo;
	let aumento;
	let porcentaje

	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
 
	porcentaje = prompt("Ingrese porcentaje a calcular" );

	percentaje = parseInt (porcentaje);

	aumento = sueldo * porcentaje / 100; 

	nuevosueldo = sueldo + aumento;

	document.getElementById("txtIdResultado").value = nuevosueldo;


}


//Las consignas del 9 y 10 bis es agregarle que el % lo indica el ususario, hay que pedirselo