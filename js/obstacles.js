class Obstacle {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        //You want the position to be more to the left, 70px, than the right, 230px
        this.position = [70, 230, 70, 70, 230]
        this.randomIndex = math.floor(Math.random() *this.position.length)
        this.left = this.position[this.randomIndex]
        this.top = 50;
        this.width = 100;
        this.heigth = 150;
        this.element = document.createElement("img");
        //.src adds the path to the image, since it is an argument we can
        //change it, aka different cars every time the game starts
        this.element.src = "../images/redCar.png";
        this.element.style.position = "absolute";
        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;

        //add the car to the screen
        this.gameScreen.appendChild(this.element);
    }
// it does not have directionX or directionY, only falls down
    move() {
        //this is non-responsive to keyboard and it always has to be falling.
        this.top += 2;
        this.updatePosition()
    }

    updatePosition() {
        this.element.style.top = `${this.top}px`;
    }
}