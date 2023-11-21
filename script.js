(function(){

let board = {

      players: {
            // player1,player2
      },

      getboard: function(){
            board = [];
            const rows = 3;
            const columns =3;

            for(let i = 0; i < rows; i++){
                  board.push([]);
            for(let j = 0; j < columns; j++){
                        board[i].push('something');
            }
            }
            return board;
      },
}
console.log(board.getboard());
})()