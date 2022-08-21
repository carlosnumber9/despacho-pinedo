// Sections names must be lowercase, as they refer to a HTML DIV id
export const SECTIONS = ["present", "background", "contact"];

export const addSectionButtonsHandlers = () =>
  document.querySelectorAll(".button").forEach((element) => {
    element.addEventListener("click", () => {
      let sectionName = element.parentElement.id.split("-")[0];
      showSection(sectionName);
    });
  });

export const showSection = (sectionToShow) => {
  SECTIONS.filter((section) => section !== sectionToShow).forEach((section) =>
    fadeOut(section)
  );
  fadeIn(sectionToShow);
}

export const fadeOut = (section) => {
  const sectionInDOM = document.querySelector("#" + section);
  sectionInDOM.style.display = "none";
  // Force to reflow
  sectionInDOM.clientHeight;
  sectionInDOM.style.opacity = 0;
};

export const fadeIn = (section, displayValue = "flex") => {
  const sectionInDOM = document.querySelector("#" + section);
  sectionInDOM.style.display = displayValue;
  sectionInDOM.style.flexDirection = "column";
  sectionInDOM.style.alignItems = "center";
  // Force to reflow
  sectionInDOM.clientHeight;
  sectionInDOM.style.opacity = 1;
};
