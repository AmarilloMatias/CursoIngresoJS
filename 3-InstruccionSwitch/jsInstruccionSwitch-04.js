//Amarillo Matias

function mostrar()
{
	//tomo el mes
	let mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":	
			alert("TIene 30 dias");
			break;

		case "Febrero":
			alert("Tiene 28 dias");
			break;	 

		default:
			alert("Tiene 31 dias");
			break;
	}


}	