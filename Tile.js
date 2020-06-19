class Tile {

    constructor(x, y, width, height) {

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height
        this.tileColor = 255;

    }


    //display
    display() {

        rectMode(CENTER)
        fill(this.tileColor);
        rect(this.x, this.y, this.width, this.height);

    }

    isTouching(body) {

        if (body.x > this.x - this.width
            && body.x < this.x + this.width
            && body.y > this.y - this.height
            && body.y < this.y + this.height) {
            // console.log("Yes");

            body.x = 30;
            body.y = 380;

            if (mute === false) {
                
                deathS.play()

            }
            return true;
        }

    }

}