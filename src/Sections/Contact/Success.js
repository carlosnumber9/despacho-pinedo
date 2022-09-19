import { PropTypes } from 'prop-types';

export const Success = ({ onResetForm }) => (
  <>
    <p>
      Petición enviada con éxito. Su mensaje será respondido a la mayor brevedad
      posible.
    </p>
    <button
      className="reset-form-btn"
      onClick={(e) => {
        e.preventDefault();
        onResetForm();
      }}
    >
      Escribir otro mensaje
    </button>
  </>
);

Success.propTypes = {
  onResetForm: PropTypes.func,
};
