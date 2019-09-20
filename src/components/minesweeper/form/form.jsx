import React from 'react';
import PropTypes from 'prop-types';
import './form.css';

/**
 * Form provides inputs to obtain number of rows, columns, and bombs to initialize the board.
 * @param {FormProps} props form properties
 * @returns {JSX.Element} form view
 */

/**
 * @typedef {Object} FormProps
 * @prop {Object} inputValues input values
 * @prop {function} handleInputChange function to handle input change
 * @prop {function} handleFormSubmit function to handle form submit
 */

const Form = props => {
    const { inputValues, handleInputChange, handleFormSubmit } = props;
    return (
        <div>
            <form className='ms-form' name='form' onSubmit={handleFormSubmit}>
                <div className='row'>
                <div className='ms-form-group form-group col-md-3'>
                    <label className='ms-form-label' htmlFor='columns'>
                        Columns <i className='ms-label-icon label-icon material-icons'>view_column</i>
                    </label>
                    <div className='input-group'>
                        <input className='ms-form-input form-control' type='text' name='columns' id='columns' 
                            placeholder='# of columns' value={inputValues['columns']} onChange={handleInputChange} />
                    </div>
                </div>
                <div className='ms-form-group form-group col-md-3 offset-md-1'>
                    <label className='ms-form-label' htmlFor='rows'> 
                        Rows <i className='ms-label-icon label-icon material-icons'>view_stream</i>
                    </label>
                    <div className='input-group'>
                        <input className='ms-form-input form-control' type='text' name='rows' id='rows' 
                        placeholder='# of rows' value={inputValues['rows']} onChange={handleInputChange} />
                    </div>
                </div>
                <div className='ms-form-group form-group col-md-3 offset-md-1'>
                    <label className='ms-form-label' htmlFor='bombs'> 
                        Bombs <i className='ms-label-icon label-icon material-icons'>adjust</i>
                    </label>
                    <div className='input-group'>
                        <input className='ms-form-input form-control' type='text' name='bombs' id='bombs' 
                        placeholder='# of bombs' value={inputValues['bombs']} onChange={handleInputChange} />
                    </div>
                </div>
                </div>
                <div className='row'>
                    <button type='submit' className='ms-form-submit btn text-center col-md-3 offset-md-4' onClick={handleFormSubmit}>Submit</button>
                </div>
            </form>
        </div>
    );
}

Form.propTypes = {
    inputValues: PropTypes.object.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleFormSubmit: PropTypes.func.isRequired
};

export default Form;