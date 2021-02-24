/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoBruto;
	let numeroLegajo;
	let nacionalidad;

	edadIngresada = prompt("Ingrese su edad")

	while(isNaN(edadIngresada)==true || edadIngresada<18 || edadIngresada>91)
	{
		edadIngresada=prompt("Error, ingrese su edad");
	}
	
	sexoIngresado = prompt("Ingrese su sexo: M o F");

	while(sexoIngresado!="f" && sexoIngresado!="m")
	{
		sexoIngresado=prompt("Error, ingrese F o M");
	}
	switch(sexoIngresado)
	{
		case "f":
			sexoIngresado="Femenino";
			break;
		case "m":
			sexoIngresado="Masculino";
			break;	
	}

	estadoCivilIngresado=prompt("Ingrese estado civil segun el numero que corresponda: 1 para soltero, 2 para casado, 3 para divorciado y 4 para viudo");
	estadoCivilIngresado=parseInt(estadoCivilIngresado);

	while(isNaN(estadoCivilIngresado)==true || estadoCivilIngresado<1 || estadoCivilIngresado>4)
	{
	estadoCivilIngresado= prompt("Error: opcion incorrecta, intente nuevamente: 1 para soltero, 2 para casado, 3 para divorciado y 4 para viudo");
	estadoCivilIngresado=parseInt(estadoCivilIngresado);
	}
	switch(estadoCivilIngresado)
	{
		case 1:
		estadoCivilIngresado = "Soltero";
		break;
		
		case 2:
		estadoCivilIngresado = "Casado";
		break;
		
		case 3:
		estadoCivilIngresado = "Divorciado";
		break;
		
		case 4:
		estadoCivilIngresado = "Viudo";
		break;	
	}

	sueldoBruto=prompt("Ingrese su sueldo bruto por favor");
	sueldoBruto=parseInt(sueldoBruto);

	while(isNaN(sueldoBruto) == true || sueldoBruto <8000)
	{
		sueldoBruto=prompt("Error: ingrese sueldo bruto");
		sueldoBruto=parseInt(sueldoBruto);
	}

	numeroLegajo=prompt("Ingrese Numero de legajo, numérico de 4 cifras, sin ceros a la izquierda.");
	numeroLegajo=parseInt(numeroLegajo);
	while(isNaN(numeroLegajo) == true || numeroLegajo<1000 || numeroLegajo>9999)
	{
		numeroLegajo=prompt("Error: ingrese numero de legajo valido");
		numeroLegajo=parseInt(numeroLegajo);
	}

	nacionalidad=prompt("Ingrese nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");

	while(nacionalidad!="a" && nacionalidad!="e"  && nacionalidad!="n")
	{
		nacionalidad=prompt("Error, ingrese nacionalidad valida: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
	}
	switch(nacionalidad)
	{
		case "a":
		nacionalidad= "Argentino";
		break;
		
		case"e":
		nacionalidad= "Extrangero";
		break;

		case "n":
		nacionalidad= "Nacionalizado";
		break;	
	}

	document.getElementById("txtIdEdad").value ="Edad: "+ edadIngresada;
	document.getElementById("txtIdSexo").value ="Sexo: "+ sexoIngresado;
	document.getElementById("txtIdEstadoCivil").value ="Estado civil: "+ estadoCivilIngresado;
	document.getElementById("txtIdSueldo").value = "Sueldo: $"+ sueldoBruto;
	document.getElementById("txtIdLegajo").value ="Legajo: " + numeroLegajo;
	document.getElementById("txtIdNacionalidad").value ="Nacionalidad: " + nacionalidad;

}

// Amarillo Matias