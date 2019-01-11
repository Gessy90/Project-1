document.addEventListener( 'DOMContentLoaded', () =>{
  const squares = document.querySelectorAll('.squares')

  const ladsnakes = [{ start: 5, end: 10 }, { start: 12, end: 19 } , {start: 29, end: 34 } , { start: 8, end: 7 } , { start: 17, end: 16 }, { start: 22, end: 21 } , {start: 24, end: 23 }, { start: 32, end: 31 } , {start: 39, end: 38 }]
  const h1 = document.querySelector('h1')
  const button = document.querySelector('button')
  const btnReset = document.getElementById('reset')
  const diceSquare = document.getElementById('dice')
  const dices = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;']
  const musicButton = document.querySelector('.btn1')
  const sound = document.querySelector('#sound')

  h1.textContent ='Snails and Tunnels'

  musicButton.addEventListener('click', (e) => {
    console.log('playing')
    sound.setAttribute('src','sound/shake.wav')
    sound.play()
  })


  button.addEventListener('click', waitThenRoll)
  btnReset.addEventListener('click', theEnd)

  let player1position = 0
  let player2position = 0

  squares[player1position].classList.add('player')
  squares[player2position].classList.add('computer')

  let player1turn = true
  //------------ FUNCTION THAT GIVES US AN INTERVAL SO THAT THE DICE TAKES 1 SEC TO APPEAR-----
  function waitThenRoll(){
    diceSquare.innerHTML = ''
    setTimeout(() =>{
      rollDice()
    }, 1000)
  }

  //---------------- FUNCTION TO MAKE THE DICE ROLL RANDOMLY  -------
  function rollDice () {
    const max = 6
    const roll = Math.ceil(Math.random() * max)
    diceSquare.innerHTML = dices[roll-1]


    squares[player1position].classList.remove('player')
    squares[player2position].classList.remove('computer')
    //------ PLAYER1 HAS A GO FIRST AND WITH THIS IF/ELSE STATEMENT BOTH PLAYERS HAVE A POSITION
    // THAN THE DICE ROLLS AND CHECKS THE WIN CONDITIONS

    if (player1turn){
      player1position = player1position + roll
      if (player1position >= 41) winConditions()
      player1turn = false
    } else {
      player2position = player2position + roll
      if (player2position >= 41) winConditions()
      player1turn = true
    }

    console.log(squares[player1position])

    // ---> CHECK ALL THE LADDERS AND SEE IF THE CURRENT POSITION IS THE START OF ANY LADDERS
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
  }



  // FUNCTION THAT CHECKS TO SEE WHETHER A PLAYER HAS WON EVERY TIME THEY ROLL
  function winConditions() {
    if (player1position >= 41) {
      player1position = 41
      theEnd()
      return alert('Player is the winner')
    } else if (player2position >= 41)  {
      player2position = 41
      theEnd()
      return alert('Computer is the winner')
    }
  }

  //FUNCTION THAT RESETS THE GAME
  function theEnd() {
    squares[player1position].classList.remove('player')
    player1position = 0
    squares[player2position].classList.remove('computer')
    player2position = 0
  }

})
