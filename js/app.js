document.addEventListener( 'DOMContentLoaded', () =>{
  const h1 = document.querySelector('h1')
  const button = document.querySelector('button')
  h1.textContent ='Snails and Ladders!'

  button.addEventListener('click', rollDice)
  const player = { name: 'Player', position: 0, color: 'white' , hasWon: false}
  const player2 = { name: 'Computer', position: 0, color: 'orange' , hasWon: false}


  function rollDice () {
    const max = 6
    const roll = Math.ceil(Math.random() * max)

    squares[currentPosition].classList.remove('currentPosition')
    currentPosition = currentPosition + roll

    // ---> Check all the ladders and see if the currentPosition is the start of any ladders
    ladsnakes.forEach( ladsnakes => {
      if (ladsnakes.start === currentPosition) {
        console.log('SNAKE OR LADDER')
        currentPosition = ladsnakes.end
      }
    })

    console.log(roll, currentPosition)
    squares[currentPosition].classList.add('currentPosition')

    if (currentPosition > 24) {
      alert(currentPosition + ' has won!')
      currentPosition = true
    }

    if (currentPlayer === player) {
      currentPlayer = player2
    } else {
      currentPlayer = player2
    }
  }

  let currentPosition = 0
  const squares = document.querySelectorAll('.squares')

  let currentPlayer = player

  const ladsnakes = [{ start: 3, end: 8 }, { start: 12, end: 18 } , {start: 14, end: 15 } , { start: 23, end: 24 }]

})
//when touches snails needs to go back 1 square.
//when touches ladder needs to shoot up down and lands it on the space next to it.
