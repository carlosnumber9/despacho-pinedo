import { sendEmail } from "./email.js";
import { fadeIn, fadeOut } from "./sections.js";

const CONTACT_FIELDS = {
  NAME: "name",
  TELEPHONE: "number",
  EMAIL: "email",
  SUBJECT: "subject",
  PROPOSAL: "proposal",
};

const getFormInfo = () => {
  const mailInfo = {};
  for (const field in CONTACT_FIELDS) {
    mailInfo[CONTACT_FIELDS[field]] = document.querySelector(
      "#" + CONTACT_FIELDS[field]
    ).value;
  }
  return mailInfo;
};

export const submit = () => {
  const mailInfo = getFormInfo();
  if (validate(mailInfo)) sendEmail(mailInfo);
};

window.submit = submit;

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

const notifyEmptyFields = (fields) =>
  fields.forEach((field) => notifyEmptyField(field));

function validate(mailInfo) {
  if (necessaryInfoIsFilled(mailInfo)) {
    fadeOut("contact-form");
    fadeIn("loader", "unset");
    return true;
  } else {
    console.error("Must complete form info first.");

    const fieldsToNotify = Object.values(CONTACT_FIELDS).filter(
      (field) => !mailInfo[field]
    );
    notifyEmptyFields(fieldsToNotify);

    return false;
  }
}

function necessaryInfoIsFilled(mailInfo) {
  return (
    mailInfo[CONTACT_FIELDS.NAME] &&
    mailInfo[CONTACT_FIELDS.SUBJECT] &&
    mailInfo[CONTACT_FIELDS.PROPOSAL] &&
    (mailInfo[CONTACT_FIELDS.TELEPHONE] || mailInfo[CONTACT_FIELDS.PROPOSAL])
  );
}

const resetForm = () => {
  fadeOut("request-ok");
  fadeOut("request-ko");
  fadeIn("contact-form");

  for (const field in CONTACT_FIELDS) {
    document.querySelector("#" + CONTACT_FIELDS[field]).value = "";
  }
};

window.resetForm = resetForm;
