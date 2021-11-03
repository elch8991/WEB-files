console.log("hello world")

//Name Collection
var guestName = prompt("Please enter your name");
var ripple = false
if (guestName!= null) {
  document.getElementById("greeting").innerHTML = "Good day " + guestName + ",";
  ripple = true;
}
  // reference: https://www.universalclass.com/articles/computers/javascript/user-input-and-output-in-javascript.htm//
//Date generator
const listDays = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
const date = new Date();
if (ripple === true) {
  theDay = listDays[date.getDay()];
  document.getElementById("dayWeek").innerHTML = "Happy " + theDay + ",";
}

function threeGrads(){
  document.getElementById("grateful").submit();

}

//Display none
function select(emotion){
  console.log("clicked");
  console.log(emotion);
  var optionOne = document.getElementById("ELEMENT ID I CHOOSE")

  if (emotion === "Energized"){
    document.getElementById("selection").innerHTML = emotion;
  }else if (emotion === "Drained") {
    document.getElementById("selection").innerHTML = emotion;
    optionOne.innerHTML = ""
  } else if (emotion === "Overwhelmed") {
    document.getElementById("selection").innerHTML = emotion;
    optionOne.innerHTML = ""
  } else if (emotion === "Joyful") {
    document.getElementById("selection").innerHTML = emotion;
    optionOne.innerHTML = ""
  }
    else if (emotion === "Pensive") {
    document.getElementById("selection").innerHTML = emotion;
    optionOne.innerHTML = ""
  }
    else if (emotion === "Sad") {
    document.getElementById("selection").innerHTML = emotion;
    optionOne.innerHTML = ""
  }
    else if (emotion === "Indifferent") {
    document.getElementById("selection").innerHTML = emotion;
    optionOne.innerHTML = ""
  }
    //Display to true at end of if statement
    //CHANGE PAGE BASED ON THIS SELECTION

}
