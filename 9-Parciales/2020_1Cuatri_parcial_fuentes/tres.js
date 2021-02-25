function mostrar()
{
	En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") 
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.

a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años), tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/

function mostrar()
{

  var nombre;
  var edad = 0;
  var sexo;
  var estadoCivil;
  var temCorporal = 0;
  var masTemperatura = 0;
  var nombreMasTemp;
  var bandera = 7;
  var acumuladorHSol = 0;
  var contMayorVi = 0;
  var promedio = 0;
  var contHombresSolterosoViu = 0;
  var contHSolt = 0;
  var contHViu = 0;
  var contTercEdadTempAlta = 0;
  var respuesta = "si";


  while(respuesta == "si")
  {
    nombre = prompt("Ingrese un nombre");

    edad = parseInt(prompt("ingrese una edad"));
  
      while (edad<1 || edad>125)
      {
        edad = parseInt(prompt("Error, ingrese una edad valida"));
      }

	    sexo = prompt("ingrese f ó m (F-femenino o M para Masculino).");
      while(!(sexo == "f" || sexo == "m" || sexo == "F" || sexo == "M"))
    {
	    sexo = prompt("Error, ingrese sexo valido f ó m (F-femenino o M para Masculino).");
    }
    
      estadoCivil = prompt("Ingrese estado civil (soltero, casado o viudo");
      while(!(estadoCivil == "soltero" || estadoCivil == "casado" || estadoCivil == "viudo"))
      {
        estadoCivil = prompt("Error, ingrese estado civil valido (soltero, casado o viudo");

      }

      temCorporal = parseInt(prompt("Ingrese temperatura corporal"));
      while(temCorporal<15 || temCorporal>42)
      {
        temCorporal = parseInt(prompt("Error, ingrese temperatura corporal valida"));
      }

      //A - El nombre de la persona con mas temperatura.
      if(temCorporal>masTemperatura || bandera == 7)
      {
        masTemperatura = temCorporal;
        nombreMasTemp = nombre;
        bandera = 1;

      }

    //B - Cuantos mayores de edad estan viudos
    if(edad>17 && estadoCivil == "viudo") 
    {
      contMayorVi++;
    }

    //D cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
    if(edad>59 && temCorporal>37)
    {
      contTercEdadTempAlta++;
    }

    if(sexo == "M" || sexo == "m")
    {
      switch(estadoCivil)
      {
        case "soltero":
          contHSolt++;
          acumuladorHSol = acumuladorHSol + edad;
          break;

        case "viudo":
          contHViu++;
          break;
      }
    }

    respuesta = prompt("Desea continuar");
	}

  contHombresSolterosoViu = contHSolt + contHViu;
  promedio = acumuladorHSol/contHSolt;

   document.write("El nombre de la persona con mas temperatura es: "+nombreMasTemp+"<br>"); //A
   document.write("La cantidade de mayores de edad viudos es:"+contMayorVi+"<br>");//B
   document.write("La cantidad de hombres solteros o viudos es: "+contHombresSolterosoViu+"<br>");//C
   document.write("La cuantidad de personas de la tercera edad que tienen mas de 38 de temperatura es: "+contTercEdadTempAlta+"<br>");//D
   document.write("El promedio de edad entre los hombres solteros es: "+promedio+"<br>");


}
