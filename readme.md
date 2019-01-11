# General Assembly Project 1 : Simple front-end game

### Timeframe
7 days

## Technologies used

* JavaScript (ES6) + jQuery
* HTML5 + HTML5 Audio
* CSS + CSS Animation
* GitHub

## Installation

1. Clone or download the repo
1. Open the `index.html` in your browser of choice

## My Game - Snails and Tunnels

![snails and tunnels](https://media.git.generalassemb.ly/user/17645/files/fe213900-1583-11e9-8dfd-afbbcccebfee)

You can find a hosted version here ----> [gessy90.github.io/Project-1](https://gessy90.github.io/Project-1/)

### Game overview
Snails and Tunnels is an innovative version of snakes and ladders.
Snakes and Ladders is an ancient Indian board game regarded today as a worldwide classic.
The aim of the game is to navigate one's game piece, according to die rolls, from the start to the finish, helped or hindered by ladders and snakes respectively. The game is a simple race contest based on sheer luck.


### Game Instructions
1. The game is started by clicking on the "ROLL DICE" button.

![roll dice button](https://media.git.generalassemb.ly/user/17645/files/214ce800-1586-11e9-935f-1306ff6e3681)

2. Once the game begins, the dice rolls randomly. The player makes his first move according to the number that the dice produce.

![player moving](https://media.git.generalassemb.ly/user/17645/files/69b8d580-1587-11e9-874e-e35f8143ab45)

3. After that by clicking on the "ROLL DICE" button the computer will have a go also.
![computer playing](https://media.git.generalassemb.ly/user/17645/files/332f8a80-1588-11e9-879a-a63c02686dc4)


4. If they both land on a snail they will go back 1 square.

![hitting the snails](https://media.git.generalassemb.ly/user/17645/files/8dc9e600-158a-11e9-955c-1da9d306926c)

5. If they land on a tunnel they will be transported to the other end of the tunnel.

![tunnel jump](https://media.git.generalassemb.ly/user/17645/files/0c725380-158a-11e9-8f51-8de3e9c470c0)

## Process

The starting point of the game was creating a basic grid layout so that the player and computer could move. This was created by a list of 'div's in the HTML. Each cell within the grid was an individual element. These cells are nestled within a container. The snails, and tunnels were created by applying classes to the elements within the grid. When the player or the computer is moved, their class is removed from the cell of their current position and applied to the new cell.

I created an array of objects which contains all the start and end of the tunnels. In the same array I've put also the snails start and end. In css I've given corresponding background images to the snails and the tunnels.

Afterward I created a class in css for the player and the computer and given them background images.

Both player and computer are at position 0 when the game starts. The player has a go first. The first things is that function waitThenRoll() is called and after 1 second the dice appear. After this, a function rollDice () is called when the computer randomly chooses a number between 1 and 6.

While this is going on, the player's position is moved from position 0 and is added to the right spot accordingly to the random number produced by the roll. Every time that this happens, the winConditions are constantly checked. Thanks to a boolean statement the computer has a go and its position is moved from position 0 and is added to the right spot accordingly to the random number produced by the roll again and this will go on until the end of the game.


With ladsnakes.forEach we check if the player and computer are on the same spot as the snails and tunnels and if they are on the same spot they both will go to the end. A classList is added to both the computer and the player so that they are back into their chosen position.

The whole game ends thanks to the function theEnd() and the connected 'RESET' button so both classes are removed from the grid.

### Challenges
The most challenging thing was that the player and computer are landing at the same time on the same square. I have resolved the problem by using css (transition: background 1s;) but this is not the best way of resolving the issue.

I would've liked to make it clearer to the user that the tunnel begins on square 5 and ends on square 10.


### Wins
The game works fine and I like the sound added to the dice. I also like the fact that with the function 'waitThenRoll' the dice waits one second before rolling out so that it looks more realistic an it gives time to think to the actual player.


function waitThenRoll(){
  diceSquare.innerHTML = ''
  setTimeout(() =>{
    rollDice()
  }, 1000)
}

One thing I'd like to improve on is the repetitive nature of my code.


## Future features

If I had more time, I would like to try and make the game playable on a touchscreen device. I would need to make the grid mobile responsive and be able to see the whole game on the device screen.

I would like to distinguish the entrance and the exit of the tunnel by putting a different image or animation.

When both player and computer are on the same square I would like them both to be visible instead of just one.

I would love to add more levels with more squares and multiple players.
