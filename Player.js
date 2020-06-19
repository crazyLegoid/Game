class Player {

    constructor(x, y, radius) {

        this.x = x;
        this.y = y;
        this.r = radius;
        this.grav = 0.6;
        this.velY = 0;
        this.upForce = -20;
        this.image = loadImage("images/knight.png");

    }


    //display && update
    display() {

        fill("red");
        ellipse(this.x, this.y, 18, 18);
        imageMode(CENTER);
        image(this.image, this.x + 10, this.y - 10, 60, 80);

    }

    update() {

        this.velY += this.grav;
        this.y += this.velY;

    }

    groundC() {
        
        if (this.y > 350) {
            this.y = 350;
            this.velY = 0;
            jumpCase = 0;

        }

    }

    //Movement
    up() {
        //console.log("Up");
        this.velY += this.upForce;
        jumpS.play();
        //console.log(this.velY);
    }

    move() {

        if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {

            this.x -= 5;
            // walkS.play();
            // walkS.rate(1);

        }

        if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {

            this.x += 7;
            // walkS.play();
            // walkS.rate(1);


        }

    }

    foward() {

        if (keyIsDown(UP_ARROW) || keyIsDown(87)) {

            this.y -= 5;

        }

        if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {

            this.y += 5;
            // console.log("Hit");

        }

    }



    //Level Increments
    check() {

        if (this.x > 800) {

            stage++;
            this.x = 20;

        }

        // if (this.x < 0) {

        //     stage--;
        //     this.x = 780;

        // }

    }


}