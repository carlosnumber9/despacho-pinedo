import { send as sendMail } from '@emailjs/browser';

const SERVICE_ID = 'despacho-pinedo';
const TEMPLATE_ID = 'template_ga9zeni';
export const PUBLIC_KEY = 'HwmI6C4bzu7qcXn3y';

const getTemplateParams = (mailInfo) => ({
  subject: mailInfo.subject,
  name: mailInfo.name,
  phone: mailInfo.number,
  email: mailInfo.email,
  message: mailInfo.proposal,
});

export const sendEmail = (mailInfo) =>
  sendMail(SERVICE_ID, TEMPLATE_ID, getTemplateParams(mailInfo), PUBLIC_KEY)
    .then(
      (result) => {
        console.info(
          `Request was sent succesfully. (${result.status}  ${result.text})`
        );
        // TODO: Show success component
      },
      (error) => {
        console.error(error);
        // TODO: Show error component
      }
    );
