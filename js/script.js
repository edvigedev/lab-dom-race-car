window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  // we made 
  let myGame;

  startButton.addEventListener("click", function () {
    startGame();
  });

  //keydown for listening to your keyboard
  document.addEventListener('keydown', (event) => {
    //which key was pressed? the browser is going to tell us through 'event'
    //then you have to open the console and check the "code:""
    //e.g. Output code :arrowright
    console.log("a key was pressed", event.code);
    //check for which button was pressed
    if (event.code === "ArrowRight") {
      // I have to access the player, myGame. However, 
      //it is only available inside the function. I have to make it global
      myGame.player.directionX= 2
    }

    if (event.code === "ArrowLeft") {
      myGame.player.directionX = -2;
    }


    if (event.code === "ArrowUp") {
      myGame.player.directionX = -2;
    }

    if (event.code === "ArrowDown") {
      myGame.player.directionX = 2;
    }
  });
  // keydown is when we press the key, keyup is when we release it
  // we want the direction not to change when the key is released
  document.addEventListener('keyup', () => {
    myGame.player.directionX = 0;
    myGame.player.directionY = 0;
  })

  function startGame() {
    console.log("start game");
    //this has to be made global
    let myGame = new Game();
    myGame.start();
  }
};
