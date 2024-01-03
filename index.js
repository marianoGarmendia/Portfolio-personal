import { menuSkills } from "./menuSkills.js";
import { modalFunction } from "./modal.js";

export const lineaAnimada = document.querySelector(".linea-animada");
export const liEl = document.querySelectorAll(".li");
export const boxSkills = document.querySelectorAll(".box-skills");

export const btnVerMasProject = document.querySelectorAll(".ver-mas-project");

// const descargarCV = document.querySelector("#descargarCV");
// descargarCV.addEventListener("click", descargarPDF);

// function descargarPDF() {
//   // Crear un elemento <a> con el enlace al archivo PDF
//   const enlace = document.createElement("a");
//   enlace.href =
//     "https://docs.google.com/forms/d/1h7VZfI99VEPSYMEr-XUObz3U5MgLayYr1z8NEZlNOEY/edit";
//   enlace.target = "_blank"; // Coloca aquí la ruta a tu archivo PDF
//   enlace.download = "Evaluacion-fuerza-g10.pdf"; // Nombre que tendrá el archivo al descargarlo
//   enlace.click(); // Simular el clic en el enlace para iniciar la descarga
// }

function main() {
  menuSkills();
  modalFunction();
  // modalsSlider();
  // sliderImgProject();
}
main();
