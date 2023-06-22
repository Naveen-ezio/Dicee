var randomNumber1 = (Math.floor(Math.random()*6)+1);
var imageDiceSource= "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src", imageDiceSource);

var randomNumber2= (Math.floor(Math.random()*6)+1);
var imageDiceSource2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imageDiceSource2);


if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerText="Player 1 Won🏴";
  document.querySelectorAll("img")[2].setAttribute("src","images/img1.png");
  document.querySelectorAll("img")[3].setAttribute("src","images/img3.png");
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerText="Player 2 Won 🏴";
  document.querySelectorAll("img")[2].setAttribute("src","images/img3.png");
  document.querySelectorAll("img")[3].setAttribute("src","images/img1.png");
  
}
else{
  document.querySelector("h1").innerText="💀Draw💀";
  document.querySelectorAll("img")[2].setAttribute("src","images/img2.png");
  document.querySelectorAll("img")[3].setAttribute("src","images/img2.png");
}
