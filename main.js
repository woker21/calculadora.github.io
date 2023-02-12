


function eliminarCaracter(){
    const input = document.getElementById("verResultado");
    input.value = input.value.slice(0, -1);
}



function lightMode(){
   const botonLight = document.getElementById("change-mode");
    botonLight.classList.remove("dark-mode-body");
    botonLight.classList.add("light-mode-body");
}

document.getElementById()