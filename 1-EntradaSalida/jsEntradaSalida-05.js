/*Amarillo Matias
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	
function mostrar()
{	
	let nombre;

	let edad;

	let apellido;

	nombre = document.getElementById("txtIdNombre").value;

	edad = document.getElementById("txtIdEdad").value;

	apellido = prompt("ingrese su apellido");

	alert ( apellido + " usted se llama " + nombre + " y tiene " + edad + " años ");
	
	//alert(`Usted se llama ${nombre} y tiene ${edad} años`)

}
/*
bis : 
 se debe mostrar un mensaje :

 "Perez , usted se llama jose y tiene 66 años"
se debe optener el apellido , de la manera que puedan
*/



//A- edad y nombre , informar el nombre de la persona mas vieja y la mas joven
{

	let nombre;
	let nombreDelMasViejo;
	let nombreDelMasJoven;
	let edad;
	let edadMaxima;
	let edadMinima;
	let respuesta;
	let banderaDelPrimero;

	banderaDelPrimero=0;
	respuesta = "si";

	while(respuesta == "si")
	{ 
		nombre=prompt("Ingrese su nombre: ");
		while(isNaN(nombre)==false)
		{
			nombre=prompt("Error, ingrese nombre valido");
		}

		edad=prompt("ingrese su edad: ");
		edad=parseInt(edad);
		while(isNaN(edad)==true || edad <0 || edad>130)
		{
			edad=prompt("Ingrese edad valida");
			edad=parseInt(edad);
		

			if(banderaDelPrimero==0)
			{
				edadMinima=edad;
				edadMaxima=edad;
				nombreDelMasJoven=nombre;
				nombreDelMasViejo=nombre;
				banderaDelPrimero=1;
			}
			else
			{
				if(edad<edadMinima)
				{
					edadMinima=edad;
					nombreDelMasJoven=nombre;
				}
				if(edad>edadMaxima)
				{
					edadMaxima=edad;
					nombreDelMasViejo=nombre;
				}
			}	
		}	
					
		respuesta=prompt("desea continuar? si o no");

	}

	alert("El mayor es: " + nombreDelMasViejo + " cuya edad es: " + edadMaxima);
	alert("El menor es: " + nombreDelMasJoven + " cuya edad es: " + edadMinima);

}
//Amarillo Matias