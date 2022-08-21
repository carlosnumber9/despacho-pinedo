import { fadeIn, fadeOut } from "./sections.js";

const SERVICE_ID = "despacho-pinedo";
const TEMPLATE_ID = "template_ga9zeni";
export const PUBLIC_KEY = "HwmI6C4bzu7qcXn3y";

const getTemplateParams = (mailInfo) => ({
  subject: mailInfo.subject,
  name: mailInfo.name,
  phone: mailInfo.number,
  email: mailInfo.email,
  message: mailInfo.proposal,
});

export const sendEmail = (mailInfo) =>
  emailjs
    .send(SERVICE_ID, TEMPLATE_ID, getTemplateParams(mailInfo), PUBLIC_KEY)
    .then(
      (result) => {
        console.info(
          `Request was sent succesfully. (${result.status}  ${result.text})`
        );
        fadeOut("loader");
        fadeIn("request-ok");
      },
      (error) => {
        console.error(error);
        fadeOut("loader");
        fadeIn("request-ko");
      }
    );
