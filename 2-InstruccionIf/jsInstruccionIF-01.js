

	/*1. El alumno deberá ingresar:
	Nombre del alumno
	Carrera (Programación, Psicología, Diseño gráfico)
	Estado de la carrera: en curso-abandono-finalizado
	Sexo (femenino-masculino-nobinario)
	Edad (18 o más)
	Nota (entre 1 y 10)

2. Se desconoce la cantidad de alumnos que se ingresaran.
3. Se deberán validar los casos resaltados en negrita.
4. El programa deberá informar a través del documento html:

A. Cantidad total de alumnos de cada carrera.√
B. Cantidad total de mujeres que cursan la carrera de programación.√
C. Cantidad de alumnos no binarios.√
D. Promedio de notas de los alumnos finalizantes.√
E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.X
F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.X
G. ¿Cuál es la carrera que tiene más alumnos?√*/

function mostrar()
{
	
	let nombreAlumno;
	let carrera;
	let estadoCarrera;
	let sexo;
	let edad;
	let nota;
	let contadorProgramacion=0;
	let contadorPsicologia=0;
	let contadorDiseño=0;
	let contadorFemeninoProg=0;
	let contadorNobinario=0;
	let contadorDeNotasFinalizados=0;
	let acumuladorDeNotasFinalizados=0;
	let carreraMasAlumnos;
	let promedioDeNotasFinalizados;

	let respuesta;

	respuesta="si";

	while(respuesta=="si")
	{
		nombreAlumno=prompt("Ingrese su nombre:");

		carrera=prompt("Ingrese la carrera: programacion o psicologia o diseño grafico");
		while (isNaN(carrera)==false || carrera!="programacion" && carrera!="psicologia" && carrera!="diseño grafico")
		{
			carrera=prompt("Error, ingrese opcion correcta: programacion o psicologia o diseño grafico");
		}

		switch(carrera)
		{
			case "programacion":
			if(contadorProgramacion==0)
			{
				contadorProgramacion=contadorProgramacion+1;
			}	
			else
			{
				contadorProgramacion=contadorProgramacion+1;
			}
			break;

			case "psicologia":
			if(contadorPsicologia==0)
			{
				contadorPsicologia=contadorPsicologia+1;
			}
			else
			{
				contadorPsicologia=contadorPsicologia+1;
			}
			break;

			case "diseño grafico":
			if(contadorDiseño==0)
			{
				contadorDiseño=contadorDiseño+1;
			}	
			else
			{
				contadorDiseño=contadorDiseño+1;
			}
			break;

		}

		estadoCarrera=prompt("Ingrese el estado de la Carrera: en curso o abandono o finalizado");
		while (isNaN(estadoCarrera)==false || estadoCarrera!="en curso" && estadoCarrera!="abandono" && estadoCarrera!="finalizado")
		{
			estadoCarrera=prompt("Error, ingrese el estado de la Carrera: en curso o abandono o finalizado");
		}

		sexo=prompt("Ingrese sexo valido: femenino o masculino o nobinario");
		while(isNaN(sexo)==false || sexo!="femenino"&& sexo!="masculino" && sexo!="nobinario")
		{
			sexo=prompt("Error, ingrese sexo valido: femenino o masculino o nobinario");
		}

		switch(sexo)
		{
			case "femenino":
			if(carrera=="programacion")
			{
				contadorFemeninoProg=contadorFemeninoProg+1;
			}
			break;

			case "nobinario":
			{
				contadorNobinario=contadorNobinario+1;
			}	
			break;
		}

		edad=prompt("Ingrese su edad:");
		edad=parseInt(edad);
		while(isNaN(edad)==false && edad<18)
		{
			edad=prompt("Error, ingrese edad valida");
			edad=parseInt(edad);
		}

		nota=prompt("Ingrese la nota: del 1 al 10");
		nota=parseInt(nota);
		while(isNaN(nota)==false && nota<1 && nota>10)
		{
			nota=prompt("Error, ingrese nota valida: del 1 al 10");
			nota=parseInt(nota);
		}

		if (estadoCarrera=="finalizado")
		{
			contadorDeNotasFinalizados=contadorDeNotasFinalizados+1;
			acumuladorDeNotasFinalizados=acumuladorDeNotasFinalizados+nota;
		}

		respuesta=prompt("Desea continuar? si o no");





	}//fin while respuesta "si"

	if(contadorProgramacion>contadorPsicologia && contadorProgramacion>contadorDiseño)
	{
		carreraMasAlumnos="Programacion";
	}
	if(contadorPsicologia>contadorDiseño && contadorPsicologia>contadorProgramacion)
	{
		carreraMasAlumnos="Psicologia";
	}
	if(contadorDiseño>contadorProgramacion && contadorDiseño>contadorPsicologia)
	{
		carreraMasAlumnos="Diseño Grafico";
	}

	promedioDeNotasFinalizados=acumuladorDeNotasFinalizados/contadorDeNotasFinalizados;

	console.log("la cantidad de alumnos de programacion es:" + contadorProgramacion); //A
	console.log("la cantidad de alumnos de psicologia es: " + contadorPsicologia); //A
	console.log("la cantidad de alumnos de diseño grafico es: " + contadorDiseño); //A
	console.log("La cantidad de mujeres que cursan programacion es: "+ contadorFemeninoProg); //B
	console.log("La cantidad de alumnos nobinarios es: " + contadorNobinario); // C
	console.log("La carrera con mas alumnos es: " + carreraMasAlumnos); //G
	console.log("El promedio de notas de los alumnos que finalizaron la carrera es: " + promedioDeNotasFinalizados);



}//fin funcion
		



/*//tomo la edad  
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if(edad==15)
	{
		alert ("Niña Bonita");
	}*/