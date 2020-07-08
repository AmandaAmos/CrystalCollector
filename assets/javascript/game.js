//the gist of it all
//the game generates a random number, 19-120 assigned to randomNumberId
//each crystal is assigned a random number 1-12
//user can click on each crystal button
//each click adds that value to the user's score
//if user's score matches the random number, user wins. Adds a win, displays message, generates new random number
//if user's score exceeds random number, user loses. Adds a loss, display message, generate new random number
//update all game stats and displays
//reset button resets all game stats

$(document).ready(function () {

    //create variables for the random number and crystals
    var randomNumber = 0;
    var redCrystalNumber = 0;
    var blueCrystalNumber = 0;
    var goldCrystalNumber = 0;
    var greenCrystalNumber = 0;

    //create random number generator function
    function randomNumberGenerator() {
        randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        console.log("The Random Number is " + randomNumber);

        //add to HTML
        $("#randomNumberId").html(randomNumber);
    };

    //create random number generator function for each crystal
    function randomCrystalValuesGenerator() {
        //red crystal
        redCrystalNumber = Math.floor(Math.random() * 12) + 1;
        console.log("The red crystal is valued at " + redCrystalNumber);
        //blue crystal
        blueCrystalNumber = Math.floor(Math.random() * 12) + 1;
        console.log("The blue crystal is valued at " + blueCrystalNumber);
        //gold crystal
        goldCrystalNumber = Math.floor(Math.random() * 12) + 1;
        console.log("The gold crystal is valued at " + goldCrystalNumber);
        //green crystal
        greenCrystalNumber = Math.floor(Math.random() * 12) + 1;
        console.log("The green crystal is valued at " + greenCrystalNumber);
    };

    //call the functions to begin the game
    randomNumberGenerator();
    randomCrystalValuesGenerator();

    //create variable for Your Score and game stats that will be updated
    var yourScoreIs = 0;
    var wins = 0;
    var losses = 0;


    //now the clicky part where the crystal values are added to YourScoreIs
    //red crystal
    $("#redCrystal").on("click", function () {
        yourScoreIs = yourScoreIs + redCrystalNumber;
        console.log(yourScoreIs);
        $("yourScoreIs").html(yourScoreIs);

        //when user -hopefully- wins, update wins, update message
        if (yourScoreIs === randomNumber) {
            wins = wins + 1;
            $("#wins").html("Wins: " + wins);
            $("#message").html("You WIN!");
            console.log("You've WON!!! WOOHOO!!!");
            //reset YourScore, RandomNumber, crystalNumbers
            randomNumberGenerator();
            randomCrystalValuesGenerator();
            yourScoreIs = 0;
            $("#yourScoreIs").html(yourScoreIs);
        };

        //when user loses, update losses, update message
        if (yourScoreIs > randomNumber) {
            losses = losses + 1;
            $("#losses").html("Losses: " + losses);
            $("#message").html("You LOSE");
            console.log("You just lost, booooo");
            //reset YourScore, RandomNumber, crystalNumbers
            randomNumberGenerator();
            randomCrystalValuesGenerator();
            yourScoreIs = 0;
            $("#yourScoreIs").html(yourScoreIs);
        };
    });
    //blue crystal
    $("#blueCrystal").on("click", function () {
        yourScoreIs = yourScoreIs + blueCrystalNumber;
        console.log(yourScoreIs);
        $("yourScoreIs").html(yourScoreIs);

        //when user -hopefully- wins, update wins, update message
        if (yourScoreIs === randomNumber) {
            wins = wins + 1;
            $("#wins").html("Wins: " + wins);
            $("#message").html("You WIN!");
            console.log("You've WON!!! WOOHOO!!!");
            //reset YourScore, RandomNumber, crystalNumbers
            randomNumberGenerator();
            randomCrystalValuesGenerator();
            yourScoreIs = 0;
            $("#yourScoreIs").html(yourScoreIs);
        }

        //when user loses, update losses, update message
        if (yourScoreIs > randomNumber) {
            losses = losses + 1;
            $("#losses").html("Losses: " + losses);
            $("#message").html("You LOSE");
            console.log("You just lost, booooo");
            //reset YourScore, RandomNumber, crystalNumbers
            randomNumberGenerator();
            randomCrystalValuesGenerator();
            yourScoreIs = 0;
            $("#yourScore").html(yourScoreIs);
        }
    });
    //gold crystal
    $("#goldCrystal").on("click", function () {
        yourScoreIs = yourScoreIs + goldCrystalNumber;
        console.log(yourScoreIs);
        $("yourScore").html(yourScoreIs);

        //when user -hopefully- wins, update wins, update message
        if (yourScoreIs === randomNumber) {
            wins = wins + 1;
            $("#wins").html("Wins: " + wins);
            $("#message").html("You WIN!");
            console.log("You've WON!!! WOOHOO!!!");
            //reset YourScore, RandomNumber, crystalNumbers
            randomNumberGenerator();
            randomCrystalValuesGenerator();
            yourScoreIs = 0;
            $("#yourScore").html(yourScoreIs);
        }

        //when user loses, update losses, update message
        if (yourScoreIs > randomNumber) {
            losses = losses + 1;
            $("#losses").html("Losses: " + losses);
            $("#message").html("You LOSE");
            console.log("You just lost, booooo");
            //reset YourScore, RandomNumber, crystalNumbers
            randomNumberGenerator();
            randomCrystalValuesGenerator();
            yourScoreIs = 0;
            $("#yourScore").html(yourScoreIs);
        }
    });
    //green crystal
    $("#greenCrystal").on("click", function () {
        yourScoreIs = yourScoreIs + greenCrystalNumber;
        console.log(yourScoreIs);
        $("yourScore").html(yourScoreIs);

        //when user -hopefully- wins, update wins, update message
        if (yourScoreIs === randomNumber) {
            wins = wins + 1;
            $("#wins").html("Wins: " + wins);
            $("#message").html("You WIN!");
            console.log("You've WON!!! WOOHOO!!!");
            //reset YourScore, RandomNumber, crystalNumbers
            randomNumberGenerator();
            randomCrystalValuesGenerator();
            yourScoreIs = 0;
            $("#yourScore").html(yourScoreIs);
        }

        //when user loses, update losses, update message
        if (yourScoreIs > randomNumber) {
            losses = losses + 1;
            $("#losses").html("Losses: " + losses);
            $("#message").html("You LOSE");
            console.log("You just lost, booooo");
            //reset YourScore, RandomNumber, crystalNumbers
            randomNumberGenerator();
            randomCrystalValuesGenerator();
            yourScoreIs = 0;
            $("#yourScore").html(yourScoreIs);
        }
    });

    //reset gameStats
    //user clicks the reset button, reset all gameStats
    $("#resetGame").on("click", function () {
        wins = 0;
        losses = 0;
        yourScoreIs = 0;
        $("#wins").html("Wins: " + 0);
        $("#losses").html("Losses: " + 0);
        $("yourScore").html(yourScoreIs);
        $("#message").html();
        randomNumberGenerator();
        randomCrystalValuesGenerator();

    });


});