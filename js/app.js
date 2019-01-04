document.addEventListener( 'DOMContentLoaded', () =>{
  const h1 = document.querySelector('h1')
  h1.textContent ='Snake and Ladder!'


  //function to make the dice roll
  window.rollDice =()=> {
    const max = 6
    const roll = Math.ceil(Math.random() * max)
    console.log(roll)
  }
  // const player =[{
  //   name:'Gessica'
  // }]

  //to make the board
  const width = 6
  const height = 6
  const board = []
  // loop through the width
  for (var y=0; y< height; y++){
    const row = []
    board.push(row)
    //loop through the height
    for(var x= 0; x < width; x++){
      row.push({x,y,occupied: null })
    }
  }
  console.log(board)
  const boardSizeConst= 50
  //function to render the board
  const renderBoard = ()=>{
    //loop throught the board and get things to the web page
    let boardHTML = ''
    board.forEach(row =>{
      row.forEach(square =>{
        //for each square add a boardHTML
        boardHTML += `<div class = square style= 'top:${square.y*boardSizeConst}px; left:${square.x* boardSizeConst}px; background-color:${square.color}'></div>`
      })
    })
    document.getElementById('board').innerHtml =boardHTML
    console.log('render board')
  }
  renderBoard()
})
