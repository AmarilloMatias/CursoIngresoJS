function mostrar()
{
	let destinoIngresado =document.getElementById("txtIdDestino").value;
	

	switch(destinoIngresado)
	{
		case "Bariloche":
			alert("OESTE");
			break;

		case "Mar del plata":
			alert("ESTE");
			break;

		case "Ushuaia":
			alert("SUR")
			break;

		case "Cataratas":
			alert("NORTE")
			break;

			default:
			break;
		

	}
	
}//FIN DE LA FUNCIÓN

// Amarillo Matias

//E mdp O bariloche. S ushuaia y N cataratas
