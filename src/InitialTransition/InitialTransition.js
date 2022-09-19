import './initial-transition.css';
import { motion } from 'framer-motion';

const blackBox = {
  initial: {
    height: '100vh',
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

export const InitialTransition = () => (
  <div className="initial-transition-main">
    <motion.div
      className="motion-div"
      initial="initial"
      animate="animate"
      variants={blackBox}
    />
  </div>
);
