var randomNumber;
var randomGem1;
var randomGem2;
var randomGem3;
var randomGem4;

var totalScore = 0;
var win = 0;
var loose = 0;


function generateRandomNum() {
    var max = 121;
    var min = 19;
    randomNumber = Math.floor((Math.random() * (max - min)) + min);
    return randomNumber;

}

function generateRandomGem1() {
    randomGem1 = Math.floor((Math.random() * (13 - 1)) + 1);
    return randomGem1;
}

function generateRandomGem2() {
    randomGem2 = Math.floor((Math.random() * (13 - 1)) + 1);
    return randomGem2;
}

function generateRandomGem3() {
    randomGem3 = Math.floor((Math.random() * (13 - 1)) + 1);
    return randomGem3;
}

function generateRandomGem4() {
    randomGem4 = Math.floor((Math.random() * (13 - 1)) + 1);
    return randomGem4;
}

var totalScore, gem1, gem2, gem3, gem4;
$(document).ready(function () {
    var randomNum = generateRandomNum();
    var gem1 = generateRandomGem1();
    var gem2 = generateRandomGem2();
    var gem3 = generateRandomGem3();
    var gem4 = generateRandomGem4();

    $("#txtRandomNumber").text(randomNum);
    $("#txtScore").text(totalScore);
    $("#txtWin").text(win);
    $("#txtLoose").text(loose);

    $("#gem1").click(function () {

        totalScore += gem1;
        $("#txtScore").text(totalScore);
        if (totalScore == randomNum) {
            alert("you win");
        } else if (totalScore > randomNum) {
            alert("you loose");
        }

    })
    $("#gem2").click(function () {
        totalScore += gem2;
        $("#txtScore").text(totalScore);
        if (totalScore == randomNum) {
            alert("you win");
        } else if (totalScore > randomNum) {
            alert("you loose");
        }
    })

    $("#gem3").click(function () {
        totalScore += gem3;
        $("#txtScore").text(totalScore);
        if (totalScore == randomNum) {
            alert("you win");
        } else if (totalScore > randomNum) {
            alert("you loose");
        }
    })

    $("#gem4").click(function () {
        totalScore += gem4;
        $("#txtScore").text(totalScore);
        if (totalScore == randomNum) {
            alert("you win");
        } else if (totalScore > randomNum) {
            alert("you loose");
        }
    })

    // if(totalScore==randomNum){
    //     alert("you win");
    // }else if((totalScore<randomNum) || (totalScore >randomNum)) {
    //     alert("you loose");
    // }





})