let clickP = document.querySelectorAll(".letterb");
console.log(clickP);

clickP.forEach((element) => {
  element.addEventListener("click", () => {
    let bcase = element.innerHTML;
    makeSound(bcase);
  });
});

document.addEventListener("keypress", (press1) => {
  let keypress01 = press1.key;
  let keypress02 = keypress01.toUpperCase();
  makeSound(keypress02);
});

function makeSound(keyp) {
  switch (keyp) {
    case "A":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "S":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "D":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "F":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "J":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "K":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "L":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    default:
      console.log("Something went wrong !");
  }
}
