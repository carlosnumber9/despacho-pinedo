import { motion } from 'framer-motion';

export const Background = () => (
  <motion.div
    exit={{ opacity: 0 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
  <div className="career-era">
    <div className="career-era">
      <div className="era-time">
        <strong>2004-2006</strong>
      </div>
      <p>
        Letrado del turno de oficio en sus especialidades{' '}
        <strong>laboral y civil</strong>, tanto en el turno general
        (Procedimientos Ordinarios en Primera Instancia y Recursos de
        Suplicación), como en el turno especial (Recursos de Casación). Hasta
        febrero de 2006.
      </p>
    </div>

    <div className="career-era">
      <div className="era-time">
        <strong>1999-2004</strong>
      </div>
      <p>
        Responsable jurídico de <strong>asesoría empresarial</strong>. Solicito
        mi baja en dicha empresa en el mes de noviembre de 2004.
      </p>
    </div>

    <div className="career-era">
      <div className="era-time">
        <strong>1999</strong>
      </div>
      <p>
        Letrado del Servicio de Orientación Jurídica del Excmo. Ayuntamiento de
        Madrid. Finalizo mis servicios en el mes de octubre.
      </p>
    </div>

    <div className="career-era">
      <div className="era-time">
        <strong>1987</strong>
      </div>
      <p>Colegiación en Ilustre Colegio de Abogados de Madrid.</p>
    </div>
  </div>
  </motion.div>
);
