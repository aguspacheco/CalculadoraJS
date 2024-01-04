/* Selecciona el elemento de la pantalla y todos los botones */
const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

/* Resetea la pantalla a cero */
const resetearPantalla = () => {
  pantalla.textContent = "0";
};

/* borra el ultimo caracter de la pantalla */
const borrarUltimoCaracter = () => {
  pantalla.textContent =
    pantalla.textContent.length === 1 ? "0" : pantalla.textContent.slice(0, -1); // si la expresion es verdadero elimina el ultimo valor
};

/* Calcula la expresion en la pantalla */
const calcularExpresion = () => {
  try {
    pantalla.textContent = eval(pantalla.textContent); // evalua la expresion matematica
  } catch {
    pantalla.textContent = "ERROR AL CALCULAR";
  }
};

/* Agrega un carater a la pantalla */
const agregarCaracter = (caracter) => {
  pantalla.textContent =
    pantalla.textContent === "0" ? caracter : pantalla.textContent + caracter;
};

/* Agrega un event listener a cada boton */
botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const botonApretado = boton.textContent; //Obtiene el texto del boton apretado

    switch (
      boton.id //Evalua el ID del boton
    ) {
      case "c":
        resetearPantalla();
        break;
      case "borrar":
        borrarUltimoCaracter();
        break;
      case "igual":
        calcularExpresion();
        break;
      default:
        agregarCaracter(botonApretado); // Llama a la funcion agregarCaracter() con el texto del botón
    }
  });
});
