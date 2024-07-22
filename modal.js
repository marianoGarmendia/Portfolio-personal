import { btnVerMasProject } from "./index.js";
// import { imgContainerSlider } from "./index.js";

export const modalFunction = () => {
  btnVerMasProject.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.id.includes("trainingfy")) {
        const imgContainerSlider = document.querySelector(
          ".img-container-slider"
        );
        const modalTrainingFy = document.querySelector(".modal-trainingfy");

        modalsSlider(imgContainerSlider, modalTrainingFy, 900);
      } else if (btn.id.includes("task-app")) {
        const imgContainerSlider = document.querySelector(".slider-taskapp");
        const modalTaskApp = document.querySelector(".modal-taskapp");

        modalsSlider(imgContainerSlider, modalTaskApp, 900);
      } else if (btn.id.includes("piedra-papel-tijera")) {
        const imgContainerSlider = document.querySelector(".slider-ppt");
        const modalPpt = document.querySelector(".modal-piedrapapeltijera");
        modalsSlider(imgContainerSlider, modalPpt, 900);
      } else if (btn.id.includes("memory-poke")) {
        const imgContainerSlider = document.querySelector(
          ".slider-memory-poke"
        );
        const modalMmemoryPoke = document.querySelector(".modal-memory-poke");
        modalsSlider(imgContainerSlider, modalMmemoryPoke, 900);
      } else if (btn.id.includes("pizza-prima")) {
        const imgContainerSlider = document.querySelector(".slider-pizzaprima");
        const modalPizzaPrima = document.querySelector(".modal-pizzaprima");
        modalsSlider(imgContainerSlider, modalPizzaPrima, 900);
      } else if (btn.id.includes("portfolio")) {
        const imgContainerSlider = document.querySelector(".slider-portfolio");
        const modalPortfolio = document.querySelector(".modal-portfolio");
        modalsSlider(imgContainerSlider, modalPortfolio, 900);
      } else if (btn.id.includes("component-css")) {
        const imgContainerSlider = document.querySelector(
          ".slider-components-css"
        );
        const modalPortfolio = document.querySelector(".modal-components-css");
        modalsSlider(imgContainerSlider, modalPortfolio, 900);
      } else if (btn.id.includes("oneclick")) {
        const imgContainerSlider = document.querySelector(
          ".img-container-slider"
        );
        const modalPortfolio = document.querySelector(".modal-oneClick");
        modalsSlider(imgContainerSlider, modalPortfolio, 900);
      }
    });
  });
};

const sliderOn = (slider, distancia, move = 300) => {
  const interval = setInterval(() => {
    slider.style.transform = `translate(-${move}px)`;
    slider.classList.add("slider");

    move = move + 300;
    if (move === distancia) {
      clearInterval(interval);
    }
  }, 1500);
};

const modalsSlider = (slider, modal, distancia) => {
  sliderOn(slider, distancia);
  modal.classList.add("is-active");
  const modalBg = document.querySelectorAll(".close-modal , .modal-content");

  modalBg.forEach((closer) => {
    closer.addEventListener("click", () => {
      slider.style.transform = "translate(0)";
      slider.classList.remove("slider");

      closer.parentNode.classList.remove("is-active");
    });
  });
};
