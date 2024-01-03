import { liEl, lineaAnimada, boxSkills } from "./index.js";

export const menuSkills = () => {
  liEl.forEach((li) => {
    li.id == "frontend"
      ? li.classList.add("li-select") & skillVisible(li)
      : null;

    li.addEventListener("click", (e) => {
      liEl.forEach((enlace) => {
        enlace.classList.contains("li-select") &&
          enlace.classList.remove("li-select");
      });

      li.classList.add("li-select");
      if (li.id == "frameworks") {
        lineaAnimada.style.transform = "translateY(45px)";
      }
      if (li.id == "frontend") {
        lineaAnimada.style.transform = "translateY(0)";
      }
      if (li.id == "herramientas") {
        lineaAnimada.style.transform = "translateY(88px)";
      }
      if (li.id == "habilidades-blandas") {
        lineaAnimada.style.transform = "translateY(133px)";
      }
      skillVisible(li);
    });
  });
};

const skillVisible = (li) => {
  boxSkills.forEach((box) => {
    box.id == li.id
      ? (box.style.display = "block")
      : (box.style.display = "none");
  });
};
