	/*For 10 A-ingrese nombre , sexo , edad 
	(validar que si es mujer debe ser adolescente y si el hombre debe ser niño),
	altura (validar), temperatura corporal
	*/
		function mostrar()
	{

	var nombreIngresado;
	var edadIngresada = 0;
	var sexoIngresado;
	var altura;
	var temperatura = 0;
	var flagAlturaMaxima;
	var nombreDelMasAlto;
	var sexoDelMasAlto;



	var respuesta = "si";


	while(respuesta == "si")
	{
		nombreIngresado = prompt("Ingrese un nombre");
		while(isNaN (nombreIngresado)== false)
			{
			nombreIngresado=prompt("Error, ingrese nombre valido");
			}

		altura = prompt("Ingrese su altura");
		altura=parseInt (altura)
		/*while(isNaN (altura) == false || altura>0.40 || altura<2.40)
		{
			altura = prompt("Error, ingrese una altura valida");
			altura=parseInt(altura);*/
		}
	

			sexoIngresado = prompt("ingrese f ó m (F para femenino o M para Masculino)");
			while(sexoIngresado != "f" && sexoIngresado != "m")
			{
			sexoIngresado = prompt("Error, ingrese sexo valido f ó m (F para femenino o M para Masculino).");
			}

			edadIngresada =prompt("ingrese edad");
			edadIngresada=parseInt(edadIngresada);
			if(sexoIngresado)
			{
				while (sexoIngresado=="m" && edadIngresada>13)
				{
					edadIngresada=prompt("la edad no debe sar mayor a 13 años");
					edadIngresada=parseInt(edadIngresada);
				}
			}
			else
			{
				while(sexoIngresado=="f" && edadIngresada<12 || edadIngresada>18)
				{
					edadIngresada=prompt("la edad debe estar entre 13 a 17 años");
					edadIngresada=parseInt(edadIngresada);
				}
			}
		
		
		temperatura = prompt("Ingrese temperatura corporal");
		temperatura=parseFloat(temperatura);

		while(isNaN(temperatura)==true || temperatura<30 || temperatura>42)
		{
			temperatura= prompt("Error, ingrese temperatura corporal valida");
			temperatura = parseFloat(temperatura);
		}


		respuesta = prompt("Desea continuar");
	}



	}//FIN DE LA FUNCIÓN
	/*For 10 B- necesitamos saber: 
	 --el nombre y el sexo de la persona mas alta ,
	 --de las mujeres el nombre de la mas joven ,
	 --de los hombre el nombre del mas bajito , 
	 ... solo si los hay*/


	//Amarillo Matias