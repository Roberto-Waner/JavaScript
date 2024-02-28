function contarSeleccionados(){
    let cant = 0;
    if(document.getElementById("checkBox1").checked){
        cant++;
    }

    if(document.getElementById("checkBox2").checked){
        cant ++;
    }

    if(document.getElementById("checkbox3").checked) {
        cant++;
    }

    if(document.getElementById("checkbox4").checked){
        cant++;
    }
    alert('Conoce '+ cant +' Lenguajes');
}