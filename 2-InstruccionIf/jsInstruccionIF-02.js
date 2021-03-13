/*Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
a)La cantidad de temperaturas pares.√
b)la cantidad de temperaturas impares de europa √
c)El nombre del pais con menos habitantes √
d)la cantidad de paises que superan los 40 grados.√
e)la cantidad de paises de america que tienen menos de 0 grados .√
f)el promedio de habitantes entre los paises ingresados .√
g)el promedio de habitantes entre los paises que superan los 40 grados √       
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. √
i) que continente tiene mas habitantes.√*/


function mostrar()
{
	let paises;
	let continente;
	let poblacion;
	let pobresa;
	let temperatura;
	let i;
	let contadorTemperaturasPares=0;
	let contadorTemperaturasImpares=0;
	let promedioPoblacion; // poblacion /5
	let flagPoblacion=0;
	let paisMenosPoblacion=0;
	let nombrePaisMenosPoblacion;
	let contadorDePoblacion=0;
	let flagTemperaturaMenor=0;
	let nombrePaisMenorTemperatura;
	let menorTemperatura=0;
	let poblacionAfrica=0;
	let poblacionAmerica=0;
	let poblacionAsia=0;
	let poblacionEuropa=0;
	let poblacionOceania=0;
	let continenteMasPoblacion;
	let contadorPaisesMas40Grados=0;
	let contadorPaisesAmerica=0;




		for(i=0; i<5; i++)
		{
			paises=prompt("Ingrese un pais");

			continente=prompt("ingrese continente:");
			while(isNaN (continente)==false || continente!="america" && continente!= "asia" && continente!="europa" && continente!="africa" && continente!="oceania")
			{
				continente=prompt("Error, ingrese continente correcto");
			}

			pobresa=prompt("Ingrese nivel de pobreza: pobre, rico o muy rico");
			
			if(continente) 
				{
					while(pobresa=="pobre" && continente=="europa")
					{
						pobresa=prompt("Error, no es una opcion valida para europa: rico o muy rico");
					}
					while (isNaN (pobresa)== false || pobresa!="pobre" && pobresa!="rico" && pobresa!="muy rico")
					{
					pobresa=prompt("Error, ingrese opcion valida: pobre, rico o muy rico ");
					}

				}
			
			poblacion=prompt("ingrese cantidad de habitantes, entre 1 y 7000 millones");
			poblacion=parseInt(poblacion);
			contadorDePoblacion=contadorDePoblacion+poblacion;
			
			while(isNaN (poblacion)== true || poblacion<1	&& poblacion>7000)
			{
				poblacion=prompt("Error: ingrese cantidad valida: ");
				poblacion=parseInt(poblacion);
			}

			switch(continente)
				{
					case "africa":
					poblacionAfrica=poblacionAfrica+poblacion;	
					break;
					
					case"america":
					poblacionAmerica=poblacionAmerica+poblacion;
					break;

					case"asia":
					poblacionAsia=poblacionAsia+poblacion;
					break;

					case"europa":
					poblacionEuropa=poblacionEuropa+poblacion;
					break;

					case"oceania":
					poblacionOceania=poblacionOceania+poblacion;
					break;
				}

			temperatura=prompt("ingrese temperatura mínima que se registra en su territorio:");
			temperatura=parseInt(temperatura);
			while(isNaN(temperatura)==true || temperatura>50 && temperatura>-50)
			{
				temperatura=prompt("Error, ingrese una temoperatura valida: ");
				temperatura=parseInt(temperatura);
			}
				if(temperatura%2==0) //a)La cantidad de temperaturas pares.
				{
					contadorTemperaturasPares =contadorTemperaturasPares+1;
				}
				else
				{
					if(continente=="europa") //b)la cantidad de temperaturas impares de europa
					{
						contadorTemperaturasImpares= contadorTemperaturasImpares+1;	
					}
					else
					{
						contadorTemperaturasImpares=0;
					}
					
				}
				if(temperatura>40) //d)la cantidad de paises que superan los 40 grados
				{
					contadorPaisesMas40Grados=contadorPaisesMas40Grados+1
				}
				else
				{
					contadorPaisesMas40Grados=0;
				}

				//e)la cantidad de paises de america que tienen menos de 0 grados .

				if(temperatura<0 && continente=="america")
				{
					contadorPaisesAmerica=contadorPaisesAmerica+1;
				}

				//c)El nombre del pais con menos habitantes	
				if(poblacion<paisMenosPoblacion || flagPoblacion == 0)
				{
					paisMenosPoblacion=poblacion;
					nombrePaisMenosPoblacion=paises;
					flagPoblacion = 1;
				}	
				else
				{
					poblacion=paisMenosPoblacion;
					paises=nombrePaisMenosPoblacion;
					flagPoblacion = 1;
				}
				//H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
				if(temperatura<menorTemperatura || flagTemperaturaMenor == 0)
				{
					menorTemperatura=temperatura;
					nombrePaisMenorTemperatura=paises;
					flagTemperaturaMenor = 1;
				}	
				else
				{
					temperatura=menorTemperatura;
					paises=nombrePaisMenorTemperatura;
					flagTemperaturaMenor = 1;
				}

		}	//i) que continente tiene mas habitantes.

			if(poblacionAmerica>poblacionAfrica && poblacionAmerica>poblacionAsia && poblacionAmerica>poblacionEuropa && poblacionAmerica>poblacionOceania)
			{
				continenteMasPoblacion="America";
			}
			if(poblacionAfrica>poblacionAsia && poblacionAfrica>poblacionEuropa && poblacionAfrica>poblacionOceania && poblacionAfrica>poblacionAfrica)
			{
				continenteMasPoblacion="Africa";
			}
			if(poblacionAsia>poblacionEuropa && poblacionAsia>poblacionOceania && poblacionAsia>poblacionAfrica && poblacionAsia>poblacionAmerica)
			{
				continenteMasPoblacion="Asia";
			}
			if(poblacionEuropa>poblacionOceania && poblacionEuropa>poblacionAsia && poblacionEuropa>poblacionAfrica && poblacionEuropa>poblacionAmerica)
			{
				continenteMasPoblacion="Europa";
			}
			if(poblacionOceania>poblacionEuropa && poblacionOceania>poblacionAsia && poblacionOceania>poblacionAfrica && poblacionOceania>poblacionAmerica)
			{
				continenteMasPoblacion="oceania";
			}




		//f)el promedio de habitantes entre los paises ingresados.
		promedioPoblacion=contadorDePoblacion/5;


		console.log("poblacion minima es: " + paisMenosPoblacion + " millones " + " y es de: " + nombrePaisMenosPoblacion);
		console.log("el promedio de poblacion es: " + promedioPoblacion + " millones");
		console.log("La temperatura mas baja es: " + menorTemperatura + " y es de: " + nombrePaisMenorTemperatura);
		console.log("la cantidad de temperaturas pares es: " + contadorTemperaturasPares);
		console.log("la temperatura impar de europa es: " + contadorTemperaturasImpares );
		console.log("continente con mas poblacion: " + continenteMasPoblacion);
		console.log("Paises con mas de 40 grados: " + contadorPaisesMas40Grados);
		console.log("Los paises de america con menos de 0 grados son: " + contadorPaisesAmerica);
		

}//FIN DE LA FUNCIÓN