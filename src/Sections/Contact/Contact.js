import { send as sendMail } from '@emailjs/browser';
import { useState } from 'react';
import { Success, Error } from '.';
import { FadeWrapper } from '../../FadeWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from '../../constants';

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

  const handleSendError = (error) => {
    console.error(error);
    setLoadState(LOAD_STATE.ERROR);
    return true;
  };

  const submit = (e) => {
    e.preventDefault();
    setLoadState(LOAD_STATE.LOADING);
    try {
      sendMail(SERVICE_ID, TEMPLATE_ID, mailInfo, PUBLIC_KEY).then(
        (result) => {
          console.info(
            `Request was sent succesfully. (${result.status}  ${result.text})`
          );
          setLoadState(LOAD_STATE.SUCCESS);
          return true;
        },
        (error) => handleSendError(error)
      );
    } catch (error) {
      handleSendError(error);
    }
  };

  const resetForm = () => {
    setMailInfo(DEFAULT_MAIL_INFO);
    setLoadState(LOAD_STATE.NONE);
  };

  return (
    <FadeWrapper>
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
          <FadeWrapper>
            <FontAwesomeIcon icon={faSpinner} id="loader" size="4x" />
          </FadeWrapper>
        )}

        {loadState === LOAD_STATE.SUCCESS && (
          <FadeWrapper>
            <Success onResetForm={resetForm}></Success>
          </FadeWrapper>
        )}

        {loadState === LOAD_STATE.ERROR && (
          <FadeWrapper>
            <Error onResetForm={resetForm}></Error>
          </FadeWrapper>
        )}
      </div>
    </FadeWrapper>
  );
};
