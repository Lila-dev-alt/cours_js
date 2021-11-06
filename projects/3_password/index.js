let lengthPassword = document.getElementById('length-password');
let numbers = document.getElementById('numbers');
let specials = document.getElementById('specials');
let uppercase = document.getElementById('uppercase');
let button = document.getElementById('button');

let password = document.getElementById('password');
let form = document.getElementById('form');
let error = document.getElementById('span-error');
const letters = 'abcdefghijklmnopqrstuvwxyz';
const UppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//random number
function getNumber(number) {
    let result = Math.floor(Math.random() * number);
    return result;

}


// random letter
function getLetter() {
    let alphabetSize = letters.length;
    let random = getNumber(alphabetSize);
    let result = letters[random];
    return result;
}


// random Uppercase letter
function getUppercaseLetter() {
    let alphabetSize = UppercaseLetters.length;
    let random = getNumber(alphabetSize);
    let result = UppercaseLetters[random];
    return result;
}



// random special characters
function randomSpecialChar() {

    var s = "!\"§$%&/()=?\u{20ac}";
    return s.substr(Math.floor(s.length * Math.random()), 1);
}


button.addEventListener("click", function(event) {

    event.preventDefault();
    let string = '';
    let randomLetter = '';
    let randomNumber = '';
    let randomspecials = '';
    let randomUpper = '';
    let result = [];
    if (lengthPassword.value < 8) {
        event.preventDefault();
        error.innerHTML = 'Le mot de passe doit faire au moins 8 charactères';
        error.style.color = 'red';


    } else {
        let newdiv = document.createElement("div");
        form.append(newdiv);
        for (let i = 0; i < lengthPassword.value; i++) {

            randomLetter = getLetter();
            result.push(randomLetter);

            if (numbers.checked) {
                randomNumber = getNumber(9);
                result.push(randomNumber);
            }
            if (specials.checked) {
                randomspecials = randomSpecialChar();
                result.push(randomspecials);
            }
            if (uppercase.checked) {
                randomUpper = getUppercaseLetter();
                result.push(randomUpper);
            }


            let valueToUse = result[Math.floor(Math.random() * result.length)];
            string = string + valueToUse;
        }


        newdiv.textContent = string;

    }



});