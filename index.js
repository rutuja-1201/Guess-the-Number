
var b = Math.floor(Math.random()*10);
  
var guess = 1;
  
document.getElementById("submitguess").onclick = function(){
       
var a = document.getElementById("guessField").value;

if(a == b){    
   alert("CONGRATULATIONS!!! YOU WON AND GUESSED CORRECT "
           + guess + " GUESS ");
}
else if(a > b)
{    
   guess++
   alert("TRY A SMALLER NUMBER");
}
else{
   guess++
   alert("TRY A GREATER NUMBER");
}
}
