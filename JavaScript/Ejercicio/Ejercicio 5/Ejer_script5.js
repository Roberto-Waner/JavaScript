// 5- En una clase de 5 alumnos se han realizado tres examenes y se requiere determinar el numero de: 
//     a- Alumnos que aprobaron todos los examenes 
//     b- Alumnos que aprobaron al menos un examen
//     c- Alumnos que aprobaron unicamente el ultimo examen.

let estudiante, aprob_todo = 0, aprob_algunos = 0, aprob_ultimo = 0;
function Estudiantes(estudiante){
    estudiante = parseInt(prompt("Cantidad de Estudiantes a evaluar: "))
    document.write(`Cantidad de Estudiantes a evaluar: ${estudiante} <br>`);
    
    for(let i = 0; i < estudiante; i++){
        alert(`Ingrese las 3 notas del ${i+1}ro estudiante`)
        NotasIngresadas();
    }
    
    return estudiante;
}

function NotasIngresadas(){
    let nota = new Array(3)

    for(var i = 0; i < nota.length; i++){
        nota[i] = parseInt(prompt(`Ingresar la ${i + 1}ra nota del estudiante: `))
    }
    
    Calificacion(nota);
    return nota;
}

function Calificacion(nota){
    if(nota[0] >= 70 && nota[1] >= 70 && nota[2] >= 70){
        aprob_todo++
    }else if(nota[0] >= 70 || nota[1] >= 70 || nota[2] >= 70){
            aprob_algunos++
    }
    
    if(nota[2] >= 70 && nota[0] < 70 && nota[1] < 70){
        aprob_ultimo++
    }

    return nota;
}

Estudiantes(estudiante)

document.write(`Total de los Alumnos que aprobaron todos los examenes ${aprob_todo}` + " <br>")
document.write(`Total de los Alumnos que aprobaron al menos uno de los examenes ${aprob_algunos}` + "<br>")
document.write(`Total de los Alumnos que solo aprobaron el ultimo examen ${aprob_ultimo} <br>`)