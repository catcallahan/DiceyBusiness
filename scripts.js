counter = 0
allDice = [];

class Die {
    constructor(value) {
        value = randomVal(1, 6)
        this.div = document.createElement('div');
        this.div.classList.add('dice');
        this.div.id = counter
        this.div.innerText = value;
        $(this.div).click(() => this.roll())
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



$('.getDice').on('click', function () {
    insertDice()
})


$('.rollDice').click(function(){
    allDice.forEach((val) => {
        val.roll()
    })
})



$('.sumDice').click() //totals value of all dice in alert


function insertDice() {
    counter++
    new Die()

}


function randomVal(min, max) {
    return Math.floor((Math.random() * (max - min)) + min)
}