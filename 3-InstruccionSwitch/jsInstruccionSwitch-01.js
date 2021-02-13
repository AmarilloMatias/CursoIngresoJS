function mostrar()
{
	//tomo el mes
	let mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case "Enero":
			alert("que comiences bien el año!!");
			break;

		case "Marzo":
			alert("A clases!!!");
			break;

		case "Julio":
			alert("Se vienen las vacaciones")
			break;

		case "Diciembre":
			alert("Felices fiestas!!!")
			break;

			default:
			break;
	}




	/*if(mesDelAño=="Enero")
		{
			alert ("Que comiences bien el año!!!");
		}
		else
		{
			if(mesDelAño=="Marzo");
			{
				alert("A clase!!!")
			}
			else
			{
			if(mesDelAño=="Julio")
			{
				alert("Se viene las vacaciones")
			}
			else
			{
				if(mesDelAño=="Diciembre")
				{
					alert("Felices fiestas!!!")
				}
			}
		}	

		}*/

}//FIN DE LA FUNCIÓN