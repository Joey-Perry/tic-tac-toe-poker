let boardArray = [];

function togglePlayerTurnIndicator(playerMarker){
    if (playerMarker.innerText === 'X') {
        playerMarker.innerText = 'O';
    } else {
        playerMarker.innerText = 'X';
    }
}

function play(boxId){
    let clickedBox = document.getElementById(boxId);
    const playerMarker = document.getElementById('player');
    let currentPlayer = playerMarker.innerText;
    clickedBox.innerText = currentPlayer;
    boardArray[boxId] = currentPlayer;
    console.log(boardArray);
    determineWinner(boardArray, currentPlayer);
    togglePlayerTurnIndicator(playerMarker);
}

function determineWinner(board, marker){
    const winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    

}