/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");
	
	

	while (sexoIngresado != "f" && sexoIngresado !="m")
	{
		sexoIngresado=prompt("sexo no valido. Ingrese f ó m .");
	}
	switch(sexoIngresado)
	{
		case "f":
		sexoIngresado="Femenino";
		break;
		
		case "m":
		sexoIngresado= "Masculino";
		break;	
	}

	
	txtIdSexo.value=sexoIngresado;



}//FIN DE LA FUNCIÓN

//Amarillo Matias