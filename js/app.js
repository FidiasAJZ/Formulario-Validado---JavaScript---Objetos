import { valida } from "./validaciones.js";

//Seleccionar todos los inputs
const inputs = document.querySelectorAll("input");

//Les agrega el listener cuando salgan del foco y llame la funcion en el otro archivo.
inputs.forEach((input) => {
    input.addEventListener("blur", (input) =>{
        valida(input.target);
    });
});