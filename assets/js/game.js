var randomNumber;
var randomGem1;
var randomGem2;
var randomGem3;
var randomGem4;

// var totalScore = 0;//
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

$(document).ready(function () {
    var randomNum, gem1, gem2, gem3, gem4, totalScore;

    function fnAllRandom() {
        randomNum = generateRandomNum();
        gem1 = generateRandomGem1();
        gem2 = generateRandomGem2();
        gem3 = generateRandomGem3();
        gem4 = generateRandomGem4();
        totalScore = 0;
        $("#txtRandomNumber").text(randomNum);
        $("#txtScore").text(totalScore);
        $("#txtResult").animate({fontSize : "1em"},1500); 
    }

    fnAllRandom();

    $("#txtWin").text(win);
    $("#txtLoose").text(loose);

    function checkScore(totalScore) {
        if (totalScore == randomNum) {
            $("#txtResult").text("You Win!!");
            $("#txtResult").animate({fontSize : "1.2em"},1500);
            win++;
            $("#txtWin").text(win);
            
            fnAllRandom();
        } else if (totalScore > randomNum) {
            $("#txtResult").text("You Loose!!");
            $("#txtResult").animate({fontSize : "1.2em"},1500); 
            loose++;
            $("#txtLoose").text(loose);
            fnAllRandom();

        }
    }
    $("#gem1").click(function () {
        totalScore += gem1;
        $("#txtScore").text(totalScore);
        checkScore(totalScore);
    })

    $("#gem2").click(function () {
        totalScore += gem2;
        $("#txtScore").text(totalScore);
        checkScore(totalScore);
    })

    $("#gem3").click(function () {
        totalScore += gem3;
        $("#txtScore").text(totalScore);
        checkScore(totalScore);
    })

    $("#gem4").click(function () {
        totalScore += gem4;
        $("#txtScore").text(totalScore);
        checkScore(totalScore);
    })

})