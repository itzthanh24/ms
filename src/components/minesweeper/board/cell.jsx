import React from 'react';
import PropTypes from 'prop-types';
import Bomb from '../../../assets/img/bomb.png';

/**
 * Clickable cell that makes up the board.
 * @param {CellProps} props cell properties
 * @returns {JSX.Element} cell view
 */

/**
 * @typedef {Object} CellProps
 * @prop {boolean} isClicked cell clicked
 * @prop {number} adjBombs number of adjacent bombs
 * @prop {number} rowIndex row index
 * @prop {number} colIndex column index
 * @prop {number} cellWidth cell width
 * @prop {function} handleCellClick function to handle cell click
 */

const Cell = props => {
    const { isClicked, adjBombs, cellWidth, rowIndex, colIndex, handleCellClick } = props;
    const clickedClassName = 'clicked';
    const bombClassName = 'bomb';
    const fontSize = cellWidth <= 4 ? '0.5em' : '';
    const bombImgPath = Bomb;

    const cellStyles = {
        styles: {
            width: `${cellWidth}%`,
            fontSize: fontSize
        }
    }
    
    return (
        <button 
            className={'ms-row-button' + (isClicked ? ` ${clickedClassName}`: '') +
                (adjBombs === -1 ? ` ${bombClassName}` : '')} 
            style={cellStyles.styles}
            value={`${rowIndex}-${colIndex}`} 
            onClick={handleCellClick}>
            {isClicked && adjBombs !== -1 && adjBombs > 0 ? `${adjBombs}` : ''}
            {isClicked && adjBombs === -1 ? 
                <img className='ms-row-button-bomb' alt='bomb' src={bombImgPath} /> : ''}
        </button>
    );
}

Cell.propTypes = {
    isClicked: PropTypes.bool.isRequired, 
    adjBombs: PropTypes.number.isRequired, 
    rowIndex: PropTypes.number.isRequired, 
    colIndex: PropTypes.number.isRequired, 
    cellWidth: PropTypes.number.isRequired,
    handleCellClick: PropTypes.func.isRequired
};

export default Cell;