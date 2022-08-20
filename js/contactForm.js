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
  
  function submit() {
    const mailInfo = {};
    for (const field in CONTACT_FIELDS) {
      mailInfo[CONTACT_FIELDS[field]] = document.querySelector("#" + CONTACT_FIELDS[field]).value;
    }
  
    if (validateForm(mailInfo) === FORM_VALIDATION.OK) sendEmail(mailInfo);
  }
  
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