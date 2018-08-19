//Game variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuess = [];
var computerChoice;

//Starting the game
startPsychicGame();

function startPsychicGame() {

    //Computer randomly chooses a letter
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var randomLetter = alphabet[Math.floor(Math.random() * 26)];
    var computerChoice = randomLetter;

    console.log(computerChoice);

    checkIfCorrect();

    function checkIfCorrect() {

        document.onkeyup = function (event) {

            //Player's key press turned into alphanumeric key, then lowercase string
            var playerChoice = String.fromCharCode(event.keyCode).toLowerCase();

            //Chastises player for hitting keys other than alphanumerics. ;o)
            //Unicode 65 = a, Unicode 90 = z.
            if (event.keyCode < 65 || event.keyCode > 90) {
                alert("Letters only, por favor!");

            //Shames player for repeating guesses/having repeat guesses deducted :oP
            } else if (yourGuess.indexOf(playerChoice) >= 0) {
                alert("Stop repeating yourself (repeating yourself)!");

            //For a correct guess, game begrudgingly admits player's psychic prowess
            } else if (playerChoice === computerChoice) {
                console.log("You won!");
                alert("You won! But since you're psychic, you already knew that...right?");

                //Increases wins by 1 and resets game
                wins = wins + 1;
                document.getElementById("your-wins").innerHTML = wins;

                resetGame();

            } else {

                // For each incorrect guess by player, decreases remaining guesses by 1
                guessesLeft--;

                // Appends player's choice to the array/yourGuess variable
                document.getElementById("guesses-left").innerHTML = guessesLeft;
                yourGuess.push(playerChoice);

                console.log("Your guesses so far: " + yourGuess);

                document.getElementById("your-guesses").innerHTML = yourGuess;

                console.log("Guesses Left: " + guessesLeft);

                checkGuessesLeft();
            }
        }
    }

    function resetGame() {

        // Guesses left back up to starting point of 9
        guessesLeft = 9;

        //Player's guess array back to empty
        yourGuess = [];

        //Reset on player's screen
        document.getElementById("guesses-left").innerHTML = guessesLeft;
        document.getElementById("your-guesses").innerHTML = yourGuess;

        //Restart game (computer to choose new random letter)
        startPsychicGame();

    }

    function checkGuessesLeft() {

        if (guessesLeft === 0) {

            //Game snarkily alerts player to loss
            console.log("You lost.");
            alert("You lost! Not so psychic after all, are you?");

            //Losses go up by 1 and new loss count displays on screen
            losses = losses + 1
            document.getElementById("your-losses").innerHTML = losses;

            //Restart game (computer to choose new random letter)
            resetGame();

        } else {
            console.log("Incorrect. Try again"); //test
            checkIfCorrect();
        }

    }

}