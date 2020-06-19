class Enemy{

    constructor(y) {
        
        this.x = random(300, 800);
        this.y = y;
        this.velX = random(2, 5);
        this.health = 3;
        this.width = 18;
        this.height = 18;
        this.enemyT = 0;
        this.image = loadImage("images/images.png")
        //this.image = createImage("images/AW685789_00.gif");
        //this.image = loadImage("images/skele.gif")


    }

    //display
    display() {


        if (this.health > 0) {
            
            fill("red");
            ellipse(this.x, this.y, 10, 10);
            this.enemyT = 0;
            imageMode(CENTER);
            image(this.image, this.x, this.y, 70, 80);
            //this.image.position(this.x, this.y);

        } 
        
        

    }

    move(body) {

        var diffX = body.x - this.x;

        if(diffX > 0){

            this.x += 5;

        }else if(diffX < 0){

            this.x -= 5;

        }

    }


    isTouching(body) {

        if (body.x > this.x - this.width
            && body.x < this.x + this.width
            && body.y > this.y - this.height
            && body.y < this.y + this.height) {
        
            body.x = 20;
            this.enemyT = 1
            this.velX = random(1, 5);
            this.x = random(300, 800);
            //console.log("yolo")
        }

    }

    check() {
        
        if (this.x < 0) {

            this.x = 700;
    
        }

    }

}