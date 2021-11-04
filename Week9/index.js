console.log("hello world")

//Name Collection
var guestName = prompt("Please enter your name");
var ripple = false;
if (guestName!= null) {
  document.getElementById("greeting").innerHTML = "Good day " + guestName + ",";
  daySelect = true;
}
  // reference: https://www.universalclass.com/articles/computers/javascript/user-input-and-output-in-javascript.htm//
//Date generator
const listDays = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
const date = new Date();
if (daySelect === true) {
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
  if (emotion === "Energized"){
    document.getElementById("selection").innerHTML = emotion;
    document.getElementById("choice").innerHTML = "Let's explore some options for how to best take care of yourself based on how you are feeling in this momement!";
    document.getElementById("quote").innerHTML = "Quote: " + "Your state of mind and attitude will undoubtedly affect other people. When you can look on the bright side of life, you will inspire others to do the same -Steve Jefferson";
    document.getElementById("activity").innerHTML = "Prompt: " + "Use your energy! help a frined with an errand, volunteer, exercise, or explore a hobby!";
    document.getElementById("resource").innerHTML = "Try out this activity: " + "https://www.self.com/gallery/free-fitness-apps-home-workouts";
    }
    else if (emotion === "Drained") {
      document.getElementById("selection").innerHTML = emotion;
      document.getElementById("choice").innerHTML = "Let's explore some options for how to best take care of yourself based on how you are feeling in this momemnt!";
      document.getElementById("quote").innerHTML = "Quote: " + "Energy and persistence conquer all things. – Benjamin Franklin";
      document.getElementById("activity").innerHTML = "Prompt: " + "Sometimes when we feel the least energized it’s time to rest. Make it a goal to get 3 consecutive days of 8 hours of sleep to recharge your energy!";
      document.getElementById("resource").innerHTML = "Try out this activity: " + "https://youtu.be/SEfs5TJZ6Nk";
    }
    else if (emotion === "Overwhelmed") {
      document.getElementById("selection").innerHTML = emotion;
      document.getElementById("choice").innerHTML = "Let's explore some options for how to best take care of yourself based on how you are feeling in this momemnt!";
      document.getElementById("quote").innerHTML = "Quote: " + "Just doing nothing and having those still moments is what really rejuvenates the body. -Miranda Kerr";
      document.getElementById("activity").innerHTML = "Prompt: " + "Discover the beauty of a 'To Do' list. Sometimes breaking down tasks into smaller steps results in more clarity in what you must do to complete a task.";
      document.getElementById("resource").innerHTML = "Try out this activity: " + "http://blog.iqmatrix.com/how-to-mind-map";
    }
    else if (emotion === "Joyful") {
      document.getElementById("selection").innerHTML = emotion;
      document.getElementById("choice").innerHTML = "Let's explore some options for how to best take care of yourself based on how you are feeling in this momemnt!";
      document.getElementById("quote").innerHTML = "Quote: " + "If you carry joy in your heart, you can heal any moment. – Carlos Santana";
      document.getElementById("activity").innerHTML = "Prompt: " + "Spread the positivity around! Complete a random act of kindness, phone a friend, or just have a solo dance party!";
      document.getElementById("resource").innerHTML = "Try out this activity: " + "https://www.inc.com/scott-mautz/want-to-spread-joy-at-work-this-month-try-these-31-random-acts-of-christmas-kind.html";
    }
    else if (emotion === "Pensive") {
      document.getElementById("selection").innerHTML = emotion;
      document.getElementById("choice").innerHTML = "Let's explore some options for how to best take care of yourself based on how you are feeling in this momemnt!";
      document.getElementById("quote").innerHTML = "Quote: " + "All major religious traditions carry basically the same message, that is love, compassion and forgiveness. The important thing is they should be part of our daily lives. - Dalai Lama.";
      document.getElementById("activity").innerHTML = "Prompt: " + "When engulfed in thought talk a walk to let your mind wander towards the root of your reflections.";
      document.getElementById("resource").innerHTML = "Try out this activity: " + "https://advice.theshineapp.com/articles/32-journal-prompts-for-self-reflection-and-self-care/";
    }
    else if (emotion === "Sad") {
      document.getElementById("selection").innerHTML = emotion;
      document.getElementById("choice").innerHTML = "Let's explore some options for how to best take care of yourself based on how you are feeling in this momemnt!";
      document.getElementById("quote").innerHTML = "Quote: " + "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis";
      document.getElementById("activity").innerHTML = "Prompt: " + "Sometimes there’s nothing more comforting than a loved one’s voice. Pick up the phone and let someone know how you’re feeling.";
      document.getElementById("resource").innerHTML = "Try out this activity: " + "https://youtu.be/reASzZP63HQ";
    }
    else if (emotion === "Indifferent") {
      document.getElementById("selection").innerHTML = emotion;
      document.getElementById("choice").innerHTML = "Let's explore some options for how to best take care of yourself based on how you are feeling in this momemnt!";
      document.getElementById("quote").innerHTML = "Quote: " + "The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart. -Helen Keller";
      document.getElementById("activity").innerHTML = "Prompt: " + "Tap into your creative side: cook a meal, work on a coloring book, read a good book, try something new!";
      document.getElementById("resource").innerHTML = "Try out this activity: " + "https://youtu.be/0oz5aEmScms";
    }
  }
