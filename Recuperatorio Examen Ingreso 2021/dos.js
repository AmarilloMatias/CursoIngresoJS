/*Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.

a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).√
b) El nombre de la alumna mas joven.√
c) Porcentaje de estudiantes que estudia cada carrera.√
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.*/


function mostrar()
{
	let nombre;
    let carrera;
    let sexo;
    let materias;
    let nota;
    let edad;
    let contadorFisica=0;
    let contadorQuimica=0;
    let contadorSistemas=0;
    let notaPromedio=0;
    let banderaMejorPromedio=0;
    let nombreMejorPromedio;
    let contadorEstudiantes=0;
    let promedioFisica;
    let promedioQuimica;
    let promedioSistemas;
    let banderaAlumnaMasJoven=0;
    let edadMasJoven=0;
    let nombreMasJoven;

	

	let i;


	for(i=0; i<500; i++)
	{
        contadorEstudiantes=contadorEstudiantes+1;
		
		nombre=prompt("Ingrese nombre:");
		while(isNaN(nombre)==false)
		{
			nombre=prompt("Error, ingrese nombre");
		}

        carrera=prompt("Ingrese carrera: Quimica, Fisica o Sistemas");
		while(isNaN(carrera)==false || carrera!="quimica" && carrera!="fisica" && carrera!="sistemas")
		{
			carrera=prompt("Error, ingrese carrera valido: Quimica, Fisica o Sistemas");
		}
       
        sexo=prompt("ingrese sexo: femenino , masculino , no binario");
		while(isNaN(sexo)==false || sexo!="femenino" && sexo!="masculino" && sexo!="no binario")
		{
		    sexo=prompt("Error, ingrese sexo valido: femenino , masculino , no binario");
		}

        materias=prompt("ingrese cantidad materias");
		materias=parseInt(materias);
		while(isNaN(materias)==true || materias<0 || materias>5)
		{
			materias=prompt("Error, ingrese cantidad materias valida: entre 1 y 5");
			materias=parseInt(materias);
		}

        nota=prompt("ingrese nota");
		nota=parseInt(nota);
		while(isNaN(nota)==true || nota<11 || nota>0)
		{
			nota=prompt("Error, ingrese nota valida: entre 1 y 10");
			nota=parseInt(nota);
		}

		edad=prompt("ingrese edad:");
		edad=parseInt(edad);
		while(isNaN(edad)==true || edad<17 || edad>100)
		{
			edad=prompt("Error, ingrese edad valida");
			edad=parseInt(edad);
		}

        if(banderaAlumnaMasJoven==0 && sexo=="femenino")
        {
            edadMasJoven=edad;
            nombreMasJoven=nombre;
            banderaAlumnaMasJoven=1;
        }
        else
		{
			if(edadMasJoven>edad && sexo=="femenino")
            {
                edadMasJoven=edad;
                nombreMasJoven=nombre;
            }
		}


		switch(carrera) 
		{
			case "fisica":
                contadorFisica=contadorFisica+1;
                if(banderaMejorPromedio==0 || notaPromedio<nota)  
                {
                    banderaMejorPromedio=1;
                    notaPromedio=nota;
                    nombreMejorPromedio=nombre;
                }
                else
                {
                   if(notaPromedio<nota)
                   {
                    notaPromedio=nota;
                    nombreMejorPromedio=nombre;
                   }
                }
			break;

			case "sistemas":
			contadorSistemas=contadorSistemas+1;
			break;

            case "quimica":
			contadorQuimica=contadorQuimica+1;
			break;
		}

		
	}	// fin for

    if(contadorFisica!=0)
    {
        promedioFisica=contadorEstudiantes/contadorFisica;
    }
    else
    {
        promedioFisica="No hubo estudiantes de fisica";
    }

    if(contadorQuimica!=0)
    {
        promedioQuimica=contadorEstudiantes/contadorQuimica;
    }
    else
    {
        promedioQuimica="No hubo estudiantes de quimica";
    }

    if(contadorSistemas!=0)
    {
        promedioSistemas=contadorEstudiantes/contadorSistemas;
    }
    else
    {
        promedioSistemas="No hubo estudiantes de sistemas";
    }
    
    
    console.log("el mejor promedio de los estudiantes de fisica es: " + nombreMejorPromedio);
    console.log("el porcentaje de los estudiantes de fisica es: "+promedioFisica);
    console.log("el porcentaje de los estudiantes de quimica es: "+promedioQuimica);
    console.log("el porcentaje de los estudiantes de sistemas es: "+promedioSistemas);

    console.log("La mujer mas joven es: " + nombreMasJoven);

} // fin funcion

