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