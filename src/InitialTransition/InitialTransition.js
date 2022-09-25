import './initial-transition.css';
import { motion } from 'framer-motion';
import { SECTIONS } from '../constants';
import { sectionIsSelected } from '../utils';

const blackBox = {
  initial: {
    height: '120vh',
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: 'afterChildren',
      duration: 3,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

export const InitialTransition = () =>
  sectionIsSelected(SECTIONS.PRESENT) && (
    <div className="initial-transition-main">
      <motion.div
        className="motion-div"
        initial="initial"
        animate="animate"
        variants={blackBox}
      />
    </div>
  );
