function mostrar()
{
	let edad;
	 let estado;

	 edad = document.getElementById("txtIdEdad").value;
	 estado = document.getElementById("estadoCivil").value;

	 if(edad>17 && estado=="Soltero")
	 {
		 alert("Es soltero y no de menor de edad");
	 }


}//FIN DE LA FUNCIÓN