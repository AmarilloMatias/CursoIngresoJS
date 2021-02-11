function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numero;
	let mensaje;
	numero = Math.floor(Math.random() * 10) + 1;

	if(numero>8)
	{
		mensaje=("EXELENTE = "+ numero)
	}
	else if(numero>3)
	{
		mensaje=("APROBÓ = "+numero)
	}
	else
	{
		mensaje=("Vamos, la proxima se puede = "+numero)
	}

	alert (mensaje);

}//FIN DE LA FUNCIÓN

/*resuelto con un solo alert*/
