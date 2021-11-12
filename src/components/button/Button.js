import PropTypes from "prop-types";

const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Load More
    </button>
  );
};

export default Button;
