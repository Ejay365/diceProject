/* generate two separate random number 1 - 6 */
var randNum1 = Math.floor(Math.random() * 6) + 1;
var imageSource1 = "diceSVG/dice-six-faces-" + randNum1 + ".svg";
let image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", imageSource1);

/* for the second image */
var randNum2 = Math.floor(Math.random() * 6) + 1;
var imageSource2 = "diceSVG/dice-six-faces-" + randNum2 + ".svg";
document.querySelectorAll("img")[2].setAttribute("src", imageSource2);

/* check who won the game */
if (randNum1 > randNum2) {
  let player1Won = document.querySelectorAll("h1")[1];
  player1Won.innerText = "Player 1 wins!!🏆";
} else if (randNum2 > randNum1) {
  document.querySelectorAll("h1")[1].innerText = "Player 2 wins!!🏆";
} else {
  document.querySelectorAll("h1")[1].innerText = "Draw!! 😞☹️";
  document.write("Oh boy");
}

/* Note: the reason why there's [1] and [2] because i have multiple of that tag "h1" */
