function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numero;

	numero = Math.floor(Math.random() * 10) + 1;

	if(numero>8)
	{
		alert("EXELENTE = "+ numero)
	}
	else if(numero>3)
	{
		alert("APROBÓ = "+numero)
	}
	else
	{
		alert("Vamos, la proxima se puede = "+numero)
	}
}//FIN DE LA FUNCIÓN