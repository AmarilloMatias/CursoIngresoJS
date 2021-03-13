/*Amarillo Matias
Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto 
el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
Categoria ("desinfectante", "bactericida", "detergente" ) y 
el fabricante.

Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto √
b) La categoria con mas cantidad de unidades en total de la compra √ // SE HACE SOBRE CANTIDAD UNA BANDERA y se toma la categoria
c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
d) el fabricante y Categoria del más caro de los productos*/

function mostrar()
{
	let nombreProducto;
	let tipoProducto;
	let precioProducto;
	let cantidadProducto;
	let categoriaProducto;
	let fabricanteProducto;

	let acumuladorCantidadAlcohol=0;
	let acumuladorCantidadIac=0;
	let acumuladorCantidadQuat=0;
	let acumuladorDesinfectante=0;
	let acumuladorBactericida=0;
	let acumuladorDetergente=0;
	let categoriaMasCantidadUnidades;
	let contadorAlcohol=0;
	let contadorIac=0;
	let contadorQuat=0;

	let promedioCantidadAlcohol;
	let promedioCantidadIac;
	let promedioCantidadQuat;

	let contadorDetergenteMenor=0;
	let banderaMasCaro=0;
	let categoriaMascara;
	let fabricanteMasCaro;
	let precioMasCaro;


	let i;


	for(i=0; i<5; i++)
	{
		nombreProducto=prompt("Ingrese nombre del producto:");
		
		tipoProducto= prompt("Ingrese un tipo de producto: alcohol, iac o quat");
		while(isNaN(tipoProducto) ==false || tipoProducto!="alcohol" && tipoProducto!="iac" && tipoProducto!="quat")
		{
			tipoProducto=prompt("Error, ingrese opcion valida: alcohol, iac o quat");
		}
		
		precioProducto=prompt("ingrese precio del producto");
		precioProducto=parseInt(precioProducto);
		while(isNaN(precioProducto==true) || precioProducto<100 || precioProducto>300)
		{
			precioProducto=prompt("Error, Ingrese precio correcto");
			precioProducto=parseInt(precioProducto);
		}
		
		cantidadProducto=prompt("ingrese cantidad del producto");
		cantidadProducto=parseInt(cantidadProducto);
		while(isNaN(cantidadProducto==true) || cantidadProducto<1 || cantidadProducto>1000)
		{
			cantidadIngresada=prompt("Error, Ingrese cantidad correcto");
			cantidadIngresada=parseInt(cantidadIngresada);
		}

		categoriaProducto=prompt("ingrese cateforia del producto: desinfectante, bactericida, detergente");
		while(isNaN(categoriaProducto==false) || categoriaProducto!="desinfectante" && categoriaProducto!="bactericida" && categoriaProducto!="detergente" )
		{
			categoriaProducto=prompt("Error, Ingrese marca correcto: desinfectante, bactericida, detergente");
		}	

		fabricanteProducto=prompt("ingrese fabricante del producto");
		while(isNaN(fabricanteProducto==false))
		{
			fabricanteProducto=prompt("Error, Ingrese fabricante correcto");
		}

		if(banderaMasCaro==0)
		{
			precioMasCaro=precioProducto;
			categoriaMascara=categoriaProducto;
			fabricanteMasCaro=fabricanteProducto;
			banderaMasCaro=1;
		}
		else
		{
			if(precioMasCaro<precioProducto)
			{
				precioMasCaro=precioProducto
				categoriaMascara=categoriaProducto;
				fabricanteMasCaro=fabricanteProducto;
				banderaMasCaro=1;
			}
		}




		switch(tipoProducto)
		{
			case "alcohol":
			acumuladorCantidadAlcohol=acumuladorCantidadAlcohol+cantidadProducto;
			if(contadorAlcohol==0)
			{
				contadorAlcohol=contadorAlcohol+1;
			}
			else
			{
				contadorAlcohol=contadorAlcohol+1;
			}
			break;

			case "iac":
			acumuladorCantidadIac=acumuladorCantidadIac+cantidadProducto;
			if(contadorIac==0)
			{
				contadorIac=contadorIac+1;
			}
			else
			{
				contadorIac=contadorIac+1;
			}
			break;
			
			case "quat":
			acumuladorCantidadQuat=acumuladorCantidadQuat+cantidadProducto;
			if(contadorQuat==0)
			{
				contadorQuat=contadorQuat+1;
			}
			else
			{
				contadorQuat=contadorQuat+1;
			}
			break;	
		}

		switch(cantidadProducto) // if de resolucion con dos condiciones
		{
			case "desinfectante":
			acumuladorDesinfectante=acumuladorDesinfectante+cantidadProducto;
			break;
			
			case "bactericida":
			acumuladorBactericida=acumuladorBactericida+cantidadProducto;
			break;

			case "detergente":
			acumuladorDetergente=acumuladorDetergente+cantidadProducto;
			if(precioProducto<200)
			{ //c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
			contadorDetergenteMenor=contadorDetergenteMenor+cantidadProducto;				
			}
			break;		
		}

	}
	//b) La categoria con mas cantidad de unidades en total de la compra
	if(acumuladorDesinfectante>acumuladorBactericida && acumuladorDesinfectante>acumuladorDetergente)
	{
		categoriaMasCantidadUnidades="Desinfectantes";
	}
	if(acumuladorBactericida>acumuladorDetergente)
	{
		categoriaMasCantidadUnidades="Bactericida";
	}
	else
	{
		categoriaMasCantidadUnidades="Detergente";
	}

	//a) El promedio de cantidad por tipo de producto // con un if con contador mayor a 0

	if(contadorAlcohol!=0)
	{
		promedioCantidadAlcohol=acumuladorCantidadAlcohol/contadorAlcohol;
	}
	else
	{
		alert("No hay alcohol");
	}
	if(contadorIac!=0)
	{
		promedioCantidadIac=acumuladorCantidadIac/contadorIac;
	}
	else
	{
		alert("No hay IAC");
	}
	if(contadorQuat!=0)
	{
		promedioCantidadQuat=acumuladorCantidadQuat/contadorQuat;
	}
	else
	{
		alert("No hay QUAT");
	}
	

	


	console.log("promedio alcohol " + promedioCantidadAlcohol);
	console.log("promedio iac: "+ promedioCantidadIac);
	console.log("promedio quat: " + promedioCantidadQuat);
	console.log(" la categoria con mas cantidad es: " + categoriaMasCantidadUnidades)
	console.log("se compraron en total " + contadorDetergenteMenor + " de detergentes con precio menor a 200");
	console.log("del mas caro de los productos el fabricante es: " + fabricanteMasCaro + " y pertenece a " + categoriaMascara);


}//fin funcion
