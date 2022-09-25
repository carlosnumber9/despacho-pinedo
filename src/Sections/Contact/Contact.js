import './contact.css';
import { send as sendMail } from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import { FadeWrapper } from '../../FadeWrapper';
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from '../../constants';
import { scrollToBottom } from '../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

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

  const firstRender = useRef(true);

  const formIsValid = () =>
    mailInfo.name &&
    mailInfo.phone &&
    mailInfo.email &&
    (mailInfo.subject || mailInfo.message);

  useEffect(() => {
    if (!firstRender.current) scrollToBottom();
    firstRender.current = false;
  });

  const resetForm = () => {
    setMailInfo(DEFAULT_MAIL_INFO);
    setLoadState(LOAD_STATE.NONE);
  };

  const handleSendError = (error) => {
    console.error(error);
    setLoadState(LOAD_STATE.ERROR);
    setTimeout(() => resetForm(), 2000);
    return true;
  };

  const submit = (e) => {
    e.preventDefault();
    if (formIsValid() && loadState === LOAD_STATE.NONE) {
      setLoadState(LOAD_STATE.LOADING);
      setTimeout(() => scrollToBottom(), 500);
      try {
        sendMail(SERVICE_ID, TEMPLATE_ID, mailInfo, PUBLIC_KEY).then(
          (result) => {
            console.info(
              `Request was sent succesfully. (${result.status}  ${result.text})`
            );
            setLoadState(LOAD_STATE.SUCCESS);
            setTimeout(() => resetForm(), 2000);
            return true;
          },
          (error) => handleSendError(error)
        );
      } catch (error) {
        handleSendError(error);
      }
    }
  };

  // const resetForm = () => {
  //   setMailInfo(DEFAULT_MAIL_INFO);
  //   setLoadState(LOAD_STATE.NONE);
  // };

  const getSubmitBtnStateClass = () => {
    switch (loadState) {
      case LOAD_STATE.SUCCESS:
        return 'submit-ok';
      case LOAD_STATE.LOADING:
        return 'submit-loading';
      case LOAD_STATE.ERROR:
        return 'submit-error';
      default:
        return '';
    }
  };

  return (
    <FadeWrapper>
      <div className="career-era">
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
          <button
            type="submit"
            className={`${
              formIsValid() ? 'enabled' : 'disabled'
            } ${getSubmitBtnStateClass()}`}
          >
            {loadState === LOAD_STATE.LOADING && (
              <FontAwesomeIcon
                icon={faSpinner}
                className={'fa-spin'}
                size={'3x'}
              />
            )}
            {loadState === LOAD_STATE.SUCCESS && (
              <FontAwesomeIcon icon={faCheck} size={'3x'} />
            )}
            {loadState === LOAD_STATE.ERROR && (
              <FontAwesomeIcon icon={faXmark} size={'3x'} />
            )}
            {loadState === LOAD_STATE.NONE && 'Enviar'}
          </button>
        </form>
      </div>
    </FadeWrapper>
  );
};
