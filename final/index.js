const photos = ['Headshot.png','ov.png'];
const x = 0;
function new(){
  if (x < 4){
    document.getElementById("me").innerHTML = 'photos[x]';
    x =+ 1
  }
}
