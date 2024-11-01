class Game {
    // code to be added
    constructor() {
      this.startScreen = document.getElementById("game-intro");
      this.gameScreen = document.getElementById("game-screen");
        this.endScreen = document.getElementById("game-end");
        this.scoreElement = document.getElementById('score');
        this.livesElement = document.getElementById('lives')
        // + to the right, - to the left
        //to position the car to the center, we take into account the width of the road
        // aka 400px, and the width of the car, 75px
        //the center is 200px, 
        //actual player
        this.player = new Player(380, 50, "../images/car.png");
        // we do not put px to have the ability to change 
        //the unit of measurement later.
      this.height = 600;
      this.width = 500;
      this.obstacles = [new Obstacle (this.gameScreen)];
      this.score = 0;
      this.lives = 3;
      this.isGameover = false;
      this.gameIntervalId = null;
      // this.gameLoopFrequency, a number that indicates 
      //the interval in milliseconds at which the game loop
        //will execute.
        //This will give the smooth illusion the cars are moving
        //and makes it reacting to the keyboard
        //The road is animated with CSS instead.
        this.gameLoopFrequency = Math.round(1000 / 60);
        // this counts the frames , which are useful to add obstacles every n frame.
        this.frames = 0
    }

    start() {
        this.endScreen.style.height = `${this.height}px` 
        this.endScreen.style.width = `${this.width}px`; 

        //hide the start-screen
        this.startScreen.style.display = 'none';

        //
        this.gameScreen.style.display = "block";

        //start the game loop
        setInterval(() => {
            
            this.gameLoop();
        }, this.gameLoopFrequency)
     }
    
    gameLoop() {
        // console.log('this is a game loop');
        this.frames ++
        this.update();
        // if gameover is true, we call the gameOver() method
        this.player.move();
        if (this.isGameover) {
            clearInterval(this.gameIntervalId)
            this.isGameover();
        }
        //this  adds a new obstacle to the array every so many frames
        if (this.frames % 180 === 0) {
            this.obstacles.push(new Obstacle(this.gameScreen))
        }
    }
// this calls the move method from the player class
    update() {
        this.player.move()
        //this calls the move method on each obstacle
        //We need to do a loop on every obstacle and call the .method on each one, aka oneObstacle

        this.obstacles.forEach((oneObstacle, oneObstacleIndex) => {
            oneObstacle.move();
            //this checks if every obstacle has collided to the player- 60 times per second this will be checked
            const didHitTheBlueCar = this.player.didCollide(oneObstacle);
            //console.warn() will log to the console in yellow, console.error() will log in red
            console.warn("Collision?", didHitTheBlueCar);
            
            //conditional checking for collision
            if (didHitTheBlueCar) {
              // we remove 1 life from the array and the DOM
                this.lives--;
                if (this.lives === 0) {
                    this.isGameover = true;
                }
              //we make it visible in the DOM
              this.livesElement.innerText = this.lives;

              //the car does not disappear after hitting, we need to remove it
                //we do not call oneObstacle.remove(), as this will equal to say I am calling a method to oneObstacle,
                // and I have no method called remove()
              oneObstacle.element.remove();
            }



            //check that the red car, aka obstacle, passes the bottom, then remove the car from the array and the DOM
            // it is 500 as the + has direction bottom
            if (oneObstacle.top > 550) {
                this.obstacles.splice(oneObstacleIndex, 1);
                // the DOM still remembers the last place where the red car was, therefore it remains visible.
                // we need to get rid of this visually also, this is why we need .remove()
                oneObstacle.element.remove();
                //increase the score if the red car passes, because it did not hit the blue car
                this.score++;
                //update the DOM to have the new score
                this.scoreElement.innerText = this.score;

            }
        });

    }

    gameOver() {
        console.log('game is over')
        this.gameScreen.style.display = 'none';
        this.endScreen.style.display = "block";
    }

}