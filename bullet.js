class Bullet {

    constructor(x, y) {

        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 5;
        this.velX = 10;
        this.health = 1;

    }

    display() {

        fill(255);
        rect(this.x, this.y, this.width, this.height);
        this.enemyT = 0;

    }

    update() {

        this.x += this.velX;
        // if (this.offset()) {
        //     this.width = 0
        //     this.height = 0;
        // }
    }

    offset() {

        if (this.x > 400) {

            return true;

        }


    }

    isTouching(body) {

        if (body.x > this.x - this.width
            && body.x < this.x + this.width
            && body.y > this.y - this.height
            && body.y < this.y + this.height) {
        
            body.health -= 0.3;
            //console.log("hi");
            body.enemyT = 1;
            this.health = 0;
            return true;
        }

    }

}