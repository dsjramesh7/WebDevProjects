let hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

let start = document.querySelector(".start");
let stop = document.querySelector(".stop");

let intervalID;

//Hex Code genrator
function hexcodegen() {
  let hexcode = "";
  for (let i = 0; i < 6; i++) {
    let a = hex[Math.floor(Math.random() * hex.length)];
    hexcode += a;
  }
  let body = document.querySelector("body");
  body.style.backgroundColor = "#" + hexcode;
}

//Actions performed on clicking the start button
start.addEventListener("click", function () {
  intervalID = setInterval(hexcodegen, 1000);
});

//Actions to be performed on clicking the stop button
stop.addEventListener("click", function () {
  clearInterval(intervalID);
});
