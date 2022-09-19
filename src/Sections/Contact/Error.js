import PropTypes from 'prop-types';

export const Error = ({ onResetForm }) => (
  <>
    <p>
      Ha ocurrido un error al enviar la petición. Por favor, inténtelo de nuevo
      o contacte por algún otro medio de comunicación.
    </p>
    <button
      className="reset-form-btn"
      onClick={(e) => {
        e.preventDefault();
        onResetForm();
      }}
    >
      Reiniciar el formulario
    </button>
  </>
);

Error.propTypes = {
  onResetForm: PropTypes.func,
};
