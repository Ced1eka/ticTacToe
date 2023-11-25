// wrap everything inside an IIFE
const ticTac = (function () {

  //make board array
  let board = [];

  //make player objects inside an array
  const player = [
    {
      name: "player1",
      token: "X",
    },
    {
      name: "player2",
      token: "O",
    },
  ];

  //make a 2D array of the board array, that shows it
  const getboard = function () {
    const boardSize = 3;
    let cellNumber = 1; //cell number counter
    for (let i = 0; i < boardSize; i++) {
      board.push([]);
      for (let j = 0; j < boardSize; j++) {
        const cell = []; // Represent the current cell
        cell.push(cellNumber); // Assign cell number
        cellNumber++; // Increment cell number counter

        board[i].push('-'); // Add the cell to the board array, put player input here later
        console.log(`this is cell no:${cell} on board ${board[i][j]}`)
        // board[i].push("-");
      }

    }
    return board;
  };

  const gameController = function () {

    const showBoard = getboard();

    // switches current player turn, this immediately fires so fix this in a bit
    let currentPlayer = player[0];
    const playerTurnSwitch = (function () {
      currentPlayer = currentPlayer === player[0] ? player[1] : player[0];
    })();

    //shows who's turn it is currently
    const getCurrentPlayer = () => currentPlayer;
    // console.log(getCurrentPlayer());

    // next i need a way to basically loop through the board during each player's turn
    //to see what row and column they choose

    //check if a cell on board is empty, fix this later?
    const isEmpty = (row, column) => {
      if(showBoard[row][column] === "-"){
        console.log('ye?')
        return;
      }else {
        playerMove();
      }
    };

    //get player token and place value inside given cell(temporarily in console)
    const playerMove = (currentPlayer, row, column) => {
      // if (!isEmpty(row, column)) {
      //   console.log("occupado!");
      //   return;
      // }

      const currentPlayerToken = currentPlayer['token'];
      showBoard[row][column] = currentPlayerToken;
    };



    // Prompt the user for the row and column temp
    const row = prompt("Enter the row (0, 1, or 2): ");
    const column = prompt("Enter the column (0, 1, or 2): ");

    // Place the player's token in the selected cell
    playerMove(currentPlayer, row, column);

    return {playerTurnSwitch,getCurrentPlayer, currentPlayer, playerMove};
  };
  return { getboard, gameController };
})();

/*
create funtion to let players put marks on certain parts of board

create function to make it game over when either the board is full or player has 3 marks in line

*/
