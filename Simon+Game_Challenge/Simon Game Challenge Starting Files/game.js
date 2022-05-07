// alert("hello");

let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;
let buttonColours = ["red", "blue", "green", "yellow"]

function nextSequence(){
  userClickedPattern = [];

  level++;
  $("#level-title").text("Level "+level);

  let randomNumber = Math.floor((Math.random()*4));
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

}
//
//
$(".btn").click(function(event){
  let userChosenColour = event.target.id;
  // console.log(userChosenColour);
  userClickedPattern.push(userChosenColour);
  // console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});
//
function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


function animatePress(currentColour){
      var header = $('#'+currentColour);
      header.addClass('pressed');
      setTimeout(function() {
        header.removeClass('pressed');
    }, 100);
}
// $(document).one("keydown",function(event){nextSequence();});
//

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    console.log("success");

    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);

    }
  }


  else{
    console.log("wrong");
  $("body").addClass("game-over");
      setTimeout(function() {
          $("body").removeClass('game-over');
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    playSound("wrong");
    startOver();

  }
}

function startOver() {
  level=0;
  gamePattern=0;
  started=false;
}



// var buttonColours = ["red", "blue", "green", "yellow"];
//
// var gamePattern = [];
// var userClickedPattern = [];
//
// var started = false;
// var level = 0;

// $(document).keypress(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

// $(".btn").click(function() {
//
//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);
//
//   playSound(userChosenColour);
//   animatePress(userChosenColour);
//
//   //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
//   checkAnswer(userClickedPattern.length-1);
// });


//1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
// function checkAnswer(currentLevel) {
//
//     //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//
//       console.log("success");
//
//       //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
//       if (userClickedPattern.length === gamePattern.length){
//
//         //5. Call nextSequence() after a 1000 millisecond delay.
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);
//
//       }
//
//     } else {
//
//       console.log("wrong");
//       // playSound(wrong);
//       $("body").addClass("game-over");
//           setTimeout(function() {
//               $("body").removeClass('game-over');
//         }, 200);
//         $("#level-title").text("Game Over, Press Any Key to Restart");
//         playSound("wrong");
//     }
//
// }

// function nextSequence() {
//
//   //6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
//   userClickedPattern = [];
//
//   level++;
//   $("#level-title").text("Level " + level);
//
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);
//
//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }

// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }
//
// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }
