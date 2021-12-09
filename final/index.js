
console.log("hello world");

const photos = ['final/Assets/Headshot.png','final/Assets/hike.JPG', 'final/Assets/zion.JPG','final/Assets/Headshot.png'];

// const photos = ['<img id = "theSwap" src="final/Assets/Headshot.png" alt="Photo of Elizabeth Chester." class ="zoomPic"/>', '<img id = "theSwap" src="final/Assets/ov.png" alt="Photo of Elizabeth Chester." class ="zoomPic"/>']
let x = 0;
const pSelect = photos[x]


document.getElementById("me").addEventListener("click", pSwap);

function pSwap() {
  console.log(photos[x]);
  document.getElementById("theSwap").src = photos[x];
  if (x >= 2){
    x = 0;
  } else {
    x ++;
  }
}
// Reference: https://oceanestars.github.io/WebRecitation/Dom-Example/index.html
