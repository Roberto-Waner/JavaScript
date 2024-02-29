// 3-  convertir a segundos una medida de tiempo dada en horas y minutos.

function convertir_horas_seg (hora){
    let seg = 3600;//1 HORA EN SEGUNDOS ES 3600
    let convertidor = hora * seg;

    return convertidor;
}

function convertir_minutos_seg (minutos){
    let seg = 60;//1 MINUTO EN SEGUNDOS ES 60
    let convertidor = minutos * seg;
    
    return convertidor;
}

let hora = parseInt(prompt("Ingrese la hora: "))
let minutos = parseInt(prompt ("Ingrese los minutos: "))

let SegundosH = convertir_horas_seg(hora);
let SegundosM = convertir_minutos_seg(minutos);

alert(`La Hora: ${hora} a Segundos: ${SegundosH}` + `\n`+
    `Los Minutos: ${minutos} a Segundos: ${SegundosM}`);