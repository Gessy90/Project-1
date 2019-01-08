document.addEventListener( 'DOMContentLoaded', () =>{
  let currentPosition = 0
  const squares = document.querySelectorAll('.squares')


  const ladsnakes = [{ start: 3, end: 8 }, { start: 12, end: 18 } , {start: 14, end: 15 } , { start: 23, end: 24 }]
  const h1 = document.querySelector('h1')
  const button = document.querySelector('button')
  h1.textContent ='Snails and Ladders!'

  button.addEventListener('click', rollDice)
  const player = { name: 'Player', position: 0, color: 'white' , hasWon: false}
  const player2 = { name: 'Computer', position: 0, color: 'orange' , hasWon: false}
  let currentPlayer = player


  function rollDice () {
    const max = 6
    const roll = Math.ceil(Math.random() * max)
    squares[currentPosition].classList.remove('currentPosition')
    currentPosition = currentPosition + roll

    console.log('currentPosition',currentPosition)
    console.log('squares',squares)
    console.log('squares[currentPosition]',squares[currentPosition])
    // ---> Check all the ladders and see if the currentPosition is the start of any ladders
    ladsnakes.forEach( ladsnakes => {
      if (ladsnakes.start === currentPosition) {
        console.log('SNAKE OR LADDER')
        currentPosition = ladsnakes.end
      }
    })

    const turn = true

    if (turn === true){
      // player needs to move
    } else if (turn === false){
      // player2 needs to move
    }
    //when dice is rolled the player needs to move accordingly


    //to make the player move and win at the end
    if (currentPosition < 24) {
      squares[currentPosition].classList.add('currentPosition')
    } else{
      alert(currentPosition + ' I won!')
      currentPosition = true
    }


    if (currentPlayer === player) {
      currentPlayer = player2
    } else {
      currentPlayer = player2
    }
  }


})
//when touches snails needs to go back 1 square.
//when touches ladder needs to shoot up down and lands it on the space next to it.
