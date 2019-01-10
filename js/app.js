document.addEventListener( 'DOMContentLoaded', () =>{
  const squares = document.querySelectorAll('.squares')

  const ladsnakes = [{ start: 3, end: 8 }, { start: 12, end: 19 } , {start: 14, end: 15 } , { start: 25, end: 26 }, {start: 30, end: 34 } , { start: 36, end: 40 }]
  const h1 = document.querySelector('h1')
  const button = document.querySelector('button')
  const btnReset = document.getElementById('reset')
  const diceSquare = document.getElementById('dice')
  const dices = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;']


  const roll = 0

  h1.textContent ='Snails and Ladders!'

  button.addEventListener('click', rollDice)
  btnReset.addEventListener('click', theEnd)

  let player1position = 0
  let player2position = 0

  squares[player1position].classList.add('player')
  squares[player2position].classList.add('computer')

  let player1turn = true


  function rollDice () {
    const max = 6
    roll = Math.ceil(Math.random() * max)
    diceSquare.innerHTML = dices[roll-1]

    //both players start at 0 and player1 is true so change it to false so that player2 can have a go also
    //and afterward player1turn changes to true so that player1 can have a go again


    squares[player1position].classList.remove('player')
    squares[player2position].classList.remove('computer')

    if (player1turn){
      player1position = player1position + roll
      player1turn = false
    } else {
      player2position = player2position + roll
      player1turn = true
    }

    console.log(squares[player1position])

    // ---> Check all the ladders and see if the currentPosition is the start of any ladders
    ladsnakes.forEach( ladsnakes => {
      if (ladsnakes.start === player1position) {
        console.log('SNAKE OR LADDER')
        player1position = ladsnakes.end
      }
      if (ladsnakes.start === player2position) {
        console.log('SNAKE OR LADDER')
        player2position = ladsnakes.end
      }

    })

    squares[player1position].classList.add('player')
    squares[player2position].classList.add('computer')

    console.log(roll)
    console.log(player1position, player2position)
    if (player1position >= 40 || player2position >= 40) winConditions()
  }
//function to set interval so that i can see all the players moves

let time remaining = 5

const timerId = setInterval(() => {
    div.classList.remove('player')
    console.log(timeRemaining)
    div = divs[Math.floor(Math.random() * divs.length)]
    div.classList.add('player')
    if(timeRemaining === 0) clearInterval(timerId)
  }, 1000)



  // function that checks to see whether a player has won every time they role.
  function winConditions() {
    if (player1position < 40) {
      squares[player1position].classList.add('currentPosition')
    } else {
      (player1position === 40)
      return alert('Player is the winner')
    }
    (player2position === 40)
    return alert('Computer is the winner')
  }



  function theEnd() {
    squares[player1position].classList.remove('player')
    player1position = 0
    squares[player2position].classList.remove('computer')
    player2position = 0
  }

})
// sometimes player 1 doesn't always move when he lands on a ladder
//go backward when touches the Snails
//when playing for the second time there is a problem with the button rollDice
//when i reset the game the big dice doesn't disappear but it should
//reset button word needs to be centered
