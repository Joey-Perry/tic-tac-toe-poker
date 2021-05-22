const cardId = document.getElementById('card-id');
const cardStyle = document.getElementById('card-style');
const resetBtn = document.getElementById('reset-btn');

function setCard(){
    let targettedCard = cardId.value;
    let colorStyle = cardStyle.value;
    document.getElementById(targettedCard).style.color = colorStyle;
}

function resetCards(){
    document.querySelectorAll('section').forEach(card => card.style.color = 'gray');
}

resetBtn.addEventListener('click', resetCards);
