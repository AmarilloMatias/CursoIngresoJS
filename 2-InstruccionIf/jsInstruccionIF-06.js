/*Amarillo Matias*/
function mostrar()
{
	//tomo la edad  
	
	let edad
	

	 edad = document.getElementById("txtIdEdad").value;
	 edad = parseInt (edad);	

	 if(edad < 13)
	 {
		 alert("Eres un niño");
	 }
	 else
	 {
		if(edad >18)
		{
			alert("Eres un adulto");
		}
		else
		{
			alert("Eres un adolescente");
		}
	 }

	 /*
	 


}//FIN DE LA FUNCIÓN