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

  //make a 2D array of the board array
  const getboard = function () {
    const boardSize = 3;
    let cellNumber = 1; //cell number counter
    for (let i = 0; i < boardSize; i++) {
      board.push([]);
      for (let j = 0; j < boardSize; j++) {
        const cell = []; // Represent the current cell
        cell.push(cellNumber); // Assign cell number
        cellNumber++; // Increment cell number counter

        board[i].push(cell); // Add the cell to the board array

        // board[i].push("-");
      }
    }
    return board;
  };

  const gameController = function () {
    // switches current player turn, this immediately fires so fix this in a bit
    let currentPlayer = player[0];
    const playerTurnSwitch = (function () {
      currentPlayer = currentPlayer === player[0] ? player[1] : player[0];
    })();

    //shows who's turn it is currently
    const getCurrentPlayer = () => currentPlayer;
    console.log(getCurrentPlayer());

    // next i need a way to basically loop through the board during each player's turn
    //to see what row and column they choose
    const isEmpty = (row, column) => {
      return this.board[row][column] === "something";
    };

    const playerMove = (currentPlayer, row, column) => {
      if (!isEmpty(row, column)) {
        console.log("occupado!");
        return;
      }
      this.board[row][column] = player;
    };

    const dispBoard = () => {
      console.clear();
      for (let i = 0; i < 3; i++) {
        console.log(this.board[i].join("|"));
      }
    };
  };
  return { getboard, gameController };
})();

/*
create an array to store the 3X3 grid board

create an array to store the player objects

create function to render the board grid

create function to keep track of player turn

create funtion to let players put marks on certain parts of board

create function to make it game over when either the board is full or player has 3 marks in line
*/
