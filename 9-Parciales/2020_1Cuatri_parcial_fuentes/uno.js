/*Amarillo Matias
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

function mostrar()
{
	
	let contadorProductos;
	let tipoIngresado;
	let precioIngresado;
	let cantidadIngresada;
	let marcaIngresada;
	let fabricanteIngresado;

	let banderaPrimerAlcohol;
	let alcoholMasBarato;
	let fabricanteMasBarato;
	let cantidadMasBarato;

	let acumuladorCantidadJabon;
	let contadorJabon;
	let acumuladorCantidadBarbijo;
	let contadorBarbijo;
	let acumuladorCantidadAlcohol;
	let contantadorAlcohol;
	let productoMasUnidades;

	let promedio;

	banderaPrimerAlcohol=0;
	contadorProductos=0;

	while (contadorProductos<5)
	{
		contadorProductos=contadorProductos+1;
		tipoIngresado= prompt("Ingrese un tipo de producto: barbijo, jabon o alcohol");
		while(isNaN(tipoIngresado) ==false || tipoIngresado!="barbijo" && tipoIngresado!="jabon" && tipoIngresado!="alcohol")
		{
			tipoIngresado=prompt("Error, ingrese opcion valida: barbijo, jabon o alcohol");
		}

		precioIngresado=prompt("ingrese precio del producto");
		precioIngresado=parseInt(precioIngresado);
		while(isNaN(precioIngresado==true) || precioIngresado<100 || precioIngresado>300)
		{
			precioIngresado=prompt("Error, Ingrese precio correcto");
			precioIngresado=parseInt(precioIngresado);
		}

		cantidadIngresada=prompt("ingrese cantidad del producto");
		cantidadIngresada=parseInt(cantidadIngresada);
		while(isNaN(cantidadIngresada==true) || cantidadIngresada<1 || cantidadIngresada>1000)
		{
			cantidadIngresada=prompt("Error, Ingrese cantidad correcto");
			cantidadIngresada=parseInt(cantidadIngresada);
		}

		marcaIngresada=prompt("ingrese marca del producto");
		while(isNaN(marcaIngresada==false))
		{
			marcaIngresada=prompt("Error, Ingrese marca correcto");
		}	

		fabricanteIngresado=prompt("ingrese fabricante del producto");
		while(isNaN(fabricanteIngresado==false))
		{
			fabricanteIngresado=prompt("Error, Ingrese fabricante correcto");
		}

		//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante

		//if(tipoIngresado=="alcohol")
		if(contantadorAlcohol==1)
		{
			if (banderaPrimerAlcohol == true|| precioIngresado< alcoholMasBarato)
			{
				//banderaPrimerAlcohol=false;
				alcoholMasBarato=precioIngresado;
				fabricanteMasBarato=fabricanteIngresado;
				cantidadMasBarato=cantidadIngresada;
			}
			else
			{
				if(precioIngresado < alcoholMasBarato)
				{
					alcoholMasBarato=precioIngresado;
					fabricanteMasBarato=fabricanteIngresado;
					cantidadMasBarato=cantidadIngresada;
				}
			}
		}


		//b) Del tipo con mas unidades, el promedio por compra

		switch(tipoIngresado)
		{
			case "jabon":
			acumuladorCantidadJabon = acumuladorCantidadJabon + cantidadIngresada;
			contadorJabon = contadorJabon +1;
			break;

			case "alcohol":
			acumuladorCantidadAlcohol = acumuladorCantidadAlcohol + cantidadIngresada;
			contantadorAlcohol = contantadorAlcohol +1;
			break;
				
			case "barbijo":
			acumuladorCantidadBarbijo = acumuladorCantidadBarbijo + cantidadIngresada;
			contadorBarbijo = contadorBarbijo +1;
			break;
		}


	}//fin while 5
			//jabon
			if(acumuladorCantidadJabon>acumuladorCantidadBarbijo && acumuladorCantidadJabon>acumuladorCantidadAlcohol)
			{
				productoMasUnidades="Jabon";
				promedio=acumuladorCantidadJabon/contadorJabon;
			}
			else
			{	//barbijo
				if(acumuladorCantidadBarbijo>acumuladorCantidadAlcohol)
				{
					productoMasUnidades="Barbijo";
				}
				else
				{ //alcohol
					productoMasUnidades="Alcohol";
				}
			}
			console.log("El promedio de " + productoMasUnidades + "es " + promedio);
			console.log("Hay " + acumuladorCantidadJabon + "Jabones");
}

