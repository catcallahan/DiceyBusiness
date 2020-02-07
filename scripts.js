//-------Global Variables------//

counter = 0
allDice = [];
diceVal = [];


//------ OOP Class ----//
class Die {
    constructor(value) {
        value = randomVal(1, 6)
        this.div = document.createElement('div');
        this.div.classList.add('dice');
        this.div.id = counter
        this.div.innerText = value;
        $(this.div).click(() => {
            this.roll();
            diceVal = []
        })
        allDice.push(this)
        // (`${this.div}`).dblclick(() => {
        //     //removes div
        // })

        $('.diceContainer').append(this.div);

    }
    roll() {
        let newVal = randomVal(1, 6)
        this.div.innerText = newVal
    }

}



//---- Button Events----//

$('.getDice').on('click', function () {
    insertDice()
})


$('.rollDice').click(function () {
    allDice.forEach((val) => {
        val.roll()
    })
    diceVal = []
})


$('.sumDice').click(function () {
    diceTotal(allDice);



})



// --- Global Funtions ---//
function insertDice() {
    counter++
    new Die()

}


function randomVal(min, max) {
    return Math.floor((Math.random() * (max - min)) + min)
}


function diceTotal(arr) {
    allDice.forEach((val) => {
        let num = parseInt(val.div.innerText)
        diceVal.push(num);
    });
    let answer = diceVal.reduce((acc, val) => acc + val)
    alert(`Your total is: ${answer}`)

}