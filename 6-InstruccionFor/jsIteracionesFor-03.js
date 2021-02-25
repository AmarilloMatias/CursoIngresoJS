function mostrar()
{

	let repeticiones;
	let contador;
	
	contador=0;

	
	repeticiones= prompt("ingrese el número de repeticiones");
	repeticiones=parseInt(repeticiones);
	while(isNaN(repeticiones)==true)
	{
		repeticiones=prompt("re ingrese repeticiones");
		repeticiones=parseInt(repeticiones);
	}

	for(contador=0;contador<repeticiones;contador++)
	{
		contador*alert("Hola UTN FRA");
	}
	
	

}//FIN DE LA FUNCIÓN
//Amarillo Matias