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

![screenshot - Start Modal](https://user-images.githubusercontent.com/40343797/45220826-6777ff00-b2a7-11e8-8511-8a5f00bc0b74.png)

2. Once the game begins, there is short animation of a boat entering onto the screen and the player's submarine appears below the boat. Once the submarine appears, it can be controlled by the player using the ← ↑ → ↓ keys.

![screenshot - Beginning position](https://user-images.githubusercontent.com/40343797/45220870-8ececc00-b2a7-11e8-804a-c271278a428f.png)

3. Points are gained when the submarine is moved into a fish or other marine life. This 'captures' the specimen and points are gained. The fishes are randomly spawned and each type of fish has different movement patterns. Different types of fish are spawned at different levels and at different probabilities. Generally the fish with higher score values are only spawned at the lower depths and spawned less frequently.

![screenshot - Fish types](https://user-images.githubusercontent.com/40343797/45220971-e53c0a80-b2a7-11e8-9942-714db52793d9.png)

4. If the submarine moves into an underwater mine, the mine will explode. This deducts an amount from your remaining Air Supply.

![screenshot - Mines](https://user-images.githubusercontent.com/40343797/45220908-b4f46c00-b2a7-11e8-9460-2a4dee40d0ae.png)

5. Your Air Supply is shown in the air tank on the left of the screen. You must return to the surface before the Air Supply runs out. If you do not return to the surface before your Air Supply runs out, the game will end and your points will be lost. A beeping sound and flashing Air Supply will warn you when your Air Supply is running low.

![screenshot - End Modal Successful](https://user-images.githubusercontent.com/40343797/45221008-04d33300-b2a8-11e8-999e-62b50286c8ec.png)

## Process

The starting point for this game was creating the basic grid layout on which the submarine could move. This was created by a list of 'div's in the HTML. Each cell within the grid was an individual element. These cells are nestled within a container. The submarine, and fish were created by applying classes to the elements within the grid. When the submarine or fish is moved, their class is removed from the cell of their current position and applied to the new cell.

I created fish as objects which contain their points value, an array of their movement patterns, their age and the class which is being applied to the cell that they are in. The class relates to a css class with a corresponding background image of the fish type. When a fish is created it is added to an array of fish in play.

While the game is running, a function runs through the array of fish in play and moves each fish the corresponding amount within their movement patterns.

A function was also created which checks if a fish has been caught. This runs through the array of fish in play to check if its location is the same as that of the submarine. If it has been caught, it is removed from the array of fish in play and its corresponding points value to added to the player's score.

Once I had this mechanics working, I worked on adding a timer countdown which displayed as an air supply within the player's air tank. The height of the air supply element is a proportion of the amount of time left.

I then moved onto the task of allowing the position of the submarine to control the scrolling of the grid. This also required stoping the default behaviour of controls to prevent the user from scrolling through the grid to a position where the submarine was not visible.

As the game continued to develop I created a fish constructor function which created the fish objects and also contained the method which allowed the fish to move. I had initially also created a method which allowed the fish, when they were caught or swam off screen, to be removed from the fish in played array and remove their classes from the grid. However, I later changed this to a key within the fish object which specified whether the fish was active or not. During the game, a function now runs through the array of fish in play and removes any fish which have been set to no longer active.

The final significant element was creating a variable which specified whether the submarine was at the top of the surface when the air supply had reached zero. I created a modal with content which varied depending on whether the player had returned to the surface by the end of the game.

### Challenges

This game involves quite a lot of different things going on at the same time. It was a challenge to make sure the gaming mechanics were being being timed correctly. It was also important that I created code logic that could cope with expanding numbers of different fish characters in play at the same time.

There were several tricky tasks including the scrolling of the grid being controlled by the submarine and the animation of the fish.

### Wins

Creating cascading animations and sounds really helped the game come alive and gave me more creative control over the feel of the play. I invested a lot of time in the stying of the game, particularly the animations and air supply tank to give them a consistent and professional feel. I was particularly pleased with my 'Fish' constructor function which I then used to randomly generate different fish.

![Fish constructor function from app.js](https://user-images.githubusercontent.com/40343797/50378462-b7968980-062a-11e9-95b7-54e358bfb320.png)


When fish were created, they were added to an array of 'fishInPlay'. I was then able to call this function every 200 milliseconds to move every fish on the board.

```
function moveFish(){

  fishInPlay.forEach(fish => fish.move());

} // moves every fish 1 position in their respective movementPatternArrays
```

## Future features

If I had more time, I would like to try and make the game playable on a touchscreen device. I would need to make a control panel that would appear on a touch device to replace the keyboard inputs.

Different levels could be added to the game with different patterns of mine positioning and different fish spawning at different depths.

I would also like to improve the animations of the submarine (such as adding animated bubbles when it is moving) and improving the animations of the fish, particularly in allowing them to move diagonally.



Collap
