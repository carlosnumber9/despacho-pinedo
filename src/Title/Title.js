import './title.css';
import { motion } from 'framer-motion';
import { sectionIsSelected } from '../utils';
import { SECTIONS } from '../constants';

export const Title = () => {
  const variants = {
    initial: {
      // Displaying animation only in Present section
      top: sectionIsSelected(SECTIONS.PRESENT) ? '30vh' : '30px',
    },
    animate: {
      top: '30px',
      position: 'relative',
      transition: {
        when: 'afterChildren',
        duration: 2,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  return (
    <motion.div
      className="motion-div-title"
      initial="initial"
      animate="animate"
      variants={variants}
    >
      <h1 id="name-title">Carlos Pinedo Santamaría</h1>
      <h2 id="subtitle">Abogado</h2>
    </motion.div>
  );
};
