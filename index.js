


// document.querySelector("button").addEventListener("click", handleClick);
var buttons = document.querySelectorAll(".drum");

//add event handler to add buttons
for (i=0; i<buttons.length; i++) {
  buttons[i].addEventListener("click", function () {

      playSound(this.innerHTML);
      buttonAnimation(this.innerHTML);

  });
}

// Detecting keyboard press
document.addEventListener("keydown", function(event) {
  playSound(event.key);
  buttonAnimation(event.key);
})

function playSound(character) {

  switch (character) {

    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;


    default:
      console.log(character);

  }

}

function buttonAnimation(currentKey) {
  var activateButton = document.querySelector("."+currentKey);
  console.log(activateButton);
  console.log(currentKey);
  activateButton.classList.add("pressed");
  setTimeout(function() {activateButton.classList.remove("pressed");});
}
