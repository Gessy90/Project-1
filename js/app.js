document.addEventListener( 'DOMContentLoaded', () =>{
  const h1 = document.querySelector('h1')
  h1.textContent ='Snake and Ladder!'


  // function to make the dice roll
  window.rollDice =()=> {
    const max = 6
    const roll = Math.ceil(Math.random() * max)
    console.log(roll)
  }

  // const roll = 0 //Rolling the dice
  // const move = 1 //Moving to the next spot
  // const player = new Player()

  
  // //to make the board
  // const width = 6
  // const height = 6
  // const board = []
  // // loop through the width
  // for (var y=0; y< height; y++){
  //   const row = []
  //   board.push(row)
  //   //loop through the height
  //   for(var x= 0; x < width; x++){
  //     row.push({x,y,occupied: null })
  //   }
  // }
  // console.log(board)
  // const boardSizeConst= 50
  // //function to render the board
  // const renderBoard = ()=>{
  //   //loop throught the board and get things to the web page
  //   let boardHTML = ''
  //   board.forEach(row =>{
  //     row.forEach(square =>{
  //       //for each square add a boardHTML
  //       boardHTML += `<div class = square style= 'top:${square.y*boardSizeConst}px; left:${square.x* boardSizeConst}px; background-color:${square.color}'></div>`
  //     })
  //   })
  //   document.getElementById('board').innerHTML =boardHTML
  //   console.log('render board')
  // }
  // renderBoard()

// let currentPlayer = player[currentPlayerTurn]
//
//   currentPlayer.position = 0
//   if(currentPlayer.position === 0 && roll !== 1){ //the first turn has to have 1
//     console.log('Bad luck!')
//   }else{
//     currentPlayer.position += roll
//
//     //if the curretPlayer has the last position
//     if (currentPlayer.position > 100) {
//       console.log(currentPlayer.name +' has won!')
//       hasWon = true //hasWon is true = player wins
//     }
//
//   }
//   //if the player has won or not
//   let hasWon = false
//   window.rollDice = () => {
//     if (hasWon) {
//       return
//     }

// players.forEach(player => {
//     let square = null;
//     board.forEach(row => {
//       row.forEach(square => {
//         if (square.position === player.position) {
//           boardOnScreen += `<div class=player style="top:${square.y * boardSize +5}px; left:${square.x * boardSize +5}px;background-color:${player.color}"></div>`
//         }
})
