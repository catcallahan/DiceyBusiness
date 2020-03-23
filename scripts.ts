//-------Global Variables------//
let diceVal = []
let counter : number = 0
let allDice: any[] = [];



//------ OOP Class ----//
class Die {
    div : HTMLElement;

    
    constructor(public value : number) {
        this.value = value;
        this.div = document.createElement('div');
        this.div.classList.add('dice');
        this.div.id = counter.toString();
        this.div.innerText = this.value.toString();
        allDice.push(this)
        $(this.div).click(() => {
            this.roll();
        });
       $(this.div).dblclick(() => {
           this.removeDie();
       })

        $('.diceContainer').append(this.div);
    }

    roll() {
        this.value = randomVal(1, 6)
        this.div.innerText = this.value.toString();
        
    }

    removeDie() {
        const index = allDice.indexOf(this);
        if(index > -1){
            allDice.splice(index, 1)
        }
        this.div.remove();
    }
}

//---- Button Events----//
$('.getDice').on('click', function () {
    insertDice();
});


$('.rollDice').click(function () {
    allDice.forEach((val) => {
        val.roll()
    });
});

$('.sumDice').click(function () {
    diceTotal(allDice);
});

// --- Global Funtions ---//
function insertDice() {
    new Die(randomVal(1, 6));
    counter++
}


function randomVal(min: number, max: number) {
    return Math.floor((Math.random() * (max - min)) + min)
}


function diceTotal<arr>(arg : arr[]) {
    let diceVal: number[] = [];
    allDice.forEach((val) => {
        let num = parseInt(val.div.innerText)
        diceVal.push(num);
    });
    let answer = diceVal.reduce((acc, val) => acc + val)
    alert(`Your total is: ${answer}`);
}