/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	


	while(isNaN(numeroIngresado) ==true || numeroIngresado>1 && numeroIngresado>9)
	{
		numeroIngresado=prompt("Error, ingrese numero entre 0 y 9");	
			
	}

	txtIdNumero.value=numeroIngresado;

}//FIN DE LA FUNCIÓN

//Amarillo Matias