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
  }, 2000);
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
