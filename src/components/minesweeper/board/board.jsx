import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Cell from './cell.jsx';
import { initBoard, isGameOver, revealBoard } from '../../../game.js';
import { getNeighbors } from '../../../helper';
import './board.css';

/**
 * Board with clickable cells to let users make a move and play the game.
 * @param {BoardProps} props board properties
 * @returns {JSX.Element} board view
 */

/**
 * @typedef {Object} BoardProps
 * @prop {number} rows number of rows to place on board.
 * @prop {number} cols number of cols to place on board.
 * @prop {number} bombs number of bombs to place on board.
 * @prop {number} remainingSafeCells number of remaining safe cells.
 * @prop {function} changeRemainingSafeCells function to change remaining safe cells count.
 * @prop {function} setGameStatus function to set game status
 * @prop {Object} gameOver gameOver object 
 */

const Board = props => {
    const { rows, cols, bombs, remainingSafeCells, changeRemainingSafeCells, 
        gameOver, setGameStatus } = props;

    const [board, setBoard] = useState(() => initBoard(rows, cols, bombs));
    const [clickedCell, setClickedCell] = useState({row: null, col: null});
    const isInitialRender = useRef(true);

    // Instead of checking for initial render, could also check if clickedCell's
    // row, col state is null or not. If not null, call isGameOver and so on...
    useEffect(() => {
        if (isInitialRender.current) {
            isInitialRender.current = false;
            return;
        }
        const { row, col } = clickedCell;
        const gameOver = isGameOver(board, row, col, remainingSafeCells);
        if (gameOver.gameOver) {
            const revealedBoard = revealBoard(board, rows, cols);
            setBoard(revealedBoard);
            setGameStatus(gameOver);
        }
    }, [remainingSafeCells]);

    /**
     * Handles user click event on the board cells. Calls makeMove() to
     * handle making the move.
     * @param {UIEvent} event click event
     */
    const handleCellClick = e => {
        if (!gameOver.gameOver) {
            const rowCol = e.target.value.split('-');
            const [row, col] = [parseInt(rowCol[0]), parseInt(rowCol[1])];
            makeMove(row, col);
        }
    }

    /**
     * Makes the move by changing the "clicked" status, changing number of
     * remaining safe cells, and recursively make moves if the cell has 0
     * adjacent bombs.
     * @param {number} row row index
     * @param {number} col col index
     */
    const makeMove = (row, col) => {
        if (!board[row][col].isClicked) {
            let newBoard = [...board];
            newBoard[row][col].isClicked = true;
            setBoard(newBoard);
            setClickedCell({...clickedCell, row, col});
            changeRemainingSafeCells();
            makeMoveRecursively(row, col);
        }
    }

    /**
     * If given cell has 0 adjacent bombs, gets all the neighbors and makes 
     * the move on all cells.
     * @param {number} row row index
     * @param {number} col col index
     */
    const makeMoveRecursively = (row, col) => {
        if (board[row][col].adjBombs === 0) {
            let neighbors = getNeighbors(board, row, col);
            for (let neighbor of neighbors) {
                makeMove (neighbor.row, neighbor.col);
            }
        }
    }

    const styles = {
        height: {
            height: `${100/rows}%`
        }
    }

    return (
        <div className='ms-board'>
            {board.map((row, rowIndex) => {
                return (
                    <div className='ms-board-row' key={rowIndex} style={styles.height}>
                        {row.map((cell, colIndex) => {
                            return <Cell key={colIndex} {...cell} rowIndex={rowIndex} colIndex={colIndex} 
                                cellWidth={100/cols} handleCellClick={handleCellClick} />
                        })}
                    </div>
                )
            })}
        </div>
    );
}

Board.propTypes = {
    rows: PropTypes.number.isRequired,
    cols: PropTypes.number.isRequired,
    bombs: PropTypes.number.isRequired,
    remainingSafeCells: PropTypes.number.isRequired,
    changeRemainingSafeCells: PropTypes.func.isRequired,
    setGameStatus: PropTypes.func.isRequired,
    gameOver: PropTypes.object.isRequired,
};

export default Board;
