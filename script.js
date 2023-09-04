let TICK = 10;
let deg = 0;
let image = document.getElementById("rotated");
let mainLoop = function(){  
  image.style.transform = "rotate3d(1, 1, 1, "+ deg +"deg)";  
  deg += 2;  
    setTimeout(mainLoop, TICK);
  }
window.onload = function(){
  mainLoop();
}