document.addEventListener( 'DOMContentLoaded', () =>{
  const squares = document.querySelectorAll('.squares')

  const ladsnakes = [{ start: 3, end: 8 }, { start: 12, end: 18 } , {start: 14, end: 15 } , { start: 23, end: 24 }]
  const h1 = document.querySelector('h1')
  const button = document.querySelector('button')
  // const button2 = document.getElementById('reset')
  h1.textContent ='Snails and Ladders!'

  button.addEventListener('click', rollDice)

  let player1position = 0
  let player2position = 0

  let player1turn = true

  function rollDice () {
    const max = 6
    const roll = Math.ceil(Math.random() * max)
    // const currentPlayerPostion = player1turn ? player1position : player2position

    //both players start at 0 and player1 is true so change it to false so that player2 can have a go also
    //and afterward player1turn changes to true so that player1 can have a go again
    if (player1turn){
      player1position = player1position + roll
      player1turn = false
    } else {
      player2position = player2position + roll
      player1turn = true
    }

    // player1turn = !player1turn
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
    console.log(roll)
    console.log(player1position, player2position)
    if (player1position >= 24 || player2position >= 24) winConditions()
  }

  // function that checks to see whether a player has won every time they role.
  function winConditions() {
    if (player1position < 24) {
      squares[player1position].classList.add('currentPosition')
    } else {
      (player1position === 24)
      return alert('Player 1 is the winner')
    }
    (player2position === 24)
    return alert('Player 2 is the winner')
  }


})
