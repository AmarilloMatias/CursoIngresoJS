// Amarillo Matias
/*Realizar el algoritmo que permita ingresar el nombre de un estudiante, la edad (validar),
el sexo (validar) y la nota del final (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de varones aprobados
b) El promedio de notas de los menores de edad
c) El promedio de notas de los adolescentes.
d) El promedio de notas de los mayores
f) El promedio de notas por sexo masculino y femenino*/

function mostrar()
{
	
	let nombre;
	let edad;
	let sexo;
	let nota;
	let respuesta;

	respuesta="si";

	while(respuesta=="si")
	{
		nombre=prompt("Ingrese nombre:");

		edad=prompt("Ingrese edad:");
		edad=parseInt(edad);
		while(isNaN(edad)==true || edad>100 || edad<13)
		{
			edad=prompt("Error, ingrese edad valida:");
			edad=parseInt(edad);
		}

		sexo=prompt("Ingese sexo: f o m ");
		while(isNaN(sexo)==false || sexo!="f" && sexo!="m")
		{
			sexo=prompt("Error, ingrese sexo valido: f o m ");
		}

		nota=prompt("ingrese nota del final:");
		while(isNaN(nota)==true || nota<1 || nota>10)
		{
			nota=prompt("Error, ingrese nota valida:");
		}

		respuesta=prompt("desea continuar: si o no");

		
	}

}//FIN DE LA FUNCIÓN