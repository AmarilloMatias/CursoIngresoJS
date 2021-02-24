function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	
	contador=0;
	acumulador=0;
	while(contador<5)
	{
		contador=contador+1;
		numeroIngresado=prompt("Ingrese un numero :#"+contador);
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("error, Ingrese un numero :#"+contador);
			numeroIngresado=parseInt(numeroIngresado);
		}
		
		acumulador=acumulador+numeroIngresado;
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;


}//FIN DE LA FUNCIÓN
//Amarillo Matias