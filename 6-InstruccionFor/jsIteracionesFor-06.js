function mostrar()
{
	let numeroIngresado;
	let contadorDeNumerosPares;
	let contador;

	contadorDeNumerosPares=0;

	numeroIngresado=prompt("ingrese un  numero");
	numeroIngresado=parseInt(numeroIngresado);

	for (contador=1;contador<numeroIngresado;contador++)
	{
		if(contador%2==0)
		{
			console.log(contador);
			contadorDeNumerosPares=contadorDeNumerosPares+1;
		}
		console.log("Total de numeros pares: "+contadorDeNumerosPares);
	}


}//FIN DE LA FUNCIÓN

//Amarillo matias