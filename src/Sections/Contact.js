import { motion } from 'framer-motion';
import { sendEmail } from '../utils';
import { useState } from 'react';

const submit = (e, mailInfo) => {
  e.preventDefault();
  sendEmail(mailInfo);
}

export const Contact = () => {
  
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [proposal, setProposal] = useState();
  
  return (
  <motion.div
    exit={{ opacity: 0 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
  <div className="career-era">
    <h3> Realiza tu consulta </h3>
            <form id="contact-form" onSubmit={e => submit(e, {name, number, email, subject, proposal})}>
              <input
                type="text"
                id="name"
                placeholder="Nombre completo*"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <input
                type="tel"
                id="number"
                placeholder="Número de teléfono"
                value={number}
                size="20"
                onChange={e => setNumber(e.target.value)}
              />
              <input
                type="email"
                id="email"
                placeholder="Dirección de correo"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
              <input type="text" id="subject" placeholder="Asunto*" value={subject}
                onChange={e => setSubject(e.target.value)} />
              <textarea
                id="proposal"
                placeholder="Escribe aquí tu consulta...*"
                rows="12"
                onChange={e => setProposal(e.target.value)}
                value={proposal}
              ></textarea>
              <input type="submit" value="Enviar" />
            </form>

            <em id="loader" className="fa-solid fa-hand-holding-hand fa-2xl"></em>
            <div id="request-ok" className="career-era">
              <p>
                Petición enviada con éxito. Su mensaje será respondido a la
                mayor brevedad posible.
              </p>
              <button className="reset-form-btn" onClick="resetForm()">
                Escribir otro mensaje
              </button>
            </div>
            <div id="request-ko" className="career-era">
              <p>
                Ha ocurrido un error al enviar la petición. Por favor, inténtelo
                de nuevo o contacte por algún otro medio de comunicación.
              </p>
              <button className="reset-form-btn" onClick="resetForm()">
                Reiniciar el formulario
              </button>
            </div>
  </div>
  </motion.div>
);};
