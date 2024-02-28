// 1- Hacer un programa usando una funcion que muestre el precio de compra de 5 articulos y luego 
// calcular su itbis. Haz un script que te calcule el 
// precio total que vas a pagar por tu compra. calcular:precio x itbis/100

function Itbis (articulos){
    let itbis = (articulos * 18) / 100;
    return itbis;
}

function Total (articulos){
    return articulos;
}

function Solicitar_Precio(){
    let cant_articulos = parseInt(prompt("Ingrese la cantidad: "));

    let articulos = new Array(cant_articulos);

    for (let i=0; i < cant_articulos; i++){
        let precio = parseFloat(prompt(`Ingrese el precio del artículo ${i+1}: `));
        articulos[i] = precio;
    }
    
    return {articulos};
}

function CalcularTotal(articulos) {
    let total = 0;

    for (let i = 0; i < articulos.length; i++) {
        let precio = articulos[i];
        total += precio;
    }

    return total;
}

let articulos = Solicitar_Precio();
let total = CalcularTotal(articulos);
console.log(`El total de la compra es: ${total}`);