import { PUBLIC_KEY } from "./email.js";

// Sections names must be lowercase, as they refer to a HTML DIV id
const SECTIONS = ["present", "background", "contact"];

function addSectionButtonsHandlers() {
  document.querySelectorAll(".button").forEach((element) => {
    element.addEventListener("click", () => {
      let sectionName = element.parentElement.id.split("-")[0];
      showSection(sectionName);
    });
  });
}

function showSection(sectionToShow) {
  SECTIONS.filter((section) => section !== sectionToShow).forEach((section) =>
    fadeOut(section)
  );
  fadeIn(sectionToShow);
}

function fadeOut(section) {
  let sectionInDOM = document.querySelector("#" + section);
  sectionInDOM.style.display = "none";
  // Force to reflow
  sectionInDOM.clientHeight;
  sectionInDOM.style.opacity = 0;
}

function fadeIn(section, displayValue = "flex") {
  let sectionInDOM = document.querySelector("#" + section);
  sectionInDOM.style.display = displayValue;
  sectionInDOM.style.flexDirection = "column";
  sectionInDOM.style.alignItems = "center";
  // Force to reflow
  sectionInDOM.clientHeight;
  sectionInDOM.style.opacity = 1;
}

document.addEventListener("DOMContentLoaded", function () {
  showSection(SECTIONS[0]);
  addSectionButtonsHandlers();
  emailjs.init(PUBLIC_KEY);
});
