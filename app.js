console.log("It's alive!");

const movePlayer1 = () => {
  document.getElementById('player1').removeAttribute('id');
  document.getElementsByTagName('td')[1].setAttribute('id', 'player1');
}

movePlayer1();
