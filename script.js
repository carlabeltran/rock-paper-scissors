console.log("JAVA PROPERLY LINKED TO HTML")

//Computer chooses a random value in a list of r, p, or s.
var promptComputer = ["r", "p", "s"];

//We then add to their score.
//If user wins then we add one to their wins.
var wins = 0;

//If user loses then we add one to their losses.
var losses = 0;

//If user ties then we add one to their ties.
var ties = 0;


for (var i = 0; i < 10; i++){
    //Randomly chooses a choice from the options array
    var computerGuess =
      promptComputer[Math.floor(Math.random() * promptComputer.length)];
    //Test if it's working correctly
    console.log(computerGuess);

    //Prompt user to enter r, p, or s representing rock, paper, or scissors.
    var promptUser = prompt("Enter r, p, s, to play!");
    //Collect users answer and converts answer to lower case
    promptUser = promptUser.toLowerCase();
    //Logs users answers - test
    console.log(promptUser);

    //We determine if the user wins or not.
    if (promptUser === "r" || promptUser === "s" || promptUser === "p") {
        alert("Computer choice " + computerGuess);
        if ((promptUser=== "r" && computerGuess === "s") ||
            (promptUser === "s" && computerGuess === "p") || 
            (promptUser === "p" && computerGuess === "r")) {
            wins++;
            alert("You've won " + wins + " time(s)!");
        } else if (promptUser === computerGuess) {
            ties++;
            alert("You've tied " + ties + " time(s).");
        } else {
            losses++;
            alert("You've lost " + losses + " time(s).");
        };
    };
};

alert("Total wins: " + wins + "\nTotal ties: " + ties + "\nTotal losses: " + losses);