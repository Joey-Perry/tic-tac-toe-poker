let boardArray = [];
const resetBtn = document.getElementById('reset-btn');

function togglePlayerTurnIndicator(playerMarker){
    if (playerMarker.innerText === 'X') {
        playerMarker.innerText = 'O';
    } else {
        playerMarker.innerText = 'X';
    }
}

function determineWinner(board, marker){
    winner = false;
    const winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    winningCombinations.forEach(combination => {
        let firstSquare = combination[0];
        let secondSquare = combination[1];
        let thirdSquare = combination[2];
        if (board[firstSquare] === marker && board[secondSquare] === marker && board[thirdSquare] === marker){
            winner = true;
        } else {
            null;
        }
    })
    return winner;
}

function catsGame(board){
    const fullBoard = board.filter(square => square === 'X' || square === 'O');
    if (fullBoard.length === 9){
        return true;
    } else {
        return false;
    }
}

function resetGame(){
    document.getElementById('player').innerText = 'X';
    const squares = document.querySelectorAll('td');
    squares.forEach(square => square.innerText = '');
    boardArray = [];
}

function play(boxId){
    let clickedBox = document.getElementById(boxId);
    const player = document.getElementById('player');
    let currentPlayer = player.innerText;

    if (clickedBox.innerText !== ''){
        alert("You can't go there!");
    } else{
        clickedBox.innerText = currentPlayer;
        boardArray[boxId] = currentPlayer;
        // console.log(boardArray);
        if (determineWinner(boardArray, currentPlayer)){
            alert(`Player ${currentPlayer} wins!`)
        } else if (catsGame(boardArray)){
            alert('Cats game!')
        } else {
            togglePlayerTurnIndicator(player);
        }
    }
    
}


resetBtn.addEventListener('click', ()=> {
    if (confirm(`This will reset the game. Are you sure?`)){
        resetGame();
    } else {
        null;
    }
});
