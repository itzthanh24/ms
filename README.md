This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Minesweeper
This is a simple implementation of minesweeper built as I was learning React. It is playable on both desktop and mobile. It is not perfect by any means and a list of future improvements is posted at the bottom.

### Structure
Inside `/src` the `/components` folder stores the components needed to render the game and the `/helper` folder contains helper functions decoupled from game logic. The `/board` folder contains `board.jsx` which renders the board and the cells (from `cell.jsx`). The `/form` folder contains `form.jsx` which renders the form needed to get the board info, any input error messages (from `error.jsx`), and the game result along with the option to start a new game (from `result.jsx`). `mineSweeper.jsx` is the container responsible for passing eventhandlers, state, and state updaters to its children to consume. Lastly, `rules.jsx` is a dumb component that renders static text to list the instructions on how to play minesweeper.

- `src`
    - `components`
        - `minesweeper`
            - `board`
                - `board.jsx`
                - `board.css`
                - `cell.jsx`
            - `form`
                - `form.jsx`
                - `form.css`
                - `error.jsx`
                - `result.jsx`
            - `minesweeper.jsx`
            - `minesweeper.css`
            - `rules.jsx`
            - `rules.css`
    - `helper`
        - `index.js`

### Future Improvements
- Make it less ugly :sweat_smile:
- Use dynamic board size with max width and height and ensure all cells are a square.
    - What happens if user inputs 100 rows by 100 columns or 200 rows by 2 columns?
- Utilize a store framework (such as `Redux`) to avoid having to pass down and keep track of multiple states.
- Simply the amount of state needed.
- Require the board to be at least 2x1 or 1x2. A 1x1 board should not be playable.
- Add a status bar showing number of bombs remaining and how many safe cells remaining.
- Fix font and image size when user provides large number of rows and columns.