// wrap everything inside an IIFE
const ticTac = (function () {
  //make board array
  const board = [];

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
        console.log(`this is cell no:${cell} on board ${board[i][j]}`);
        // board[i].push("-");
      }
    }
    return board;
  }();

  const gameController = function () {
    const showBoard = getboard;


    let currentPlayer = player[1];
    const playerTurnSwitch = (function () {
      currentPlayer = currentPlayer === player[0] ? player[1] : player[0];
      alert(`${currentPlayer.name}'s turn!`);
      return currentPlayer;
    });

    const getCurrentPlayer = () => currentPlayer;

    const isEmpty = (row, column) => {
      if (showBoard[row][column] === "-") {
        console.log(`${currentPlayer.name}' turn`);
              // Place the player's token in the selected cell
      playerMove(currentPlayer, row, column);
      } else {
        alert(`already has something from other player`)

      }
    };

    const playerMove = (currentPlayer, row, column) => {
      const currentPlayerToken = currentPlayer["token"];
      showBoard[row][column] = currentPlayerToken;
      return board;
    };
    // for(let i =8; i >=0; i-- ){
    //   playerTurnSwitch();

    //   // Prompt the user for the row and column temp
    //   const row = prompt("Enter the row (0, 1, or 2): ");
    //   const column = prompt("Enter the column (0, 1, or 2): ");
    //   isEmpty(row, column);

    //   console.table(board);
    //   console.log(i, 'turns left')

    // }

    let isBoardFull = false;

while (!isBoardFull) {
  playerTurnSwitch();

  // Prompt the user for the row and column
  const row = prompt("Enter the row (0, 1, or 2): ");
  const column = prompt("Enter the column (0, 1, or 2): ");

  isEmpty(row, column);


  // Check if all cells are filled with tokens
  isBoardFull = showBoard.every(row => row.every(cell => cell !== "-"));

  if (isBoardFull) {
    console.log("The board is full! Game over!");
    console.table(board);

  } else {
    console.table(board);
  }
}


    // return { playerTurnSwitch, getCurrentPlayer, currentPlayer, playerMove };
  };
  return { getboard, gameController };
})();

/*
create funtion to let players put marks on certain parts of board

create function to make it game over when either the board is full or player has 3 marks in line

*/
