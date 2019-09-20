import React from 'react';
import PropTypes from 'prop-types';

/**
 * Error renders any input errors.
 * @param {ErrorProps} props error properties
 * @returns {JSX.Element} Error view
 */

/**
 * @typedef {Object} ErrorProps
 * @prop {string} errorMessage error message to display
 */

const Error = props => {
    const errorMessage = props.errorMsg;
    return (
        <div className='ms-error'>
            <p className='ms-error-msg'>{errorMessage}</p>
        </div>
    );
}

Error.propTypes = {
    errorMessage: PropTypes.string
};

export default Error;