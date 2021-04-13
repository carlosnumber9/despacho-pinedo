var CONTACT_FIELDS = {
  NAME: "name",
  TELEPHONE: "number",
  EMAIL: "email",
  SUBJECT: "subject",
  PROPOSAL: "proposal",
};

const SECTIONS = ['background', 'contact'];

function addSectionButtonsHandlers() {
  document.querySelectorAll(".button").forEach(element => {
    element.addEventListener('click', () => {
      let sectionName = element.id.split('-')[0];
      showSection(sectionName); 
    });
  });
}

function showSection(sectionToShow) {
  
  SECTIONS
  .filter(section => section !== sectionToShow)
  .forEach(section => fadeOut(section));

  fadeIn(sectionToShow);
}

function fadeOut(section) {
  let sectionInDOM = document.querySelector('#' + section);
  sectionInDOM.style.display = 'none';
  // Force to reflow
  sectionInDOM.clientHeight;
  sectionInDOM.style.opacity = 0;
}

function fadeIn(section) {
  let sectionInDOM = document.querySelector('#' + section);
  sectionInDOM.style.display = 'flex';
  sectionInDOM.style.flexDirection = 'column';
  // Force to reflow
  sectionInDOM.clientHeight;
  sectionInDOM.style.opacity = 1;
}



document.addEventListener("DOMContentLoaded", function(event) { 
  showSection(SECTIONS[0]);
  addSectionButtonsHandlers();
});
