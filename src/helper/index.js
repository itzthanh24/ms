/**
 * Get all the neighboring cells given the board and coordinates.
 * @param {Object[]} board array of cell objects
 * @param {number} row row index
 * @param {number} col col index
 * @returns {Object[]} neighbors array of cell objects
 */
export const getNeighbors = (board, row, col) => {
    const topCell = getTopCell(board, row, col);
    const topRightCell = getTopRightCell(board, row, col);
    const rightCell = getRightCell(board, row, col);
    const bottomRightCell = getBottomRightCell(board, row, col);
    const bottomCell = getBottomCell(board, row, col);
    const bottomLeftCell = getBottomLeftCell(board, row, col);
    const leftCell = getLeftCell(board, row, col);
    const topLeftCell = getTopLeftCell(board, row, col);
    let neighbors = [topCell, topRightCell, rightCell, bottomRightCell, 
        bottomCell, bottomLeftCell, leftCell, topLeftCell];
    return neighbors.filter(neighbor => neighbor);
}

/**
 * Get the top cell given the board and coordinates.
 * @param {Object[]} board array of cell objects
 * @param {number} row row index
 * @param {number} col col index
 * @returns {Object} cell cell object if it exists or 0
 */
const getTopCell = (board, row, col) => {
    return (board[row-1] || [])[col] ? board[row-1][col] : 0;
}

/**
 * Get the top right cell given the board and coordinates.
 * @param {Object[]} board array of cell objects
 * @param {number} row row index
 * @param {number} col col index
 * @returns {Object} cell cell object if it exists or 0
 */
const getTopRightCell = (board, row, col) => {
    return (board[row-1] || [])[col+1] ? board[row-1][col+1] : 0;
}

/**
 * Get the right cell given the board and coordinates.
 * @param {Object[]} board array of cell objects
 * @param {number} row row index
 * @param {number} col col index
 * @returns {Object} cell cell object if it exists or 0
 */
const getRightCell = (board, row, col) => {
    return board[row][col+1] ? board[row][col+1] : 0;
}

/**
 * Get the bottom right cell given the board and coordinates.
 * @param {Object[]} board array of cell objects
 * @param {number} row row index
 * @param {number} col col index
 * @returns {Object} cell cell object if it exists or 0
 */
const getBottomRightCell = (board, row, col) => {
    return (board[row+1] || [])[col+1] ? board[row+1][col+1] : 0;
}

/**
 * Get the bottom cell given the board and coordinates.
 * @param {Object[]} board array of cell objects
 * @param {number} row row index
 * @param {number} col col index
 * @returns {Object} cell cell object if it exists or 0
 */
const getBottomCell = (board, row, col) => {
    return (board[row+1] || [])[col] ? board[row+1][col] : 0;
}

/**
 * Get the bottom left cell given the board and coordinates.
 * @param {Object[]} board array of cell objects
 * @param {number} row row index
 * @param {number} col col index
 * @returns {Object} cell cell object if it exists or 0
 */
const getBottomLeftCell = (board, row, col) => {
    return (board[row+1] || [])[col-1] ? board[row+1][col-1] : 0;
}

/**
 * Get the left cell given the board and coordinates.
 * @param {Object[]} board array of cell objects
 * @param {number} row row index
 * @param {number} col col index
 * @returns {Object} cell cell object if it exists or 0
 */
const getLeftCell = (board, row, col) => {
    return board[row][col-1] ? board[row][col-1] : 0;
}

/**
 * Get the top left cell given the board and coordinates.
 * @param {Object[]} board array of cell objects
 * @param {number} row row index
 * @param {number} col col index
 * @returns {Object} cell cell object if it exists or 0
 */
const getTopLeftCell = (board, row, col) => {
    return (board[row-1] || [])[col-1] ? board[row-1][col-1] : 0;
}