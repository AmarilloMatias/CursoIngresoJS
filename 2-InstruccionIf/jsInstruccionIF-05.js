function mostrar()
{
	//tomo la edad  
	let edad
	

	 edad = document.getElementById("txtIdEdad").value;
	 edad = parseInt (edad);	

	 if(edad>17)
	 {
		 alert("NO es adolescente");
	 }

	 if(edad<13)
	 {
		 alert("NO es adolescente");
	 }

	 /* if(edad>17||edad<13)
	 {
		 alert("No es adolescente");
		 								//esto seria lo ideal con formula
	 }*/

}//FIN DE LA FUNCIÓN