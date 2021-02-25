/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero=0;
	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado=prompt("ingrese un numero: ");
		numeroIngresado=parseInt(numeroIngresado);
		
		
		if(banderaDelPrimero==0)
		{
			numeroMinimo=numeroIngresado;
			numeroMaximo=numeroIngresado;
			banderaDelPrimero=1
		}
		else
		{
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}
		}

		respuesta=prompt("Desea continuar? si o no");

	}
	
	txtIdMaximo.value="maximo: " + numeroMaximo;
	txtIdMinimo.value="minimo: " + numeroMinimo;
}//FIN DE LA FUNCIÓN

//Amarillo Matias