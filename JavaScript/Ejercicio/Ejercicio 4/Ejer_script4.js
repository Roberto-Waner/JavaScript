// 4- Crear un array llamado meses y que almacene el nombre de los doce 
// meses del año. Mostrar por pantalla los doce nombres utilizando 
// la función
let meses = []

function mostrarMeses() {
    meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
}

function imprimir(){
    for(let i = 0; i < meses.length; i++) {
        document.write(`Mes ${i+1}: ${meses[i]}` +"<br>");
    }
}

mostrarMeses();
imprimir();