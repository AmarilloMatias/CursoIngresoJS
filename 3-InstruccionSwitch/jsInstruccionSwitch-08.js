function mostrar()

{
	let destinoIngresado =document.getElementById("txtIdDestino").value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":	
			alert("Frio");
			break;

		case "Mar del plata":
		case "Cataratas":	
			alert("Calor");
			break;

			default:
			break;
	
	}
	
}//FIN DE LA FUNCIÓN

// Amarillo Matias

