// //-------Global Variables------//
// let diceVal = []
// let counter = 0
// let allDice = [];;


// //------ OOP Class ----//
// class Die {
//     constructor(value) {
//         this.value = value;
//         this.value = randomVal(1, 6)
//         this.div = document.createElement('div');
//         this.div.classList.add('dice');
//         this.div.id = counter
//         this.div.innerText = this.value;
//         allDice.push(this)
//         $(this.div).click(() => {
//             this.roll();
//         });
//        $(this.div).dblclick(() => {
//            this.removeDie();
//        })

//         $('.diceContainer').append(this.div);
//     }

//     roll() {
//         this.value = randomVal(1, 6)
//         this.div.innerText = this.value
        
//     }

//     removeDie() {
//         const index = allDice.indexOf(this);
//         if(index > -1){
//             allDice.splice(index, 1)
//         }
//         this.div.parentNode.removeChild(this.div);
//     }
// }

// //---- Button Events----//
// $('.getDice').on('click', function () {
//     insertDice();
// });


// $('.rollDice').click(function () {
//     allDice.forEach((val) => {
//         val.roll()
//     });
// });

// $('.sumDice').click(function () {
//     diceTotal(allDice);
// });

// // --- Global Funtions ---//
// function insertDice() {
//     new Die();
//     counter++
// }


// function randomVal(min, max) {
//     return Math.floor((Math.random() * (max - min)) + min)
// }


// function diceTotal() {
//     let diceVal = [];
//     allDice.forEach((val) => {
//         let num = parseInt(val.div.innerText)
//         diceVal.push(num);
//     });
//     let answer = diceVal.reduce((acc, val) => acc + val)
//     alert(`Your total is: ${answer}`);
// }