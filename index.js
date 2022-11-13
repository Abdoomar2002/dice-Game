var diceSrc="images/dice";
var randomDice1=Math.floor(Math.random()*6)+1;
var randomDice2=Math.floor(Math.random()*6)+1;
if(randomDice1>randomDice2)
{
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}else if(randomDice1<randomDice2)
{
  document.querySelector("h1").innerHTML=document.querySelector("h1").innerHTML=" Player 2 Wins! 🚩"
}
else{
  document.querySelector("h1").innerHTML=document.querySelector("h1").innerHTML="Draw";

}
document.querySelector(".img1").setAttribute("src",diceSrc+randomDice1+".png");
document.querySelector(".img2").setAttribute("src",diceSrc+randomDice2+".png");
