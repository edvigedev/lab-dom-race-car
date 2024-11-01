class Player {
    constructor(top, left, playerImage) {
        this.gameScreen = document.getElementById("game-screen");
        this.top = top
        this.left = left;
        //leave them out as they will always be the same
        this.width = 50;
        this.height = 150;
        //we need the variables direction x and direction y for directions
        this.directionX = 0; // left right
        this.directionY = 0; // up and down
        //this is the players' picture, aka the car
        this.element = document.createElement('img');
        //.src adds the path to the image, since it is an argument we can 
        //change it, aka different cars every time the game starts
        this.element.src = playerImage
        this.element.style.position = "absolute"
        this.element.style.height = `${this.height}px`
        this.element.style.width = `${this.width}px`;
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;

        //add the car to the screen
        this.gameScreen.appendChild(this.element);
         }


        //move the player based on directionX and directionY
        move() {
            
            this.left += this.directionX;
            this.top += this.directionY;

            // to prevent the car from going too far left
            if (this.left < 30) {
                this.left = 30;
            }
// to prevent the car from going too far right
             if (this.left + this.width > 365) {
                this.left = 365 - this.width;
            }
// to prevent the car from going too far up
            if (this.top < 0) {
                this.top = 0;
            }

            // to prevent the car from going too far down
            if (this.top + this.height > 525) {
                this.top = 525 - this.height;
            }
            
            
            this.updatePosition();

            //so far nothing is keeping the player on the screen
            //I need a conditional

            // if (this.left === 30) {
            //     
        }
      updatePosition() {
        //actually moving the car on the screen
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
      }

        didCollide() {
            const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }

            
        

      


        }


    
