function mobileBroswer() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
  /*if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }*/

  if (/android/i.test(userAgent) || mobileBrowser() === false) {
        return "Android";
    }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}

if (getMobileOperatingSystem() === "Android") {
  import Speech from "https://raw.githubusercontent.com/tom-s/speak-tts/master/lib/speak-tts.js";
} else if {
  import Speech from "https://raw.githubusercontent.com/tom-s/speak-tts/master/lib/ios.js";
}
let speech;

var right = new Audio('https://raw.githubusercontent.com/thecwadley/morse-code/master/audio/right.mp3');
var wrong = new Audio('https://raw.githubusercontent.com/thecwadley/morse-code/master/audio/wrong-2.mp3');

function init() {
  speech = new Speech();
  speech.init({
    volume: 0.5,
    lang: "en-GB",
    rate: 1,
    pitch: 1
  });
  spellLetter();
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
button.style.height = window.innerHeight - 63 + "px";

giveMorse.onclick = function morseGiven() {
  button.innerHTML = morse[number - 1];
};

number = Math.ceil(Math.random() * letter.length);

function playSound(letter) {
  button.innerHTML = letter;
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

function endClick(time) {
    var end = new Date();
    var total;
    button.style.backgroundColor = "lightgray";
    body.style.backgroundColor = "lightgray";
    //console.log("test");
    total = end - time;
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
        wrong.play();
        i = 0;
        morseInput = [];
        setTimeout(function() {
          soundLetter(number);
        }, 400);
        break;
      }
    }
}

function spellLetter() {
  //console.log("crackers");
  //button.style.backgroundColor = "#000000";
  var start;
  var total;
 
  
  button.addEventListener("mousedown", function touchstarted() {
    start = new Date();
  });

  button.addEventListener("mouseup", function touchended() {
    endClick(start);
  });
  
  
  button.addEventListener("touchstart", function touchstarted() {
    event.preventDefault();
    start = new Date();
    //console.log("test");
  });

  button.addEventListener("touchend", function touchended() {
    event.preventDefault();
    endClick(start);
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
    morseInput = [];
    right.play();
    setTimeout(function() {
      startReading();
    }, 400);
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
