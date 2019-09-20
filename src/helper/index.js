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

const getTopCell = (board, row, col) => {
    return (board[row-1] || [])[col] ? board[row-1][col] : 0;
}

const getTopRightCell = (board, row, col) => {
    return (board[row-1] || [])[col+1] ? board[row-1][col+1] : 0;
}

const getRightCell = (board, row, col) => {
    return board[row][col+1] ? board[row][col+1] : 0;
}

const getBottomRightCell = (board, row, col) => {
    return (board[row+1] || [])[col+1] ? board[row+1][col+1] : 0;
}

const getBottomCell = (board, row, col) => {
    return (board[row+1] || [])[col] ? board[row+1][col] : 0;
}

const getBottomLeftCell = (board, row, col) => {
    return (board[row+1] || [])[col-1] ? board[row+1][col-1] : 0;
}

const getLeftCell = (board, row, col) => {
    return board[row][col-1] ? board[row][col-1] : 0;
}

const getTopLeftCell = (board, row, col) => {
    return (board[row-1] || [])[col-1] ? board[row-1][col-1] : 0;
}