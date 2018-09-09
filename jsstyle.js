
// function js_style() {
//     document.getElementById("text").style.color = "black";
//     document.getElementById("text").style.background = "blue";
// }


// // escriba una funcion que al momento de salir del input valide si este esta vacio, en caso tal hacer que el 
// boton submit quede deshabilitado

function empty(x) {
    if (x.value == "") {
        document.getElementById("btn").disabled = true; 
    } else {
        document.getElementById("btn").disabled = false;
    }
}

