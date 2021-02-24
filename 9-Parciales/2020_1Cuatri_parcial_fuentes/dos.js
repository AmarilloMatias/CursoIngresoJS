/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/

function mostrar()
{
  let respuesta;
  let tipoIngresado;
  let cantidadIngresada;
  let precioIngresado;
  let precioBruto;
  let acumuladorPrecioBruto;
  let descuento;
  let precioConDescuento;
  let acumuladorCantidadArena;
  let acumuladorCantidadCal;
  let acumuladorCantidadCemento;
  let productoMasBolsas;
  let acumuladorCantidadTotales;


  acumuladorPrecioBruto=0;
  descuento=0;
  respuesta = "si";
  acumuladorCantidadTotales=0;

  while(respuesta=="si")
  {
    tipoIngresado=prompt("ingrese un producto: arena, cal o cemento");
    while(isNaN(tipoIngresado)== false || tipoIngresado!="arena" && tipoIngresado!="cal" && tipoIngresado!="cemento")
    {
      tipoIngresado=prompt("Error, ingrese producto valido: arena, cal, cemento");
    }
    cantidadIngresada=prompt("ingrese cantidad");
    cantidadIngresada=parseInt(cantidadIngresada);
    while(isNaN(cantidadIngresada)== true || cantidadIngresada <1)
    {
      cantidadIngresada=prompt("Error: ingrese cantidad correcta");
      cantidadIngresada=parseInt(cantidadIngresada);
    }
    precioIngresado=prompt("ingrese precio");
    precioIngresado=parseInt(precioIngresado);
    while(isNaN(precioIngresado)== true || precioIngresado <1)
    {
      precioIngresado=prompt("Error: ingrese precio correcto");
      precioIngresado=parseInt(precioIngresado);
    }

    precioBruto=cantidadIngresada*precioIngresado;
    acumuladorPrecioBruto=acumuladorPrecioBruto+precioBruto;

    promp=("desea continuar?");

    acumuladorCantidadTotales=acumuladorCantidadTotales+cantidadIngresada;

    switch(tipoIngresado)
    {
    case "arena":
    acumuladorCantidadArena= acumuladorCantidadArena+cantidadIngresada;
    break;

    case "cal":
    acumuladorCantidadCal= acumuladorCantidadCal+cantidadIngresada;
    break;

    case "cemento":
    acumuladorCantidadCemento= acumuladorCantidadCemento+cantidadIngresada;
    break;
    }

    /*if(banderaPrimerProducto = true)
    {
      precioMasCaro=precioIngresado;
      tipoMasCaro=tipoIngresado; 
    }
    else
    {
      if (precioMAsCaro<precioIngresado)
      {
        precioMasCaro=precioIngresado;
        tipoMasCaro=tipoIngresado; 
      }
    }*/
    if(banderaPrimerProducto = true || precioIngresado>precioMasCaro)
    {
      precioMasCaro=precioIngresado;
      tipoMasCaro=tipoIngresado; 
      banderaPrimerProducto=false;
    }
    else
    {
      if (precioMAsCaro<precioIngresado)
      {
        precioMasCaro=precioIngresado;
        tipoMasCaro=tipoIngresado; 
      }
      
    }
  }

  if(acumuladorCantidadTotales>10)
  {
    if(acumuladorCantidadTotales<30)
    {
      descuento=15;
    }
    elsse
    {
      descuento=25;
    }
    precioConDescuento=acumuladorPrecioBruto- ((acumuladorPrecioBruto*descuento)/100);
    console.log("El importe total a pagar es: "+precioConDescuento+ "y su descuento es: " + descuento);
    //b) el importe total a pagar con descuento(solo si corresponde)
  }
  
  console.log("El precio total a pagar es:" + acumuladorPrecioBruto);
  //a) El importe total a pagar , bruto sin descuento y...  
  console.log("El producto con mas cantidad de bolsas es: "+productoMasBolsas);
  

  if(acumuladorCantidadArena>acumuladorCantidadCal && acumuladorCantidadArena>acumuladorCemento)
  {
    productoMasBolsas="Arena";
  }
  if(acumuladorCantidadCal>acumuladorCemento)
  {
    productoMasBolsas="Cal";
  }
  else
  {
    productoMasBolsas="Cemento";
  }


}