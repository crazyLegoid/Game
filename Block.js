class Block {

    constructor(x, y, width, height, grav) {

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.grav = grav;
        this.velY = 0;
        this.upForce = -9.8;

    }

    display() {

        fill(255);
        rect(this.x, this.y, this.width, this.height);

    }

    update() {

        this.velY += this.grav;
        this.y += this.velY;
        
        if (this.y > 335) {
            
            this.velY += this.upForce;

            if (mute === false) {
                
                crashS.play();

            }
            //   
        }
        //console.log(this);
        //i++;     

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
                
                deathS.play();  

            }
        }

    }

}