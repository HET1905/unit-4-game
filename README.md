## Crystal Collector Game
This is a game to collect crystals. If your total score same as the random number than you will win otherwise you loose. 

## Technology used

### HTML, CSS3 and JQuery
* I used html and css for page structure and basic styling. 
* Also used media query to make it responsive for small screen size.
* Achieved interactive functionality using JQuery.

## Features
* The game has colorful look with the background image and background colors with different opacity.
* It has the hover effect on each crystal mouse over.
* Css3 animation effect for win or loose display.

## Screenshots
* Crystals: 
![alt text](https://github.com/HET1905/unit-4-game/blob/master/assets/images/screenShot1.png "Crystals")

* Game Console Look:
![alt text](https://github.com/HET1905/unit-4-game/blob/master/assets/images/screenShot2.png "Game Console")

## Code
``` Javascript
function generateRandomNum() {
    var max = 121;
    var min = 19;
    randomNumber = Math.floor((Math.random() * (max - min)) + min);
    return randomNumber;
}
```
## Installation
* No installation needed to play this game. 
* Just open the below link in your browser and play until you get bored !!! :relaxed:
 https://het1905.github.io/unit-4-game/

 ## How to play

 1. At the begining of the game a random number will be generated.
 2. You have four crystals. Each crystal has different random value.
 3. Each time you click on crytal will add the value of that crystal to your total score.
 4. If your score match the random number you will win otherwise you loose.
 5. Each time you win or loose game will,a new random number and new different random values for crystals will be generated automatically.
 6. Isn't it easy to play. Have fun.

 
## License
Designed and developed by Hetal Patel

MIT © [Hetal Patel]()
