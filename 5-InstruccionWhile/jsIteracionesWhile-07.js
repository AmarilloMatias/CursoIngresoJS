/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let respuesta ="si";
	let numero;
	let acumulador = 0;
	let contador = 0;
	let promedio;

	
	while (respuesta == "si")
	{	

		numero=prompt("Ingrese un numero:");
		numero=parseInt(numero);
		
		while(isNaN(numero) == true)
		{
		numero=prompt("Error: inserte un numero ");
		}

		acumulador= acumulador+numero;
		contador=contador+1;
		
		respuesta=prompt("Quiere ingresar otro numero, si o no? ");
		
	}
	
	
	promedio=acumulador/contador;
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;


}//FIN DE LA FUNCIÓN


//esta mal!!!!