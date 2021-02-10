function mostrar()
{
	/*let edad

	 edad = document.getElementById("txtIdEdad").value;
	 edad = parseInt (edad);	

	 if(edad<13)
	 {
		 alert("Eres un niño");
	 }
	 else
	 {
		if(edad>18)
		{
			alert("Eres un adulto");
		}
		else
		{
			alert("Eres un adolescente");
		}
	 }*/
	
	 let edad;
	 let estado;

	 edad = document.getElementById("txtIdEdad").value;
	 estado = document.getElementById("estadoCivil").value;

	 if(edad<18 && estado!="Soltero")
	 {
		 alert("Es muy pequeño para no ser soltero");
	 }

}
//FIN DE LA FUNCIÓN