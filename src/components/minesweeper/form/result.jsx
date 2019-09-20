import React from 'react';
import PropTypes from 'prop-types';

/**
 * Result provides the result of the game when it ends and allows a new game to be created.
 * @param {ResultProps} props result properties
 * @returns {JSX.Element} form view
 */

/**
 * @typedef {Object} ResultProps
 * @prop {string} resultMsg result message to display
 * @prop {boolean} gameStart game start boolean
 * @prop {boolean} gameOver game over boolean
 * @prop {function} newGame function to start new game
 */

const Result = props => {
    const { resultMsg, gameStart, gameOver, newGame } = props;

    return (
        <div className={`ms-result ${gameStart && gameOver ? 'show' : 'hide'}`}>
            <p className='ms-result-msg'>{resultMsg}</p>
            <div className='ms-new-game'>
                <button className='btn' onClick={newGame}>New Game</button>
            </div>
        </div>
    );
};

Result.propTypes = {
    resultMsg: PropTypes.string.isRequired,
    gameStart: PropTypes.bool.isRequired,
    gameOver: PropTypes.bool.isRequired,
    newGame: PropTypes.func.isRequired
};

export default Result;