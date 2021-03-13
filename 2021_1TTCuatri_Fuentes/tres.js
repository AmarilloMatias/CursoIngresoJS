/*Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, 
de cada persona debemos optener los siguientes datos:
Nombre,
Obra Social ("PAMI", "OSDE" o "otras"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con OSDE de mas de 60 años.√
b) el nombre y temperatura de la mujer mas joven de PAMI.√
c) cuanto sale el viaje total sin descuento. √
d) si hay mas del 50% de los pasajeros que pertenecen a PAMI,
el precio final tiene un descuento del 25%, que solo mostramos si corresponde.*/

function mostrar()
{
	let nombre;
	let obraSocial;
	let edad;
	let temperatura;
	let sexo;
	let respuesta="si";
	let precioXPasaje=600;
	let contadorPasajeros=0;
	let totalSinDescuento;

	let contadorOsdeMayor=0;
	let edadMasJoven=0;	
	let nombreMasJoven;
	let temperaturaMasJoven;
	let contadorPami=0;
	let promedioPasajeros; 
	let conDescuento;
	let precioFinal;


	while(respuesta=="si")
	{
		contadorPasajeros=contadorPasajeros+1;
		
		nombre=prompt("Ingrese nombre:");
		while(isNaN(nombre)==false)
		{
			nombre=prompt("Error, ingrese nombre");
		}

		obraSocial=prompt("Ingrese obra social: pami, osde u otras");
		while(isNaN(obraSocial)==false || obraSocial!="pami" && obraSocial!="osde" && obraSocial!="otras")
		{
			obraSocial=prompt("Error, ingrese obra social valida: pami, osde u otras");
		}

		edad=prompt("ingrese edad:");
		edad=parseInt(edad);
		while(isNaN(edad)==true || edad<17 || edad>100)
		{
			edad=prompt("Error, ingrese edad valida");
			edad=parseInt(edad);
		}

		temperatura=prompt("ingrese temperatura");
		temperatura=parseFloat(temperatura);
		while(isNaN(temperatura)==true || temperatura<35 || temperatura>42)
		{
			temperatura=prompt("Error, ingrese temperatura valida");
			temperatura=parseFloat(temperatura);
		}

		sexo=prompt("Ingrese sexo: f o m ");
		while(isNaN(sexo)==false || sexo!="f" && sexo!="m")
		{
			sexo=prompt("Error, ingrese sexo valido: f o m ");
		}

		switch(obraSocial)
		{
			case "pami":
			contadorPami=contadorPami+1;
			
			if(edadMasJoven==0 && sexo=="f")
			{
				edadMasJoven=edad;
				nombreMasJoven=nombre;
				temperaturaMasJoven=temperatura;
			}
			else
			if(edad<edadMasJoven && sexo=="f")
			{
				edadMasJoven=edad;
				nombreMasJoven=nombre;
				temperaturaMasJoven=temperatura;
			}
			break;

			case "osde":
			if(edad>60)
			{
				contadorOsdeMayor=contadorOsdeMayor+1;
			}
			break;

		}

		respuesta=prompt("Desea continuar si o no");
	}//fin del while

	totalSinDescuento=contadorPasajeros*precioXPasaje;
	conDescuento=totalSinDescuento*25/100;
	promedioPasajeros=contadorPasajeros/2;

	if (promedioPasajeros>contadorPami)
	{
		precioFinal="No hay descuento";
	}
	else
	{
		precioFinal=totalSinDescuento-conDescuento;
		console.log("El precio con descuento es: "+precioFinal);
	}	

	//c) cuanto sale el viaje total sin descuento.
	
	console.log("El precio total sin descuento es: " + totalSinDescuento);
	console.log("la cantidad de personas con osde mayores de 60 es: "+ contadorOsdeMayor);
	console.log("el nombre de la mujer mas joven de pami es: " + nombreMasJoven + " y su temperatura es : " + temperaturaMasJoven);
	

} //fin mostrar
