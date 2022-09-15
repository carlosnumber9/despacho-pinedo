import { motion } from 'framer-motion';
import { send as sendMail } from '@emailjs/browser';
import { useState } from 'react';
import { Success } from './Success';
import { Error } from './Error';

const LOAD_STATE = {
  NONE: 'NONE',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

const DEFAULT_MAIL_INFO = {
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
};

export const Contact = () => {
  const [mailInfo, setMailInfo] = useState(DEFAULT_MAIL_INFO);
  const [loadState, setLoadState] = useState(LOAD_STATE.NONE);

  const submit = (e) => {
    e.preventDefault();
    setLoadState(LOAD_STATE.LOADING);
    sendMail(
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID,
      mailInfo,
      process.env.PUBLIC_KEY
    ).then(
      (result) => {
        console.info(
          `Request was sent succesfully. (${result.status}  ${result.text})`
        );
        setLoadState(LOAD_STATE.SUCCESS);
        return true;
      },
      (error) => {
        console.error(error);
        setLoadState(LOAD_STATE.ERROR);
        return true;
      }
    );
  };

  const resetForm = () => {
    setMailInfo(DEFAULT_MAIL_INFO);
    setLoadState(LOAD_STATE.NONE);
  };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="career-era">
        {loadState === LOAD_STATE.NONE && (
          <>
            <h3> Realiza tu consulta </h3>
            <form id="contact-form" onSubmit={submit}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nombre completo*"
                value={mailInfo.name}
                onChange={(e) =>
                  setMailInfo({ ...mailInfo, [e.target.name]: e.target.value })
                }
              />
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Número de teléfono"
                value={mailInfo.phone}
                size="20"
                onChange={(e) =>
                  setMailInfo({ ...mailInfo, [e.target.name]: e.target.value })
                }
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Dirección de correo"
                onChange={(e) =>
                  setMailInfo({ ...mailInfo, [e.target.name]: e.target.value })
                }
                value={mailInfo.email}
              />
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Asunto*"
                value={mailInfo.subject}
                onChange={(e) =>
                  setMailInfo({ ...mailInfo, [e.target.name]: e.target.value })
                }
              />
              <textarea
                id="message"
                name="message"
                placeholder="Escribe aquí tu consulta...*"
                rows="12"
                onChange={(e) =>
                  setMailInfo({ ...mailInfo, [e.target.name]: e.target.value })
                }
                value={mailInfo.message}
              ></textarea>
              <input type="submit" value="Enviar" />
            </form>
          </>
        )}

        {loadState === LOAD_STATE.LOADING && (
          <em id="loader" className="fa-solid fa-hand-holding-hand fa-2xl"></em>
        )}

        {loadState === LOAD_STATE.SUCCESS && (
          <Success onResetForm={resetForm}></Success>
        )}

        {loadState === LOAD_STATE.ERROR && (
          <Error onResetForm={resetForm}></Error>
        )}
      </div>
    </motion.div>
  );
};
