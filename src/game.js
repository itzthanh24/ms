import { getNeighbors } from './helper';

/**
 * Game logic that is responsible for checking user move,
 * providing the initial and subsequent updated boards for 
 * rendering.
 */

/**
 * Fill the cells adjacent to the bombs with the correct
 * value.
 * @param {Object[]} board array of cell objects
 * @param {number} row row index
 * @param {number} col col index
 * @returns {Object[]} board array of cell objects
 */
const fillBoard = (board, row, col) => {
    let neighbors = getNeighbors(board, row, col);
    for (let neighbor of neighbors) {
        if (neighbor.adjBombs !== -1) {
            neighbor.adjBombs++;
        }
    }
    return board;
}

/**
 * Place the bombs in random positions (avoiding duplicates)
 * on the board.
 * @param {Object[]} board array of cell objects
 * @param {number} bombs number of bombs
 * @returns {Object[]} board array of cell objects
 */
const placeBombs = (board, bombs) => {
    const [ rows, cols ] = [board.length, board[0].length];
    let flattenedBoard = [];
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            flattenedBoard.push({row, col});
        }
    }
    
    while (bombs) {
        const randomPosition = Math.floor(Math.random() * flattenedBoard.length);
        const randomX = flattenedBoard[randomPosition].col;
        const randomY = flattenedBoard[randomPosition].row;
        board[randomY][randomX].adjBombs = -1;
        fillBoard(board, randomY, randomX);
        flattenedBoard.splice(randomPosition, 1);
        bombs--;
    }
    return board;
}

/**
 * Initialize the board for initial render. Creates the board then
 * places the bombs.
 * @param {number} row number of rows
 * @param {number} col number of columns
 * @param {number} bombs number of bombs
 * @returns {Object[]} board array of cell objects
 */
const initBoard = (rows, cols, bombs) => {
    let board = [];
    for (let row = 0; row < rows; row++) {
        let boardRow = [];
        for (let col = 0; col < cols; col++) {
            boardRow.push({isClicked: false, adjBombs: 0, row, col});
        }
        board.push(boardRow);
    }
    board = placeBombs(board, bombs);
    return board;
}

/**
 * Check the board to see if the game is over when user makes
 * a move.
 * @param {Object[]} board array of cell objects
 * @param {number} row row index
 * @param {number} col col index
 * @param {number} remainingSafeCells number of safe cells
 * @returns {Object[]} board array of cell objects
 */
const isGameOver = (board, row, col, remainingSafeCells) => {
    let gameOver = false;
    let result = '';
    if (board[row][col].isClicked) {
        if (board[row][col].adjBombs === -1) {
            gameOver = true;
            result = 'lose';
        } else if (!remainingSafeCells) {
            gameOver = true;
            result = 'win';
        }
    }
    return {gameOver, result};    
}

/**
 * Reveals all cells on the board by making them "clicked".
 * @param {Object[]} board array of cell objects
 * @param {number} row number of rows
 * @param {number} col number of columns
 * @returns {Object[]} board new board of cell objects
 */
// To do: When board is initialized, create a copy to track unclicked cells.
// Whenever a cell is clicked, we remove it from the copied board. When we reveal,
// loop through the copied board and change their "isClicked". Worst case scenario:
// same # of operations (cols * rows - 1). Best case scenario: # of operations (# bombs)
const revealBoard = (board, rows, cols) => {
    const newBoard = [...board];
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            newBoard[row][col].isClicked = true;
        }
    }
    return newBoard;
}

export { initBoard, isGameOver, revealBoard };