var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var answer = Math.floor(Math.random() * 100) + 1;
var no_of_Guesses = 0;
var guessed_nums = [];

function play() {
    var user_guess = document.getElementById("guess").value;
    if (user_guess < 1 || user_guess > 100) {
        alert("Please provide a number between 0 to 100.");
    }
    else {
        var user_guess = Number(document.getElementById("guess").value);
        if (user_guess < answer) {
            no_of_Guesses++;
            guessed_nums.push(user_guess);
            if ((answer - user_guess) > 10) {
                msg1.innerHTML = "Your Guess is too low";
                msg2.innerHTML = "No. of guesses: " + no_of_Guesses;
                msg3.innerHTML = "Guessed Numbers are " + guessed_nums;
            }
            else
            {
                msg1.innerHTML = "Your Guess is low";
                msg2.innerHTML = "No. of guesses: " + no_of_Guesses;
                msg3.innerHTML = "Guessed Numbers are " + guessed_nums;
            }

        }
        else if (user_guess > answer) {
            no_of_Guesses++;
            guessed_nums.push(user_guess);
            if ((user_guess - answer) > 10) {
                msg1.innerHTML = "Your Guess is too High";
                msg2.innerHTML = "No. of guesses: " + no_of_Guesses;
                msg3.innerHTML = "Guessed Numbers are " + guessed_nums;
            }
            else
            {
                msg1.innerHTML = "Your Guess is high";
                msg2.innerHTML = "No. of guesses: " + no_of_Guesses;
                msg3.innerHTML = "Guessed Numbers are " + guessed_nums;
            }
        }
        else {
            msg1.innerHTML = "Awesome You got it right.";
            msg2.innerHTML = "You took total of " + no_of_Guesses + " Guesses. And the answer is " + answer;
            msg3.innerHTML = "Your guessed numbers were : " + guessed_nums;
            guessed_nums = [];
            no_of_Guesses = 0;
            answer = Math.floor(Math.random() * 100) + 1;
            document.getElementById("guess").value = null;
            document.getElementById("guess").placeholder = "Try Again?!"
        }
        //msg1.innerHTML = "The number you chose is " + user_guess;
    }

}