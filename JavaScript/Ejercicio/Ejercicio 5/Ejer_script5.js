// 5- En una clase de 5 alumnos se han realizado tres examenes y se requiere determinar el numero de: 
//     a- Alumnos que aprobaron todos los examenes 
//     b- Alumnos que aprobaron al menos un examen
//     c- Alumnos que aprobaron unicamente el ultimo examen.

let estudiante, aprob_todo = 0, aprob_algunos = 0, aprob_ultimo = 0;

function NotasIngresadas(){
    let nota = new Array(3)

    for(let i = 0; i < nota.length; i++){
        nota[i] = parseInt(prompt(`Ingresar la ${i + 1}ra nota del estudiante: `))
    }

    return nota;
}

function Estudiantes(){
    estudiante = parseInt(prompt("Cantidad de Estudiantes a evaluar: "))

    for(let i = 0; i < estudiante; i++){

    }
}