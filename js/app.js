document.addEventListener( 'DOMContentLoaded', () =>{
  const squares = document.querySelectorAll('.squares')

  const ladsnakes = [{ start: 3, end: 8 }, { start: 12, end: 18 } , {start: 14, end: 15 } , { start: 23, end: 24 }]
  const h1 = document.querySelector('h1')
  const button = document.querySelector('button')
  const btnReset = document.getElementById('reset')
  const diceSquare = document.getElementById('dice')

  h1.textContent ='Snails and Ladders!'

  button.addEventListener('click', rollDice)
  btnReset.addEventListener('click', theEnd)

  let player1position = 0
  let player2position = 0

  squares[player1position].classList.add('player1')
  squares[player2position].classList.add('player2')

  let player1turn = true
  //make actual dice roll
  const dices = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;']
  // let stop = true
  // let t


  // function stopstart() {
  //   if(stopped) {
  //     stopped = false
  //     t = setInterval(change, 100)
  //   } else {
  //     clearInterval(t)
  //     stopped = true
  //   }
  // }

  function rollDice () {
    const max = 6
    const roll = Math.ceil(Math.random() * max)
    diceSquare.innerHTML = dices[roll-1]

    // const currentPlayerPostion = player1turn ? player1position : player2position

    //both players start at 0 and player1 is true so change it to false so that player2 can have a go also
    //and afterward player1turn changes to true so that player1 can have a go again
    if (player1turn){
      squares[player1position].classList.remove('player1')
      player1position = player1position + roll
      squares[player1position].classList.add('player1')
      player1turn = false
    } else {
      squares[player2position].classList.remove('player2')
      player2position = player2position + roll
      squares[player2position].classList.add('player2')
      player1turn = true
    }

    console.log(squares[player1position])
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
    if (player1position >= 38 || player2position >= 38) winConditions()
  }

  // function that checks to see whether a player has won every time they role.
  function winConditions() {
    if (player1position < 38) {
      squares[player1position].classList.add('currentPosition')
    } else {
      (player1position === 38)
      return alert('Player 1 is the winner')
    }
    (player2position === 38)
    return alert('Player 2 is the winner')
  }



  function theEnd() {
    squares[player1position].classList.remove('player1')
    player1position = 0
    squares[player2position].classList.remove('player2')
    player2position = 0
  }

})
