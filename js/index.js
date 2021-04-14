import { sendEmail } from "./email.js";

const SECTIONS = ["background", "contact"];

const CONTACT_FIELDS = {
  NAME: "name",
  TELEPHONE: "number",
  EMAIL: "email",
  SUBJECT: "subject",
  PROPOSAL: "proposal",
};

const FORM_VALIDATION = {
  OK: "OK",
  KO: "KO",
};

function addSectionButtonsHandlers() {
  document.querySelectorAll(".button").forEach((element) => {
    element.addEventListener("click", () => {
      let sectionName = element.id.split("-")[0];
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

function fadeIn(section, displayValue = 'flex') {
  let sectionInDOM = document.querySelector("#" + section);
  sectionInDOM.style.display = displayValue;
  sectionInDOM.style.flexDirection = "column";
  sectionInDOM.style.alignItems = "center";
  // Force to reflow
  sectionInDOM.clientHeight;
  sectionInDOM.style.opacity = 1;
}

function submit() {
  const mailInfo = {};
  for (const field in CONTACT_FIELDS) {
    mailInfo[CONTACT_FIELDS[field]] = document.querySelector("#" + CONTACT_FIELDS[field]).value;
  }

  if (validateForm(mailInfo) === FORM_VALIDATION.OK) sendEmail(mailInfo);
}

window.submit = submit;

function validateForm(mailInfo) {
  if (necessaryInfoIsFilled(mailInfo)) {
    fadeOut("contact-form");
    fadeIn("loader", 'unset');
    return FORM_VALIDATION.OK;
  } else {
    console.error("Must complete form info first.");

    if (!mailInfo[CONTACT_FIELDS.NAME]) notifyEmptyField(CONTACT_FIELDS.NAME);
    if (!mailInfo[CONTACT_FIELDS.SUBJECT])
      notifyEmptyField(CONTACT_FIELDS.SUBJECT);
    if (!mailInfo[CONTACT_FIELDS.PROPOSAL])
      notifyEmptyField(CONTACT_FIELDS.PROPOSAL);

    if (!number && !email) {
      notifyEmptyField(CONTACT_FIELDS.TELEPHONE);
      notifyEmptyField(CONTACT_FIELDS.EMAIL);
    }

    return FORM_VALIDATION.KO;
  }
}

function necessaryInfoIsFilled(mailInfo) {
  return mailInfo[CONTACT_FIELDS.NAME] &&
         mailInfo[CONTACT_FIELDS.SUBJECT] &&
         mailInfo[CONTACT_FIELDS.PROPOSAL] &&
         (mailInfo[CONTACT_FIELDS.TELEPHONE] || mailInfo[CONTACT_FIELDS.PROPOSAL]);
}

function notifyEmptyField(field) {
  const fieldInDOM = document.querySelector("#" + field);
  const interval = setInterval(() => {
    fieldInDOM.classList.toggle("empty-field");
  }, 200);
  setTimeout(() => {
    clearInterval(interval);
    fieldInDOM.classList.remove("empty-field");
  }, 3000);
}

document.addEventListener("DOMContentLoaded", function (event) {
  showSection(SECTIONS[0]);
  addSectionButtonsHandlers();
});
