document.addEventListener( 'DOMContentLoaded', () =>{
  const h1 = document.querySelector('h1')
  h1.textContent ='Snake and Ladder!'

  //function to make the dice roll
  window.rollDice =()=> {
    const max = 6
    const roll = Math.ceil(Math.random() * max)
    console.log(roll)
  }

})
