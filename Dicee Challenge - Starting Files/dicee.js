var no1= Math.floor(Math.random()*6);
var no2= Math.floor(Math.random()*6);
/*
var image =[];
image.push("images/dice1.png");
image.push("images/dice2.png");
image.push("images/dice3.png");
image.push("images/dice4.png");
image.push("images/dice5.png");
image.push("images/dice6.png");
*/
document.querySelector(".img1").setAttribute("src","images/dice"+ no1 + ".png");
document.querySelector(".img2").setAttribute("src","images/dice"+ no2 + ".png");

if(no1>no2){
    document.querySelector("h1").innerHTML="player 1 won ";
}else if(no1<no2){
    document.querySelector("h1").innerHTML="player 2 won ";
}else{
    document.querySelector("h1").inerHTML=" draw ";
}