var randomNumber1 = (Math.floor(Math.random()*6)+1);
var imageDiceSource= "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src", imageDiceSource);

var randomNumber2= (Math.floor(Math.random()*6)+1);
var imageDiceSource2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imageDiceSource2);

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerText="player 1 WINS";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerText="player 2 WINS";
}
else{
  document.querySelector("h1").innerText="draw";
}