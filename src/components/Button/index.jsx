import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, children }) => {
  return (
    <button
      className={`${className} min-w-[100px] px-2 py-1 bg-primary-light dark:bg-primary-dark rounded-sm shadow-[0_0_6px_rgba(0,0,0,0.3)]`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
