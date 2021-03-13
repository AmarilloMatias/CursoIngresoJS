/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, 
los datos solicitados son:
nombre
situcación laboral ("buscando" , "trabajando" o "solo estudiante")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.

a) El nombre del mejor promedio que de los que no tarbajan o estan buscando // maximo con if  promedio (estudiante)√
b) El nombre del mas viejo de los alumnos que solo sea estudiantes  // maximo con if sobre edad y que sea estudiante
c) El promedio de nota por situacion laboral // switch igual al anterior ejercicio 1 √
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo*/ 
//minimo con if dentro del switch igual al anterior ejercicio 1 √

function mostrar()
{
  let nombreIngresado;
  let situacionLaboral;
  let cantidadMaterias;
  let sexo;
  let nota;
  let edad;
  let acumuladorNotaBuscando=0;
  let contadorNotaBuscando=0;
  let acumuladorNotasTrabajando=0;
  let contadorNotasTrabajando=0;
  let acumuladorNotasSoloestudiando=0;
  let contadorNotasSoloestudiando=0;
  let promedioBuscando;
  let promedioTrabajando;
  let promedioSoloestudiando;
  let banderaMenosMaterias=0;
  let acumuladorMenosMaterias=0;
  let nombreMenosCursa;
  let edadMenosCursa=0;
  let banderaMejorPromedio=0;
  let acumuladorMejorPromedio=0;
  let nombreMejorPromedio;
  let banderaMasViejo=0;
  let acumuladorMayorEdad=0;
  let nombreMayorEdad;
  

  let respuesta="si";

  while(respuesta=="si")
  {
    nombreIngresado=prompt("Ingrese nombre:");

    situacionLaboral=prompt("ingrese situacion laboral: buscando, trabajando o solo estudiante ");
    while(isNaN(situacionLaboral)==false || situacionLaboral!="buscando" && situacionLaboral!="trabajando" && situacionLaboral!="solo estudiante")
    {
      situacionLaboral=prompt("Error, ingrese situacion laboral valida: buscando, trabajando o solo estudiante");
    }

    cantidadMaterias=prompt("ingrese cantidad de materias:");
    cantidadMaterias=parseInt(cantidadMaterias);
    while(isNaN(cantidadMaterias)==true || cantidadMaterias<1 || cantidadMaterias>8)
    {
      cantidadMaterias=prompt("Error, ingrese cantidad de materias valida:");
      cantidadMaterias=parseInt(cantidadMaterias);
    }

    sexo=prompt("ingrese sexo: femenino , masculino , no binario");
    while(isNaN(sexo)==false || sexo!="femenino" && sexo!="masculino" && sexo!="no binario")
    {
      sexo=prompt("Error, ingrese sexo valido: femenino , masculino , no binario");
    }

    nota=prompt("ingrese nota promedio:");
    nota=parseInt(nota);
    while(isNaN(nota)==true || nota<1 || nota>10)
    {
      nota=prompt("Error, ingrese nota valida:");
      nota=parseInt(nota);
    }

    edad=prompt("ingrese edad:");
    edad=parseInt(edad);
    while(isNaN(edad)==true || edad<18 || edad>90)
    {
      edad=prompt("Error, ingrese edad valida:");
      edad=parseInt(edad);
    }

    switch(situacionLaboral) //c) El promedio de nota por situacion laboral
    {
      case "buscando":
      acumuladorNotaBuscando=acumuladorNotaBuscando+nota;
      contadorNotaBuscando=contadorNotaBuscando+1;
      
      if(banderaMenosMaterias==0)
      {
        banderaMenosMaterias=1;
        acumuladorMenosMaterias=cantidadMaterias;
        nombreMenosCursa=nombreIngresado;
        edadMenosCursa=edad;
      }
      else
      {
        if(acumuladorMenosMaterias<cantidadMaterias)
        {
          acumuladorMenosMaterias=cantidadMaterias;
          nombreMenosCursa=nombreIngresado;
          edadMenosCursa=edad;
        }
      }
      break;

      case"trabajando":
      acumuladorNotasTrabajando=acumuladorNotasTrabajando+nota;
      contadorNotasTrabajando=contadorNotasTrabajando+1;
      break;

      case"solo estudiante":
      acumuladorNotasSoloestudiando=acumuladorNotasSoloestudiando+nota;
      contadorNotasSoloestudiando=contadorNotasSoloestudiando+1;
      if(banderaMejorPromedio==0)
      {
        banderaMejorPromedio=1;
        acumuladorMejorPromedio=nota;
        nombreMejorPromedio=nombreIngresado;
      }
      else
      {
        if(acumuladorMejorPromedio<nota)
        {
          acumuladorMejorPromedio=nota;
          nombreMejorPromedio=nombreIngresado;
        }
      }
      //b) El nombre del mas viejo de los alumnos que solo sea estudiantes  
      // maximo con if sobre edad y que sea estudiante
      if(banderaMasViejo==0)
      {
        banderaMasViejo=1;
        acumuladorMayorEdad=edad;
        nombreMayorEdad=nombreIngresado;
      }
      else
      {
        if(acumuladorMayorEdad<edad)
        {
          acumuladorMayorEdad=edad;
          nombreMayorEdad=nombreIngresado;
        }
      }
      break;
    } // fin switch



    respuesta=prompt("desea continuar: si o no");
  } // fin while

  if(contadorNotaBuscando!=0)
	{
		promedioBuscando=acumuladorNotaBuscando/contadorNotaBuscando;
	}
	else
	{
		promedioBuscando="No hubo buscando";
	}
	if(contadorNotasTrabajando!=0)
	{
    promedioTrabajando=acumuladorNotasTrabajando/contadorNotasTrabajando;
	}
	else
	{
		promedioTrabajando="No hubo trabajando";
	}
	if(contadorNotasSoloestudiando!=0)
	{
		promedioSoloestudiando=acumuladorNotasSoloestudiando/contadorNotasSoloestudiando;
	}
	else
	{
		promedioSoloestudiando="No hubo solo estudiando";
	}
  

console.log("El nombre del mejor promedio que solo estudia es: " + nombreMejorPromedio);
console.log("El nombre del mas viejo de los alumnos que solo sea estudiantes es: "+nombreMayorEdad);
console.log("promedio de situacion laboral buscando: " + promedioBuscando);
console.log("promedio de situacion laboral trabajando: " + promedioTrabajando);
console.log("promedio de situacioon laboral Solo Estudiando: " + promedioSoloestudiando);
console.log("La edad es: " + edadMenosCursa + " y el nombre es: " + nombreMenosCursa + " del que cursa menos cantidad de materias y que este buscando trabajo");
} //fin funcion
