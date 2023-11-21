const lineaAnimada = document.querySelector(".linea-animada");
const liEl = document.querySelectorAll(".li");
liEl.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(li.classList.add);
    liEl.forEach((enlace) => {
      enlace.classList.contains("li-select") &&
        enlace.classList.remove("li-select");
    });

    li.classList.add("li-select");
    if (li.textContent == "About") {
      lineaAnimada.style.transform = "translateY(45px)";
    }
    if (li.textContent == "Proyect") {
      lineaAnimada.style.transform = "translateY(0)";
    }
    if (li.textContent == "Contact") {
      lineaAnimada.style.transform = "translateY(88px)";
    }
    if (li.textContent == "Social") {
      lineaAnimada.style.transform = "translateY(133px)";
    }
  });
});
