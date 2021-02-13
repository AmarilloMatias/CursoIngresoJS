function mostrar()
{

	let destino=document.getElementById("txtIdDestino").value;
	let estacion=document.getElementById("txtIdEstacion").value;
	
	switch(estacion)
	{
		case "Invierno":
		switch(destino)
		{
			case "Bariloche":
			mensaje="Se viaja";
			break;
			
			default:
			mensaje="No se viaja";
			break;	
		}
	
	}

	switch(estacion)
	{
		case "Verano":
		switch(destino)
		{
			case "Mar del plata":
			case "Cataratas":
			mensaje="se viaja";
			break;
			
			default:
			mensaje="No se viaja";
			break;	
		}	
	}

	switch(estacion)
	{
		case "Primavera":
		switch(destino)
		{
			case "Bariloche":
			mensaje="No se viaja";
			break;
			
			default:
			mensaje="Se viaja";
			break;	
		}
	}

	switch(estacion)
	{
		case "Otoño":
		switch(destino)
		{
			case "Bariloche":
			case "Cataratas":
			case "Mar del plata":
			case "Cordoba":
			mensaje="Se viaja";
			break;	
		}	
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN

//Amarillo Matias