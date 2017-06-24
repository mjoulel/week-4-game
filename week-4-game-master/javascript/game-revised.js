$(document).ready(function() {
    // Gets Link for Theme Song 
    // var audioElement = document.createElement("audio");
    // audioElement.setAttribute("src", "assets/The-Warriors-Luther-Come-Out-To-Play.mp3");

   	// Theme Button
    // $(".themeButton").on("click", function() {
    //     audioElement.play();
    // });

    // $(".pauseButton").on("click", function() {
    //     audioElement.pause();

    // The number we will manipulate by clicking crystals. Our "current guess" number.
    //var yourMatchingNumber = 0;
    var matchnum = 0;     //Number manipulated by clicking crysyal buttons.

    // Generates the random "target number" we will try to reach.
    var randomNum = randomNumGen();

    // Setting up our starting variables.
    var win = 0;
    var lose = 0;
    var crystals;
    

  // Function that generates random values for our crystals and returns our crystals object.
  function randomNumCrystals() {
    // Crystals object.
    return {
      "red": {
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "images/red.png"
      },
      "blue": {
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "images/blue.png"
      },
      "yellow": {
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "images/yellow.png"
      },
      "green": {
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "images/green.png"
      }
    };
  }

  // Function to create a random number between 19 and 120.
  function randomNumGen() {
    return Math.floor(Math.random() * 102) + 19;
  }

  // Function that resets the game.
  function setGame() {
    // Make our current total number 0.
    yourMatchingNumber = 0;
    // Generate random crystal values.
    crystal = randomNumCrystals();
    // Generate a random target number and render it to the page.
    randomNum = randomNumGen();
    $("#random-area").text(randomNum);
  }

  // Function that handles updating the page.
  function updateDom(didUserWin) {
    $("#winArea").empty();

    // If the user won...
    if (didUserWin === true) {
      // Show victory message, restart the game, and render the new "current guess" number.
      $("#winArea").append($("<p>").text("You won!!"));
      setGame();
      renderMatchingNumber();
    }
    // If the user lost...
    else if (didUserWin === false) {
      // Show defeat message, restart the game, and render the new "current guess" number.
      $("#winArea").append($("<p>").text("You lost!!"));
      setGame();
      renderMatchingNumber();
    }

    // Building our win/loss display and appending it to the page.
    var wSpan = $("<span>").text(win);
    var lSpan = $("<span>").text(lose);

    var pWins = $("<p>").text("Wins: ");
    var pLosses = $("<p>").text("Losses: ");

    pWins.append(wSpan);
    pLosses.append(lSpan);

    $("#winArea").append(pWins);
    $("#winArea").append(pLosses);
  }

  // Function to render our crystals to the page.
  function renderCrystals() {
    for (var key in crystals) {
      var crystalDiv = $("<div class='crystals-button' data-name='" + key + "'>");
      var crystalImg = $("<img alt='image' class='crystal-img'>").attr("src", crystal[key].imageUrl);
      crystalDiv.append(crystalImg);
      $("#crystal-area").append(crystalDiv);
    }
  }

  // Function to update our "current guess" number. We are passing in the crystal that was clicked as an argument.
  function updateMatchingNumber(crystal) {
    // Update our "current guess" number based on which crystal was clicked.
    yourMatchingNumber += crystals[crystal.attr("data-name")].points;
  }

  // Function that will render your "current guess" number to the page.
  function renderMatchingNumber() {
    var scoreNumDiv = $("<div id='score-number'>").text(yourMatchingNumber);
    $("#score-area").html();
    $("#score-area").html(scoreNumDiv);
  }

  // Call our functions to start the game!
  setGame();
  updateDom();
  renderCrystals();
  renderMatchingNumber();

  // Here we create an on.click event for the crystals.
  $(".crystals-button").on("click", function(event) {
    // Update our "current guess" number and re-render it.
    updateMatchingNumber($(this));
    renderMatchingNumber();

    // Check to see if we have won or lost.
    // If our current guess number equals the target number..
    if (yourMatchingNumber === randomNum) {
      // Increment wins, restart the game, and update the page.
      win++;
      setGame();
      updateDom(true);
    }
    // If our guess number exceeded our target number...
    else if (yourMatchingNumber > randomNum) {
      // Increment losses, restart the game, and update the page.
      lose++;
      setGame();
      updateDom(false);
    }
  });

});

   //  var matchnum = 0;			//Number manipulated by clicking crysyal buttons.
   //  var randomnum=numgen();		//Generates random number
   //  var win = 0;
   //  var lose = 0;
   //  var crystal;

   //  //Generates random values for the crystal buttons.
   //  function randomnumcrystals(){
   //  	return{
   //  		"blue":{
   //  			points: Math.floor(Math.random() * 12) + 1, imageUrl: "images/blue.png"
   //  		},
   //  		"green":{
   //  			points: Math.floor(Math.random() * 12) + 1, imageUrl: "images/green.png"
   //  		},
   //  		"red":{
   //  			points: Math.floor(Math.random() * 12) + 1, imageUrl: "images/red.png"
   //  		},
   //  		"yellow":{
   //  			points: Math.floor(Math,random() * 12) + 1, imageUrl: "images/yellow.png"
   //  		}
   //  	};
   //  }

   // //Creates a random number from 19-120
   // function numgen(){
   // 	console.log(Math.floor(Math.random() * 102) + 18);
   // }

   //Displays crystals to the pg
   // function dispcrystal(){
   // 	for (cryst)
   // 	{
   // 		var crystal-div = $("<div class='crystal-button' dataname='" + crystal + "'>");
   // 		var crystal-img = $("<img alt='image' class='crystal-image'>").attr("src", crystal(cryst).imageUrl);
   // 		crystal-div.append(crystal-img);
   // 		$("#crystal-area").append(crystal-div);
   // 	}
   // }

// });
