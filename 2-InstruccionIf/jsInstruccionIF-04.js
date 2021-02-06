function mostrar()
{
	//tomo la edad  
	
	let edad
	

	 edad = document.getElementById("txtIdEdad").value;
	 edad = parseInt (edad);	

	 /*if(edad<18)
	 {
		if(edad>12)
		{
			alert (" Eres adolescente");
		}
			esto es un  if dentro de otro
	 }*/


	 if(edad>12 && edad<18)
	 {
		alert (" Eres adolescente");
	 }
	 


}//FIN DE LA FUNCIÓN