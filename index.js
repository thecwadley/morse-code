import Speech from "../morse-code/speak-tts-master/src/speak-tts.js";
let speech;

function init() {
  speech = new Speech();
  speech.init({
    volume: 0.5,
    lang: "en-GB",
    rate: 1,
    pitch: 1
  });
}

var button = document.getElementById("letter");
var retry = document.getElementById("retry");
var reading = "true";

var body = document.getElementById("body");

var giveMorse = document.getElementById("give");
var morse = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--.."
];

var letter = [
  [150, 151],
  /*b2*/ [151, 150, 150, 150],
  /*c3*/ [151, 150, 151, 150],
  /*d4*/ [151, 150, 150],
  /*e5*/ [150],
  /*f6*/ [150, 150, 151, 150],
  /*g7*/ [151, 151, 150],
  /*h8*/ [150, 150, 150, 150],
  /*i9*/ [150, 150],
  /*j10*/ [150, 151, 151, 151],
  /*k11*/ [151, 150, 151],
  /*l12*/ [150, 151, 150, 150],
  /*m13*/ [151, 151],
  /*n14*/ [151, 150],
  /*o15*/ [151, 151, 151],
  /*p16*/ [150, 151, 151, 150],
  /*q17*/ [151, 151, 150, 151],
  /*r18*/ [150, 151, 150],
  /*s19*/ [150, 150, 150],
  /*t20*/ [151],
  /*u21*/ [150, 150, 151],
  /*v22*/ [150, 150, 150, 151],
  /*w23*/ [150, 151, 151],
  /*x24*/ [151, 150, 150, 151],
  /*y25*/ [151, 150, 151, 151],
  /*z26*/ [151, 151, 150, 150]
];
var number = Math.ceil(Math.random() * letter.length);
var morseInput = [];

button.style.margin = "-8px";
//console.log("resolution: " + window.innerWidth + "x" + window.innerWidth);
button.style.width = window.innerWidth /** 0.96*/ + "px";
button.style.height = window.innerHeight - window.innerHeight * 0.075 + "px";

giveMorse.onclick = function morseGiven() {
  button.innerHTML = morse[number - 1];
};

number = Math.ceil(Math.random() * letter.length);

function playSound(letter) {
  speech.setLanguage("en-US");
  speech.speak({
    text: letter,
    queue: false
  });
}

function soundLetter(val) {
  var EnglishLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  playSound(EnglishLetters[val - 1]);
}

function startReading() {
  number = Math.ceil(Math.random() * letter.length);
  //console.log("reading: " + reading);
  if (reading === "true") {
    //console.log("number: " + number);
    soundLetter(number);
    reading = "false";
    //console.log("reading: " + reading);
  }
}

function spellLetter() {
  //console.log("crackers");
  //button.style.backgroundColor = "#000000";
  var start;
  var end;
  var total;

  button.addEventListener("touchstart", function touchstarted() {
    start = new Date();
    //console.log("test");
  });

  button.addEventListener("touchend", function touchended() {
    end = new Date();
    button.style.backgroundColor = "lightgray";
    body.style.backgroundColor = "lightgray";
    //console.log("test");
    total = end - start;
    //alert("Button held for " + total + " seconds.");
    morseInput.push(total);
    //console.log("morseInput: " + morseInput)

    for (var i = 0; i < letter[number - 1].length; i++) {
      //console.log("CorrValue: " + letter[number - 1][i]);
      //console.log("MyValue: " + morseInput[i]);
      console.log(morseInput);
      if (morseInput[i] === undefined) {
        console.log("___ (____)");
      } else if (
        letter[number - 1][i] > morseInput[i] &&
        letter[number - 1][i] === 150
      ) {
        console.log(letter[number - 1][i] + "sdjfdjsd" + morseInput[i]);
        console.log("Yes (Dot)");
        rightAns();
      } else if (
        letter[number - 1][i] < morseInput[i] &&
        letter[number - 1][i] === 151
      ) {
        console.log(letter[number - 1][i] + "sdjfdjsd" + morseInput[i]);
        console.log("Yes (Dash)");
        rightAns();
      } else {
        console.log("Wrong!");
        button.style.backgroundColor = "#ff6969";
        body.style.backgroundColor = "#ff6969";
        reading = "true";
        soundLetter(number);
        i = 0;
        morseInput = [];
        button.innerHTML = "";
        //wrong.play();
        break;
      }
    }
  });
}

function rightAns() {
  console.log("closssssseeeeee");
  var lastInputVal = morseInput[morseInput.length - 1];
  var lastMorseVal = letter[number - 1][letter[number - 1].length - 1];
  if (lastInputVal >= lastMorseVal && lastMorseVal === 151) {
    lastInputVal = 151;
  } else if (lastInputVal <= 150 && lastMorseVal === 150) {
    lastInputVal = 150;
  }
  if (
    morseInput.length === letter[number - 1].length &&
    lastInputVal === lastMorseVal
  ) {
    button.innerHTML = "";
    button.style.backgroundColor = "#85ff9b";
    body.style.backgroundColor = "#85ff9b";
    reading = "true";
    startReading();
    morseInput = [];
    //right.play();
  }
}

retry.onclick = function morseRetried() {
  //console.log("reading: " + reading);
  //console.log("number: " + number);
  soundLetter(number);
  reading = "false";
  //console.log("reading: " + reading);
};
init();
