function mostrar()
{
	let numeroIngresado;
	let numeroAnterior;

	numeroIngresado=prompt("Ingrese numero");
	//for desde el 2 hasta uno antes del numero ingresado
	for(numeroAnterior=2;numeroAnterior<numeroIngresado;numeroAnterior++)
	{
		if(numeroIngresado% numeroAnterior==0)
		{
			break;
		}
	}
	if(numeroAnterior==numeroIngresado)
	{
		alert("es primo");
	}
	else
	{
		alert("No es primo");
	}
	

}//FIN DE LA FUNCIÓN

//Amarillo Matias