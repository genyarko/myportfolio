
let sum = 0
let cards = []
let message = " "
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("show-cards")
let getNewCard = 1 
let messageEl = document.getElementById("message-el")
let isAlive = false
let hasBlackJack = false
let player = {
     Name: "George",
     Chips: 150
}

let playerStats = document.getElementById("player-el")
playerStats.textContent = player.Name +": $" +player.Chips




function getRandomCard() {
        let showRandomCard = Math.floor(Math.random() * 13) +1
    if (showRandomCard ===1){
        return 11
    }
    else if(showRandomCard>10){
        return 10
    }
    else
    
    return showRandomCard
}


function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    cardEl.textContent = "Cards: " 
    for( let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
        if(sum <= 20){
        message = "Do you want to draw again?"
        
        
        }
        else if( sum === 21){
        message = "You've got BlackJack"
        hasBlackJack = true
        
        
        }
        else {
        message = "You lost"
        isAlive = false
        }
        messageEl.textContent = message
        sumEl.textContent = "Sum: " +sum
    }
function newCard() {
    if (isAlive === true && hasBlackJack===false){
    let newCards = getRandomCard()
    cards.push(newCards)
    sum += newCards
    renderGame()
    console.log("drawing a new card") 
}
    
}