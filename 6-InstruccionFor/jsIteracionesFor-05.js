function mostrar()
{
	
	let contador;
	let numeroIngresado;
	
	contador=0;

	
	numeroIngresado= prompt("ingrese el número de repeticiones");
	numeroIngresado=parseInt(numeroIngresado);

	for(contador=0;contador<numeroIngresado;contador++)
	{
		if(contador==9)
		{
			break;
		}
	}

	console.log(contador);

}//FIN DE LA FUNCIÓN