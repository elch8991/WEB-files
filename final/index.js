
console.log("hello world");

const photos = ['Headshot.png','ov.png'];
const x = 0;

function new(){
  console.log("clicked");
  if (x < 4){
    document.getElementById("me").innerHTML = 'photos[x]';
    x =+ 1
  }
}
