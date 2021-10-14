// Generate two random number
var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;

// console.log("RandomNum1: "+ randomNum1);
// console.log("RandomNum2: "+ randomNum2);

// generate image path using newly generated random numbers
var randomImg1 = "images/dice" + randomNum1 + ".png";
var randomImg2 = "images/dice" + randomNum2 + ".png";

// console.log("RandomImage1: "+ randomImg1);
// console.log("RandomImage2: "+ randomImg2);

// update sources of image path in html
document.querySelector(".img1").setAttribute("src",randomImg1)
document.querySelector(".img2").setAttribute("src",randomImg2)

// Decleare winner or draw
if(randomNum1 === randomNum2){
    document.querySelector("h1").innerHTML = "Draw!"
} else if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "✌ Player 1 wins!"
}else{
    document.querySelector("h1").innerHTML = "Player 2 wins! ✌"
}
