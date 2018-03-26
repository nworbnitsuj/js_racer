// JS test
console.log("It's alive!");



// Define tracks
const p1track = []
const p2track = []


// Function to remove id="player-" from <td> and set id="player-" to <td> sibling
const movePlayer1 = () => {
  document.getElementById("player1").nextElementSibling.setAttribute("id", "player1");
  document.querySelector("#player1").removeAttribute("id");
  p1track.push("mile");
  if (p1track.length >= 19) {
      alert("Yellow WINS!");
  }
}

const movePlayer2 = () => {
  document.getElementById("player2").nextElementSibling.setAttribute("id", "player2");
  document.querySelector("#player2").removeAttribute("id");
  p2track.push("mile");
  if (p2track.length >= 19) {
      alert("Red WINS!");
  }
}


// Events for right arrow (39) and "D" (68) keys to call respective movePlayer functions
const moveRight = (event) => {
  if (event.keyCode == 39) {
    movePlayer1();
  }
  if (event.keyCode == 68) {
    movePlayer2();
  }
}


// Event listener for keydown
document.onkeydown = moveRight;
