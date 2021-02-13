function mostrar()
{
	let destino=document.getElementById("txtIdDestino").value;
	let estacion=document.getElementById("txtIdEstacion").value;
	let tarifa=15000;
	let precioFinal;
	let descuento;
	let precioTotal;

	switch(estacion)
	{
		case "Invierno":
		switch(destino)
		{
			case "Bariloche":
			descuento=20;
			break;

			case "Mar del plata":
				descuento=-20;
				break;
			
			case "Cordoba":
			case "Cataratas":
				descuento=-10;
				break;	
			
		}

	}

	switch(estacion)
	{
		case"Verano":
		switch(destino)
		{
			case"Bariloche":
			descuento=-20;
			break;

			case"Mar del plata":
			descuento=20;
			break;

			default:
			descuento=10;
			break;
		}
	}

	switch(estacion)
	{
		case"Otoño":
		case "Primavera":
		switch(destino)
		{
			case"Cordoba":
			descuento=0;
			break;

		default:
			descuento=10;
			break;
		}
	}
		
	precioFinal=tarifa*descuento/100;
	precioTotal=tarifa+precioFinal;
	alert("El precio final de su viaje es: $ "+precioTotal);

}
//FIN DE LA FUNCIÓN

//Amarillo Matias