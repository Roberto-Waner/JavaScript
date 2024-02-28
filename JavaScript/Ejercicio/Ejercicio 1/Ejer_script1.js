// 1- Hacer un programa usando una funcion que muestre el precio de compra de 5 articulos y luego 
// calcular su itbis. Haz un script que te calcule el 
// precio total que vas a pagar por tu compra. calcular:precio x itbis/100

// function Itbis (precio){
//     let itbis = (precio * 18) / 100;
//     return itbis;
// }

// function Total (precio){
//     let precio_itbis = precio + Itbis(precio);
//     return precio_itbis;
// }

// function Solicitar_Precio(){
//     let cant_articulos = parseInt(prompt("Ingrese la cantidad: "));

//     let articulos = new Array[cant_articulos];

//     for (let i=0; i < cant_articulos; i++){
//         let precio = prompt(`Ingrese el precio del artículo ${i+1}: `);
//         articulos[i] = precio;
//     }
    
//     return {articulos};
// }

// function CalcularTotal(articulos) {
//     let total = 0;

//     for (let i = 0; i < articulos.length; i++) {
//         let precio = articulos.articulos[i];
//         let precio_itbis = Total(precio);
//         total += precio_itbis;
//     }

//     return total;
// }

// let articulos = Solicitar_Precio();
// let total = CalcularTotal(articulos);
// console.log('El total de la compra es: ${total}');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Itbis(precio) {
    let itbis = (precio * 18) / 100;
    return itbis;
}

function Total(precio) {
    let precio_itbis = precio + Itbis(precio);
    return precio_itbis;
}

function Solicitar_Precio() {
    return new Promise((resolve) => {
        rl.question('Ingrese la cantidad de artículos: ', (cant_articulos) => {
            cant_articulos = parseInt(cant_articulos);

            let articulos = new Array(cant_articulos);

            let i = 0;

            function solicitarPrecio() {
                rl.question(`Ingrese el precio del artículo ${i + 1}: `, (precio) => {
                    articulos[i] = precio;
                    i++;

                    if (i < cant_articulos) {
                        solicitarPrecio();
                    } else {
                        resolve(articulos);
                    }
                });
            }

            solicitarPrecio();
        });
    });
}

function CalcularTotal(articulos) {
    let total = 0;

    for (let i = 0; i < articulos.length; i++) {
        let precio = articulos[i];
        let precio_itbis = Total(precio);
        total += precio_itbis;
    }

    return total;
}

Solicitar_Precio().then((articulos) => {
    let total = CalcularTotal(articulos);
    console.log('El total de la compra es: ${total}');
    rl.close();
});