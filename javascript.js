var randomNumber = document.getElementById("randomNumber")

var randomMin = 19;

var randomMax = 120;

var min = 1;

var max = 12;

var wins = 0;

var losses = 0;

var score = 0;

var button1 = Math.floor(Math.random() * (+max - +min)) + +min;

var button2 = Math.floor(Math.random() * (+max - +min)) + +min;

var button3 = Math.floor(Math.random() * (+max - +min)) + +min;

var button4 = Math.floor(Math.random() * (+max - +min)) + +min;


var random = Math.floor(Math.random() * (+randomMax - +randomMin)) + +randomMin;
randomNumber.innerHTML = random


function update() {
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("score").innerHTML = score;
}
update()


function newGame(){
    random = Math.floor(Math.random() * (+randomMax - +randomMin)) + +min;
randomNumber.innerHTML = random

score = 0;

button1 = Math.floor(Math.random() * (+max - +min)) + +min;

button2 = Math.floor(Math.random() * (+max - +min)) + +min;

button3 = Math.floor(Math.random() * (+max - +min)) + +min;

button4 = Math.floor(Math.random() * (+max - +min)) + +min;

update()
}

function winLoss() {
    if (score === random) {
        alert("You win!")
        wins++
        update()
        newGame()
    } else if (score > random) {
        alert("You lose.")
        losses++
        update()
        newGame()
    }

}

$('#button1').click(function () {
    console.log(button1)
    score = score + button1
    update()
    winLoss()
});
$('#button2').click(function () {
    console.log(button2)
    score = score + button2;
    update()
    winLoss()
});
$('#button3').click(function () {
    console.log(button3)
    score = score + button3;
    update()
    winLoss()
});
$('#button4').click(function () {
    console.log(button4)
    score = score + button4;
    update()
    winLoss()
})
