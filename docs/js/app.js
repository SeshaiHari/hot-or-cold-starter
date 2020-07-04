var attempt = 0;
function handleInstructionsModal() {
  // when users click on the element with
  // `.js-what` class, we'll fade in
  // the instructions modal
  $(".js-what").click(function () {
    $(".overlay").fadeIn(1000);
  });

  // when users click on the element with the
  // `.js-close` class, we'll fade out
  // the instructions modal
  $(".js-close").click(function () {
    $(".overlay").fadeOut(1000);
  });
}

// `$(document).ready` lets you specify a
// function that should execute when all the
// resources required by your web page have loaded.
// This code says, when the document is ready, run the
// `handleInstructionsModal` function.
$(document).ready(function () {
  handleInstructionsModal();
  var random;
  randomGenerator();
  newGame();
});

function newGame() {
  $(".js-new-game").click(function (e) {
    e.preventDefault();
    $("#js-user-guess").val("");
    $(".js-guess-count").html("0");
    $(".js-guess-list").empty();
    $("#feedback").html("Make your Guess!");
    attempt = 0;
    randomGenerator();
  });

  guess();
}

function randomGenerator() {
  random = Math.floor(Math.random() * 100 + 0);
  console.log(random);
}
function guess() {
  var guess;
  $("#js-guess-submit").click(function (e) {
    e.preventDefault();
    if ($("#js-user-guess").val() === "") {
      alert("Please enter a number!");
    } else if (
      $("#js-user-guess").val() >= 0 &&
      $("#js-user-guess").val() <= 100
    ) {
      guess = $("#js-user-guess").val();
      $("#js-user-guess").val("");
      $(".js-guess-count").html(attempt + 1);
      attempt = attempt + 1;
      $("#guessList").append("<li>" + guess + "</li>");
    } else {
      alert("Invalid Input");
    }
    console.log(random);
    feedback(guess, random);
  });
}

function feedback(g, r) {
  var d = g - r;
  d = Math.abs(d);
  if (d >= 1 && d <= 10) {
    $(".js-feedback").html("Really hot!");
  } else if (d >= 11 && d <= 25) {
    $(".js-feedback").html("Getting Hotter!");
  } else if (d >= 26 && d <= 50) {
    $(".js-feedback").html("Is it chilly in here?");
  } else if (d >= 51 && d <= 100) {
    $(".js-feedback").html("Freezing Cold!");
  } else if (d === 0) {
    $(".js-feedback").html("You Guessed the Number!");
  }
}
