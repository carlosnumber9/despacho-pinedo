
var CONTACT_FIELDS = {
    NAME: "name",
    TELEPHONE: "number",
    EMAIL: "email",
    SUBJECT: "subject",
    PROPOSAL: "proposal",
  };




function addSectionButtonsHandlers() {
  $("#background-btn").click(() => {
    $("#links")
      .fadeOut(500)
      .promise()
      .done(() => {
        $("#background").fadeIn(500);
      });
  });

  $("#links-btn").click(() => {
    $("#background")
      .fadeOut(500)
      .promise()
      .done(() => {
        $("#links").fadeIn(500);
      });
  });
}

function addContactFormButtonHandler() {
  let contactButton = $("#contact-button");
  let contactFormContainer = $("#contact-form-container");
  let contactTitle = $(".contact-title");
  let contactForm = $("#contact-form");

  contactButton.click(() => {
    contactButton.animate(
      {
        width: "0px",
        height: "0px",
        bottom: "40px",
        right: "40px",
      },
      400,
      () => {
        contactButton.fadeOut();
        contactFormContainer
          .fadeIn(200)
          .promise()
          .done(() => {
            contactFormContainer.css("display", "flex");
            contactTitle.fadeIn();
            contactForm.fadeIn();
            contactForm.css("display", "flex");
          });
      }
    );
  });
}

function closeContactWindow() {
    var contactButton = $("#contact-button");
    var contactFormContainer = $("#contact-form-container");
  
    contactFormContainer
      .fadeOut(200)
      .promise()
      .done(() => {
        contactButton
          .fadeIn(50)
          .promise()
          .done(() => {
            contactButton.animate(
              {
                width: "100px",
                height: "100px",
                bottom: "10px",
                right: "10px",
              },
              400
            );
          });
      });
  }

  function notifyEmptyField(field) {
    var field = $("#" + field);
    var interval = setInterval(() => {
      field.toggleClass("empty-field");
    }, 200);
    setTimeout(() => {
      clearInterval(interval);
      field.removeClass('empty-field');
    }, 3000);
  }

  
function sendMail(mailInfo) {
    var TOKEN = "4f546ef8-53a3-47d7-a3f8-a9204c81e283";
    Email.send({
      SecureToken: TOKEN,
      To: "cpinedocsb@gmail.com",
      From: "carlospinedoabogado@paginapersonal.com",
      Subject: "Nueva consulta: " + mailInfo.subject,
      Body: getEmailMessage(mailInfo),
    }).then((message) => {
      if (message === "OK") {
        console.debug("Mail sent succesfully.");
        $("#sending-icon")
          .fadeOut(100)
          .promise()
          .done(() => {
            $("#mail-sent-text").fadeIn();
          });
      } else console.error(message);
    });
  }
  
  function getEmailMessage(mailInfo) {
    var beginning =
      "Has recibido una nueva consulta en tu página personal.<br><br>";
  
    var name = "Nombre: " + mailInfo.name + "<br>";
    var number = mailInfo.number
      ? "Teléfono: " + mailInfo.number + "<br>"
      : undefined;
    var email = mailInfo.email ? "Correo: " + mailInfo.email + "<br>" : undefined;
    var message = "Mensaje: " + mailInfo.proposal;
  
    var completeMessage = beginning + name;
    if (number) completeMessage = completeMessage.concat(number);
    if (email) completeMessage = completeMessage.concat(email);
  
    completeMessage = completeMessage.concat(message);
    return completeMessage;
  }


  function submit() {
    var nameSelector = $("#" + CONTACT_FIELDS.NAME);
    var numberSelector = $("#" + CONTACT_FIELDS.TELEPHONE);
    var emailSelector = $("#" + CONTACT_FIELDS.EMAIL);
    var subjectSelector = $("#" + CONTACT_FIELDS.SUBJECT);
    var proposalSelector = $("#" + CONTACT_FIELDS.PROPOSAL);
  
    var name = nameSelector.val();
    var subject = subjectSelector.val();
    var proposal = proposalSelector.val();
    var number = numberSelector.val();
    var email = emailSelector.val();
  
    notifyEmptyField("name");
  
    if (name && subject && proposal && (number || email)) {
      $("#contact-form")
        .fadeOut(200)
        .promise()
        .done(() => {
          $("#sending-icon")
            .fadeIn(100)
            .promise()
            .done(() => {
              var mailInfo = {
                name: name,
                number: number,
                email: email,
                subject: subject,
                proposal: proposal,
              };
  
              sendMail(mailInfo);
            });
        });
    } else {
      console.error("Must complete form info first.");
  
      if (!name) notifyEmptyField(CONTACT_FIELDS.NAME);
      if (!subject) notifyEmptyField(CONTACT_FIELDS.SUBJECT);
      if (!proposal) notifyEmptyField(CONTACT_FIELDS.PROPOSAL);
  
      if (!number && !email) {
        notifyEmptyField(CONTACT_FIELDS.TELEPHONE);
        notifyEmptyField(CONTACT_FIELDS.EMAIL);
      }
    }
  }

$(document).ready(function () {
  $("#background").fadeIn();
  addSectionButtonsHandlers();
  addContactFormButtonHandler();
});
