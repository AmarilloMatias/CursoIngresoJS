/*Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta,
teniendo en cuenta que tenemos varias ventas:
nombre del cliente,
cantidad de lamparas ,
marca (FelipeLamparas - ArgentinaLuz -Illuminatis),
precio por unidad,
precio total de esa compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, 
se aplica un descuento del 10% sobre la compra 
Si la marca es ArgentinaLuz y compra 3 o mas unidades, el descuento es del 5%. 
Ningun otro caso aplica descuento. al terminar la carga de todas las ventas,la empresa desea saber:

a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)
*/

function mostrar()
{
	let nombreCliente;
	let cantidadLamparas;
	let marca;
	let precioUnidad;
	let precioTotalSinDescuento;

	let respuesta="si";

	while(respuesta=="si")
	{

		nombreCliente=prompt("ingrese nombre cliente:");
		while(isNaN(nombreCliente)==false)
		{
			nombreCliente=prompt("Error, ingrese nombre valido");
		}

		cantidadLamparas=prompt("ingrese cantidad Lamparitas:");
		cantidadLamparas=parseInt(cantidadLamparas);
		while(isNaN(cantidadLamparas)==true || cantidadLamparas<0)
		{
			cantidadLamparas=prompt("Error, ingrese cantidad Lamparitas valida");
			cantidadLamparas=parseInt(cantidadLamparas);
		}

		marca=prompt("ingrese marca: FelipeLamparas, ArgentinaLuz, Illuminatis");
		while(isNaN(marca)==false || marca!="FelipeLamparas" && marca!="ArgentinaLuz" && marca!="Illuminatis")
		{
		marca=prompt("Error, ingrese marca valido: FelipeLamparas , ArgentinaLuz , Illuminatis");
		}

		precioUnidad=prompt("ingrese precio por unidad:");
		precioUnidad=parseInt(precioUnidad);
		while(isNaN(precioUnidad)==true || precioUnidad<0)
		{
			precioUnidad=prompt("Error, ingrese precio por unidad valido");
			precioUnidad=parseInt(precioUnidad);
		}

		precioTotalSinDescuento=precioUnidad*cantidadLamparas;


		switch(cantidadLamparas)
		{
			case "FelipeLamparas": // si la cantidad de lamparas supera las 5 unidades, se aplica un descuento del 10% sobre la compra
			if(cantidadLamparas>5)
			{
				descuento = 10;
			}
			break;

			case "ArgentinaLuz": //Si la compra 3 o mas unidades, el descuento es del 5%. 
			if(cantidadLamparas>3)
			{
				descuento= 5;
			}
			break;
		}
	
	
		precioFinal=precio*descuento/100;
		precioTotal=precio-precioFinal;
		alert (precioTotal);




	}
   

   
}
