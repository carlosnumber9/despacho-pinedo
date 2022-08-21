// Sections names must be lowercase, as they refer to a HTML DIV id
export const SECTIONS = ["present", "background", "contact"];

export const addSectionButtonsHandlers = () =>
  document.querySelectorAll(".button").forEach((element) => {
    element.addEventListener("click", () => {
      let sectionName = element.parentElement.id.split("-")[0];
      showSection(sectionName);
    });
  });

export const showSection = (sectionToShow) =>
  SECTIONS.forEach((section) => {
    if (section !== sectionToShow) fadeOut(section);
    else fadeIn(section);
  });

export const fadeOut = (section) => {
  const element = document.querySelector("#" + section);
  if (!element.classList.contains("hidden")) element.classList.add("hidden");
};

export const fadeIn = (section) => {
  const element = document.querySelector("#" + section);
  if (element.classList.contains("hidden")) element.classList.remove("hidden");
};
