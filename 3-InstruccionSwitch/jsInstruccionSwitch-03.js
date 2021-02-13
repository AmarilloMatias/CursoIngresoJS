//Amarillo Matias

	function mostrar()
{
	//tomo el mes
	let mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case "Febrero":
			alert("Este mes no tiene mas de 29 dias");
			break;

			default:
			alert("Este mes tiene 30 o mas dias");
			break;
	}


}	