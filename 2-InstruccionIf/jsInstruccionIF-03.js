// Amarillo Matias
function mostrar()
{
	//tomo la edad  
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

	 /* if(edad>17)
	 {
		 alert ("Eres mayor de edad");
		
	 }
		else 
	 {
			alert ("eres menor de edad");
	 }
	 */

}//FIN DE LA FUNCIÓN