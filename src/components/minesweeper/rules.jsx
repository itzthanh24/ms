import React from 'react';
import './rules.css';

/**
 * Rules lists the rules on how to play minesweeper.
 * @returns {JSX.Element} Rules view
 */

const Rules = () => {
    return (
        <div className='ms-rules col-md-8 offset-md-2'>
            <h2 className='ms-rules-title'>How to Play</h2>
            <ul className='ms-rules-list'>
                <li className='ms-rule'>The board of cells contains a set number of bombs. </li>
                <li className='ms-rule'>You lose if: you click on a cell containing a bomb.</li>
                <li className='ms-rule'>You win if: you manage to click all the cells and avoid the bombs.</li>
                <li className='ms-rule'>Clicking a cell that does not contain a bomb reveals the number of adjacent cells that contain bombs.
                    Use this information and process of elimination to click on all cells without a bomb.
                </li>
            </ul>
        </div>
    )
}

export default Rules;