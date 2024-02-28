function mostrarSeleccionado(){
    if (document.getElementById('radio1').checked) {
        alert('no tienes estudios');
    }
    if (document.getElementById('radio2').checked) {
        alert('tienes estudios primarios');
    }
    if (document.getElementById('radio3').checked) {
        alert('tienes estudios secundarios');
    }
    if (document.getElementById('radio4').checked) {
        alert('tienes estudios universitarios');
    }
}