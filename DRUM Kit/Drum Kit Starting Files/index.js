// document.querySelectorAll("button").addEventListener("click",function(){alert("I got Clicked!");});
var len = document.querySelectorAll(".drum").length;
for(let i=0;i<len;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){

    var key =  this.innerHTML;
    situations(key);
    buttonflash(key);
  }
);

}


document.addEventListener("keydown",function(event){
    situations(event.key);
    buttonflash(event.key);
});

function situations(key){
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
    break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
    break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
    break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
    break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
    break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
    break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
    break;
    default:
      console.log(key);
  }
}



function buttonflash(currentKey) {
  var active_button = document.querySelector("."+currentKey);
  active_button.classList.add("pressed");
  setTimeout(function () {active_button.classList.remove("pressed");}, 100);
}
