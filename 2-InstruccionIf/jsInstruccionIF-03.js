// Amarillo Matias

function mostrar()
{
	let edad
	let edadMayor
	let edadMenor

	 edad = document.getElementById("txtIdEdad").value;
	 edad = parseInt (edad);	
	 edadMayor = edad>17;
	 edadMenor = edad<18;

	 if(edadMayor)
	 	
	 {
		alert (" Eres mayor de edad");
	 }

	 if(edadMenor)

	 {
		alert (" Eres menor de edad");
	 }

}//FIN DE LA FUNCIÓN



//tomo la edad  
	