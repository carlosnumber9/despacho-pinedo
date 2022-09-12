import { motion } from 'framer-motion';

export const Present = () => (
  <motion.div
    exit={{ opacity: 0 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <div className="career-era">
      <p>
        Ejerciente como abogado, asistiendo a clientes a nivel judicial y
        extrajudicial en todo tipo de asuntos Jurídicos, con despacho propio en
        Madrid y Mallorca.
      </p>
      <p>
        Colaborador de diversas entidades de asesoramiento{' '}
        <strong> fiscal, contable y laboral </strong> españolas y alemanas.
      </p>
    </div>
  </motion.div>
);
