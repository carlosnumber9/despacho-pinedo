import { useEffect, useRef } from 'react';
import { FadeWrapper } from '../FadeWrapper';
import { scrollToBottom } from '../utils';

export const Background = () => {
  const firstRender = useRef(true);

  useEffect(() => {
    if (!firstRender.current) scrollToBottom();
    firstRender.current = false;
  });

  return (
    <FadeWrapper>
      <div className="career-era">
        <div className="era-time">
          <strong>2006-Actualidad</strong>
        </div>
        <p>
          Dedicación fundamentada en la resolución de pleitos de múltiples
          disciplinas, especialmente las dirigidas a lo civil y lo laboral.
        </p>
      </div>

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
          Responsable jurídico en <strong>asesoría empresarial</strong>.
        </p>
      </div>

      <div className="career-era">
        <div className="era-time">
          <strong>1999</strong>
        </div>
        <p>
          Letrado del Servicio de Orientación Jurídica del Excmo. Ayuntamiento
          de Madrid.
        </p>
      </div>

      <div className="career-era">
        <div className="era-time">
          <strong>1987</strong>
        </div>
        <p>Colegiación en Ilustre Colegio de Abogados de Madrid.</p>
      </div>
    </FadeWrapper>
  );
};
