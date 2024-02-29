// 2- Escribe un programa que solicite al usuario ingresar el número de kilómetros 
// recorridos por su coche y el número de litros consumidos . El script debe mostrar el 
// consumo de combustible por kilómetro.

function main(km, litros){
    km = parseFloat(prompt("Ingrese los Kilometros recoridos: "));
    litros = parseFloat(prompt("Ingrese los Litros Consumidos: "))

    let consumo = km / litros;
    let consumo1 = consumo.toFixed(2);
    

    alert(`Kilometros recorridos: ${km}` 
    + "\n" + `Litros consumidos: ${litros}`
    + "\n"+ `El consumo de Combustible es de ${consumo1} Km/L `);
}

main();