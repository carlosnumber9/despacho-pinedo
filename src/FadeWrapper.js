import { motion } from 'framer-motion';
import { PropTypes } from 'prop-types';

export const FadeWrapper = ({ children }) => (
  <motion.div
    exit={{ opacity: 0 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    {children}
  </motion.div>
);

FadeWrapper.propTypes = {
  children: PropTypes.node,
};
