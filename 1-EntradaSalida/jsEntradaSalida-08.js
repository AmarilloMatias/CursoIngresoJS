/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numero1

	let numero2

	let resultado
	
	numero1= document.getElementById("txtIdNumeroDividendo").value;

	numero1 = parseInt(numero1);

	//numero1= parseInt(document.getElementById("txtIdNumeroUno").value);

	numero2= document.getElementById("txtIdNumeroDivisor").value;

	numero2= parseInt(numero2);

	resultado = numero1 / numero2;
	console.log(resultado)

	//resto=numero1%numero2  

	

	alert("El resto es " + resultado);
}
