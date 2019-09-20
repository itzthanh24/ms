import React, { useState } from 'react';
import Form from './form/form.jsx';
import Error from './form/error.jsx';
import Board from './board/board.jsx';
import Result from './form/result.jsx';
import Rules from './rules.jsx';
import './minesweeper.css';

/**
 * Container for the game. Passes eventhandlers and state to dependent child components.
 * @returns {JSX.Element} form view
 */

const Minesweeper = () => {
    const [gameStart, setGameStart] = useState(false);
    const [gameOver, setGameOver] = useState({gameOver: false, result: ''});
    const [remainingSafeCells, setRemainingSafeCells] = useState(0);

    const [inputValues, setInputValues] = useState({
        columns: '',
        rows: '',
        bombs: ''
    });

    const [error, setError] = useState({
        isError: false,
        msg: ''
    });

    /**
     * Handles input change.
     * @param {UIEvent} event input change event
     */
    const handleInputChange = e => {
        const { name, value } = e.target;
        setInputValues({...inputValues, [name]: value}); 
    };

    const changeRemainingSafeCells = () => {
        setRemainingSafeCells(remainingSafeCells => remainingSafeCells - 1);
    }

    /**
     * Handles form submit by validating and setting values, removing error message, updating remaining safe cells and 
     * setting game start status.
     * @param {UIEvent} event click event
     */
    const handleFormSubmit = e => {
        e.preventDefault();
        const dimension = inputValues.columns * inputValues.rows;
        const pattern = /^[1-9][0-9]*$/;
        let errorMsg = '';
        for (let value in inputValues) {
            if (!pattern.test(inputValues[value])) {
                errorMsg += `${value.replace(value[0], value[0].toUpperCase())} `
            }
        }
        errorMsg += errorMsg ? 'should be a positive number.' : '';
        errorMsg += !errorMsg && inputValues.bombs >= dimension ?
            '# of bombs cannot be equal or greater than # of cells' : ''
        if (errorMsg) {
            setError({...error, isError: true, msg: errorMsg});
        } else {
            const remainingSafeCells = dimension - inputValues.bombs;
            setError({...error, isError: false, msg: ''});
            setInputValues({...inputValues, 
                columns: parseInt(inputValues.columns),
                rows: parseInt(inputValues.rows),
                bombs: parseInt(inputValues.bombs)
            });
            setRemainingSafeCells(remainingSafeCells);
            setGameStart(true);
        }
        
    };
    
    /**
     * Wrapper function that calls another function to set gameOver state. Used by child components to
     * update state that is passed down.
     * @param {Object} gameStatus game status object
     */
    const setGameStatus = gameStatus => {
        const { gameOver, result } = gameStatus;
        if (gameStatus.gameOver) setGameOver({...gameOver, gameOver, result});
    };

    /**
     * Wrapper function that calls another function to set gameStart, gameOver, and inputValues state. 
     * Used by child components to update state that is passed down.
     */
    const newGame = () => {
        setGameStart(false);
        setGameOver({...gameOver, gameOver: false, result: ''});
        setInputValues({...inputValues, columns: '', rows: '', bombs: ''});
    }

    const formProps = {
        inputValues,
        handleInputChange,
        handleFormSubmit
    };

    const errorProps = {
        errorMsg: error.msg
    };

    const boardProps = {
        rows: inputValues.rows,
        cols: inputValues.columns,
        bombs: inputValues.bombs,
        gameOver,
        remainingSafeCells,
        changeRemainingSafeCells,
        setGameStatus
    };

    const resultMsg = gameOver.gameOver ? `Game Over...You ${gameOver.result}.` : 'Game in Progress...';

    return (
        <main className='container'>
            <div className='ms-header'>
                <h1 className='ms-title'>Minesweeper</h1>
            </div>
            <div className='container'>
                <Result resultMsg={resultMsg} newGame={newGame} gameOver={gameOver.gameOver} gameStart={gameStart} />
                {error.isError ? <Error {...errorProps} /> : ''}
                {!gameStart && !gameOver.gameOver ? <Form {...formProps} /> : ''}
                {!gameStart ? <Rules /> : ''}
                {gameStart ? <Board  {...boardProps} /> : ''}
            </div>
        </main>
    );
}

export default Minesweeper;