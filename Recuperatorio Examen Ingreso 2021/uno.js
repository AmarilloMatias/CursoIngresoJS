/*Una software factory registra la siguiente informacion de sus empleados:
Nombre,
edad (validar),
sexo (masculino - femenino - no binario),
puesto (programador - analista - Qa),
sueldo (entre 15000 y 70000).
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.

a) promedio de sueldos para cada puesto √
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000*/
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let puesto;
	let sueldo;
	let acumuladorSueldoAnalista=0;
	let acumuladorSueldoProgramador=0;
	let acumuladorSueldoQa=0;
	let contadorAnalista=0;
	let contadorProgramador=0;
	let contadorQa=0;
	let promedioProgramador;
	let promedioAnalista;
	let promedioQa;
	let banderaMayorSueldo=0;
	let sexoMayorSueldo;
	let sueldoMasAlto=0;
	let sueldoFemeninoMasAlto=0;
	let nombreFemenimoMasAlto;
	let contadorProgramadoresNobinario=0;

	let respuesta="si";

	while(respuesta=="si")
	{
		
		nombre=prompt("Ingrese nombre:");
		while(isNaN(nombre)==false)
		{
			nombre=prompt("Error, ingrese nombre");
		}

		edad=prompt("ingrese edad:");
		edad=parseInt(edad);
		while(isNaN(edad)==true || edad<17 || edad>100)
		{
			edad=prompt("Error, ingrese edad valida");
			edad=parseInt(edad);
		}

		sexo=prompt("ingrese sexo: femenino , masculino , no binario");
		while(isNaN(sexo)==false || sexo!="femenino" && sexo!="masculino" && sexo!="no binario")
		{
		sexo=prompt("Error, ingrese sexo valido: femenino , masculino , no binario");
		}

		puesto=prompt("Ingrese puesto: programador, analista o Qa");
		while(isNaN(puesto)==false || puesto!="programador" && puesto!="analista" && puesto!="qa")
		{
			puesto=prompt("Error, ingrese puesto valido: programador, analista o Qa");
		}

		sueldo=prompt("ingrese sueldo: entre 15000 y 70000");
		sueldo=parseInt(sueldo);
		while(isNaN(sueldo)==true || sueldo<14999 || sueldo>70001)
		{
			sueldo=prompt("Error, ingrese sueldo valido: entre 15000 y 70000");
			sueldo=parseInt(sueldo);
		}

		switch(puesto) //a) promedio de sueldos para cada puesto
		{
			case "programador":
			acumuladorSueldoProgramador=acumuladorSueldoProgramador+sueldo;
			contadorProgramador=contadorProgramador+1;
			break;

			case"analista":
			acumuladorSueldoAnalista=acumuladorSueldoAnalista+sueldo;
			contadorAnalista=contadorAnalista+1;
			break;

			case"qa":
			acumuladorSueldoQa=acumuladorSueldoQa+sueldo;
			contadorQa=contadorQa+1;
			break;
		}
			
		if(banderaMayorSueldo==0 || sueldoMasAlto<sueldo)  //b) el sexo del que percibe el mayor sueldo
		{
			banderaMayorSueldo=1;
			sexoMayorSueldo=sexo;
			sueldoMasAlto=sueldo;
		}
		else
		{
			if(sueldoMasAlto<sueldo)
			{
			sexoMayorSueldo=sexo;
			}
			else
			{
				if(sexo=="femenino" && sueldoFemeninoMasAlto<sueldo) //c) el nombre del empleado femenino con mas sueldo
				{
					sueldoFemeninoMasAlto=sueldo;
					nombreFemenimoMasAlto=nombre;
				}
				else
				{
					nombreFemenimoMasAlto="no hay femenino";
				}
			}
		}
		if(sexo=="no binario" && sueldo>20000 && sueldo<55000) //d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000
		{
			contadorProgramadoresNobinario=conatdorProgramadoresNobinario+1;
		}
			


		respuesta=prompt("desea continuar: si o no ");
	}	// fin while

		if(contadorProgramador!=0)
		{
			promedioProgramador=acumuladorSueldoProgramador/contadorProgramador;
		}
		else
		{
			promedioProgramador="No hubo programador";
		}
		if(contadorAnalista!=0)
		{
			promedioAnalista=acumuladorSueldoAnalista/contadorAnalista;
		}
		else
		{
			promedioAnalista="No hubo analista";
		}
		if(contadorQa!=0)
		{
			promedioQa=acumuladorSueldoQa/contadorQa;
		}
		else
		{
			promedioQa="No hubo Qa";
		}

		if(contadorProgramadoresNobinario==0)
		{
			contadorProgramadoresNobinario="No hubo Programadores no binarios";	
		}	
		
	
	

//a) promedio de sueldos para cada puesto
console.log("El promedio de sueldo del puesto programador es: " + promedioProgramador);
console.log("El promedio de sueldo del puesto analista es: " + promedioAnalista);
console.log("El promedio de sueldo del puesto Qa es: " + promedioQa);
console.log("El sexo con mayor sueldo es" + sexoMayorSueldo);
console.log("El nombre del empleado femenino con mas sueldo es: " + nombreFemenimoMasAlto);
 console.log("La cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 "+contadorProgramadoresNobinario );

} // fin funcion

