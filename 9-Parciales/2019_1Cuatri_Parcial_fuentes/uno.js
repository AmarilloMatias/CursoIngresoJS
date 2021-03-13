/*Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado √
b)El porcentaje de enfermos sobre el total de mascotas √
c)El nombre de la ultima mascota de tipo "otra cosa" √
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?√
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas √
i)El nombre y raza del gato sin pelos mas liviano*/

function mostrar()
{


    let tipoMascota;
    let pelaje;
    let edadMAscota;
    let nombreMascota;
    let raza;
    let peso;
    let estadoClinico;
    let temperatura;
    let contadorMascotas=0;
    let acumuladorGatos=0;
    let acumuladorOtraCosa=0;
    let acumuladorPerros=0;
    let porcentajeMascotas;
    let acumuladorPeso=0;
    let promedioKilos;
    let contadorPerroPesado=0;
    let perroMasPesado=0;
    let nombrePerroMasPesado;
    let contadorEnfermos=0;
    let porcentajeEnfermos;
    let ultimaOtraCosa;
    let banderaMenorTemperatura=0;
    let animalMenorTemperatura;
    let nombreAnimalMenorTemperatura;
    let menorTemperatura=0;
    let acumuladorTemperaturaGato;
    let acumuladorTemperaturaPerro;
    let acumuladorTemperaturaOtracosa;

    let respuesta = "si";


    while(respuesta=="si")
    {
        tipoMascota=prompt("Ingrese tipo de mascota: gato o un perro u otra cosa");
        while(isNaN(tipoMascota)== false || tipoMascota!="gato" && tipoMascota!="perro" && tipoMascota!="otra cosa")
        {
            tipoMascota=prompt("Error, ingrese opcion valida: gato o un perro u otra cosa");
        }

        pelaje=prompt("Ingrese tipo de pelaje: corto, largo o sin pelo");
        while(isNaN(pelaje)==false || pelaje!="corto" && pelaje!="largo" && pelaje!="sin pelo")
        {
            pelaje=prompt("Error, ingrese opcion valida: corto, largo o sin pelo");
        }
       

    
        edadMAscota=prompt("ingrese edad de la mascota:");
        edadMAscota=parseInt(edadMAscota);
        while(isNaN(edadMAscota)==true || edadMAscota<0 && edadMAscota>30)
        {
            edadMAscota=prompt("Error, ingrese edad valida:");
            edadMAscota=parseInt(edadMAscota);
        }

        nombreMascota=prompt("Ingrese nombre de la mascota:");
        while(isNaN(nombreMascota)==false)
        {
            nombreMascota=prompt("Error, ingrese nombre valido:");
        }

        raza=prompt("Ingrese raza de la mascota:");
        while(isNaN(raza)==false)
        {
            raza=prompt("Error, ingrese raza valido:");
        }

        peso=prompt("Ingrese peso de la mascota:");
        peso=parseFloat(peso);
        while(isNaN(peso)==true || peso<0 && peso>100)
        {
            peso=prompt("Error, ingrese peso valido:");
            peso=parseFloat(peso);
        }

        acumuladorPeso=acumuladorPeso+peso;

        estadoClinico=prompt("Ingrese estado clinico: enfermo, internado o adopcion");
        while(isNaN(estadoClinico)==false || estadoClinico!="enfermo" && estadoClinico!="internado" && estadoClinico!="adopcion")
        {
            estadoClinico=prompt("Error, ingrese estado clinico valido: enfermo, internado o adopcion");
        }

        if(estadoClinico=="enfermo") //b)El porcentaje de enfermos sobre el total de mascotas
        {
            contadorEnfermos=contadorEnfermos+1;
        }

        temperatura=prompt("ingrese temperatura de la mascota");
        temperatura=parseFloat(temperatura);
        while (isNaN(temperatura)==true || temperatura>40 && temperatura<0)
        {
            temperatura=prompt("Error, ingrese temperatura valida:");
            temperatura=parseFloat(temperatura);
        }
        //d)El animal sin pelo con menor temperatura corporal
        if(banderaMenorTemperatura==0 || pelaje=="sin pelo")
        {
            banderaMenorTemperatura=1;
            animalMenorTemperatura =tipoMascota;
            nombreAnimalMenorTemperatura=nombreMascota;
            menorTemperatura=temperatura;
        }
        else
        {
            if(pelaje=="sin pelo" && menorTemperatura>temperatura)
            {
                banderaMenorTemperatura=1;
                animalMenorTemperatura=tipoMascota;
                nombreAnimalMenorTemperatura=nombreMascota;
                menorTemperatura=temperatura;
            }
        }

        contadorMascotas=contadorMascotas+1;

        switch(tipoMascota)
        {
        case "gato":
        acumuladorGatos=acumuladorGatos+1;
        acumuladorTemperaturaGato=acumuladorTemperaturaGato+temperatura;
        break;

        case "perro":
        acumuladorPerros=acumuladorPerros+1;
        acumuladorTemperaturaPerro=acumuladorTemperaturaPerro+temperatura;
        if(contadorPerroPesado==0 || perroMasPesado<peso) //a)El perro mas pesado
        {
            perroMasPesado=peso;
            nombrePerroMasPesado=nombreMascota;
            contadorPerroPesado=1;
        }
        else
        {
            if(perroMasPesado<peso)
            {
                perroMasPesado=peso;
                nombrePerroMasPesado=nombreMascota;
                contadorPerroPesado=1;
            }
            else
            {
                perroMasPesado="No hay";
                nombrePerroMasPesado="No hay";
            }
            
        }   
        break;

        case "otra cosa": //c)El nombre de la ultima mascota de tipo "otra cosa"
        acumuladorOtraCosa=acumuladorOtraCosa=+1;
        ultimaOtraCosa=nombreMascota;
        acumuladorTemperaturaOtracosa=acumuladorTemperaturaOtracosa+temperatura;
        break;
        }
        
        respuesta=prompt("Desea continuar? si o no");

    } // fin while

    if(acumuladorTemperaturaGato>acumuladorTemperaturaPerro && acumuladorTemperaturaGato>acumuladorOtraCosa)
	{
		tipoMayorTemperatura="gato";
	}
	if(acumuladorTemperaturaPerro>acumuladorOtraCosa)
	{
		tipoMayorTemperatura="perro";
	}
	else
	{
		tipoMayorTemperatura="otra cosa";
	}

    porcentajeEnfermos=contadorEnfermos/contadorMascotas;
    //f)Sumando gatos y perros que porcentaje del total de mascotas son?
    porcentajeMascotas=(acumuladorPerros+acumuladorGatos)/contadorMascotas;
    console.log("porcentaje de perros y gatos " + porcentajeMascotas);

    promedioKilos=acumuladorPeso/contadorMascotas;

    console.log("El promedio total de kilos es: "+ promedioKilos);
    console.log("El perro mas pesado es:" + nombrePerroMasPesado + " y su peso es: " + perroMasPesado);
    console.log("El porcentaje de mascotas enfermos es: " + porcentajeEnfermos);
    console.log("El nombre de la ultima mascota de otra cosa es: " + ultimaOtraCosa);
    console.log("El animal sin pelo de menor temperatura es: " +animalMenorTemperatura + " y su nombre es: " + nombreAnimalMenorTemperatura);


}
