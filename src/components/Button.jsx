import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    name, className, computeFunction, colSpan,
  } = props;

  return (
    <td className={className} colSpan={colSpan}>
      <button type="button" onClick={computeFunction} name={name}>{name}</button>
    </td>
  );
};

Button.propTypes = {
  name: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
  computeFunction: PropTypes.func.isRequired,
  colSpan: PropTypes.node.isRequired,
};

export default Button;
