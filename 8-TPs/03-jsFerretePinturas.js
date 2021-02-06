/* Amarillo Matias
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

//( °C × 9/5) + 32 =  °F de Centígrados a Fahrenheit
//( °F − 32) × 5/9 =  °C de Fahrenheit a Centígrados

function FahrenheitCentigrados () 
{
	let F;
    let C;
    let resultado;

    F = parseInt(document.getElementById ("txtIdTemperatura").value);
    C = (F-32) * 5/9;

    resultado = C;

    alert ("La temperatura en centigrados es " + C);
}

function CentigradosFahrenheit () 
{
	let C;
    let F;
    let resultado;

    C = parseInt(document.getElementById ("txtIdTemperatura").value);
    F = ( C*9/5) + 32;

    resultado = F;

    alert ("La temperatura en centigrados es " + F);
}
