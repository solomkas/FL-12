let begin_a_game = true;
const maxatt = 3;
const maxstep = 4;
const prize = 2;
const firstattprize = 100;
const secattprize = 50;
const thirdattprize = 25;
const maxnumber = 8;
let currentatt = 0;
let attempts = 3;
let prizetotal = 0;
let prizepossible;
let maxNum = 8;
let askagain;
let player = confirm('Do you want to play a game?');
let randomize = Math.floor(Math.random() * (maxNum + 1));


while(begin_a_game) {
    
    if(player) {
        let firstAttPrize = 100;
        let secondAttPrize = 50;
        let thirdAttPrize = 25;
        let prize = [firstAttPrize, secondAttPrize, thirdAttPrize];
        prizepossible = prize[currentatt];
        let playerNumber = Number(prompt(`Choose a roulette pocket number from 0 to ${maxNum}` + '\n' +
                                `Attempts left: ${attempts}` + '\n' +
                               `Total prize: ${prizetotal}$` + '\n' +
                               `Possible price on current attempt: ${prizepossible}$`));
 
        if(parseInt(playerNumber) !== playerNumber || playerNumber < 0) {
            alert('Please, enter only natural positive numbers');
            ++currentatt;
            --attempts;
            
            if (currentatt === maxatt) {
                prizetotal = 0;
                alert(`Thank you for your participation. Your prize is: ${prizetotal}$`);
                askagain = confirm('Do you want to play again?');
                if (askagain) {
                    maxNum = maxnumber;
                    firstAttPrize = firstattprize;
                    secondAttPrize = secattprize;
                    thirdAttPrize = thirdattprize;
                    currentatt = 0;
                    prizetotal = 0;
                    attempts = maxatt;
                    randomize = Math.floor(Math.random() * (maxNum + 1));
                } else {
                    begin_a_game = false;
                }
            }
        } else if (playerNumber !== randomize) {
            ++currentatt;
            --attempts;
            
            if (currentatt === maxatt) {
                prizetotal = 0;
                alert(`Thank you for your participation. Your prize is: ${prizetotal}$`);
                askagain = confirm('Do you want to play again?');
                if (askagain) {
                    maxNum = maxnumber;
                    firstAttPrize = firstattprize;
                    secondAttPrize = secattprize;
                    thirdAttPrize = thirdattprize;
                    currentatt = 0;
                    prizetotal = 0;
                    attempts = maxatt;
                    randomize = Math.floor(Math.random() * (maxNum + 1));
                } else {
                    begin_a_game = false;
                }
            }
        } else {
            prizetotal += prize[currentatt];
            let winGame = confirm('Congratulation, you won!' + '\n' +  
                                  `Your prize is: ${prizetotal}$` + '\n' +  
                                  'Do you want to continue?');
            if (winGame) {
                maxNum += maxstep;
                firstAttPrize *= prize;
                secondAttPrize *= prize;
                thirdAttPrize *= prize;
                attempts = maxatt;
                currentatt = 0;
                randomize = Math.floor(Math.random() * (maxNum + 1));
            } else {
                alert(`Thank you for your participation. Your prize is: ${prizetotal}$`);
                askagain = confirm('Do you want to play again?');
                if (askagain) {
                    maxNum = maxnumber;
                    firstAttPrize = firstattprize;
                    secondAttPrize = secattprize;
                    thirdAttPrize = thirdattprize;
                    currentatt = 0;
                    prizetotal = 0;
                    attempts = maxatt;
                    randomize = Math.floor(Math.random() * (maxNum + 1));
                } else {
                    begin_a_game = false;
                }
            }
        }    
    } else {
        alert('You did not become a billionaire, but can.');
        begin_a_game = false;
    }
}


