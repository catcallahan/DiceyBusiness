"use strict";
//-------Global Variables------//
var diceVal = [];
var counter = 0;
var allDice = [];
//------ OOP Class ----//
var Die = /** @class */ (function () {
    function Die(value) {
        var _this = this;
        this.value = value;
        this.value = value;
        // this.value = randomVal(1, 6)
        this.div = document.createElement('div');
        this.div.classList.add('dice');
        this.div.id = counter.toString();
        this.div.innerText = this.value.toString();
        allDice.push(this);
        $(this.div).click(function () {
            _this.roll();
        });
        $(this.div).dblclick(function () {
            _this.removeDie();
        });
        $('.diceContainer').append(this.div);
    }
    Die.prototype.roll = function () {
        this.value = randomVal(1, 6);
        this.div.innerText = this.value.toString();
    };
    Die.prototype.removeDie = function () {
        var index = allDice.indexOf(this);
        if (index > -1) {
            allDice.splice(index, 1);
        }
        this.div.remove();
    };
    return Die;
}());
//---- Button Events----//
$('.getDice').on('click', function () {
    insertDice();
});
$('.rollDice').click(function () {
    allDice.forEach(function (val) {
        val.roll();
    });
});
$('.sumDice').click(function () {
    diceTotal(allDice);
});
// --- Global Funtions ---//
function insertDice() {
    new Die(randomVal(1, 6));
    counter++;
}
function randomVal(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}
function diceTotal(arg) {
    var diceVal = [];
    allDice.forEach(function (val) {
        var num = parseInt(val.div.innerText);
        diceVal.push(num);
    });
    var answer = diceVal.reduce(function (acc, val) { return acc + val; });
    alert("Your total is: " + answer);
}
