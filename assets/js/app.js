let randNumber = Math.floor(Math.random() * 100 + 1);
console.log(randNumber);
let guesses=10;

function randMath() {

    let number = +numberInput.value;


        if (number < randNumber) {

            indexInput.innerHTML = (`${number} меньше заданного`);

            guesses--;

            guessesInput.innerHTML = guesses;

          }
          if (number > randNumber) {

            indexInput.innerHTML = (`${number} больше заданного`);

            guesses--;

            guessesInput.innerHTML = guesses;

          }
          if (number == randNumber) {

            indexInput.innerHTML = (`${number} ПОБЕДА`);

          }

          if(guesses == 0){

            outOutput.innerHTML = (` Ответ ${randNumber} ВЫ ПРОИГРАЛИ :(`);

          }

}