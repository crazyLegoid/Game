class Ground{

    constructor(x, y, width, height){

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

    }

    display(){

        rectMode(CENTER);
        fill("green");
        rect(this.x, this.y, this.width, this.height);

    }

    isTouching(body){

        if(body.y - this.y < body.r + this.height/2){ //&& this.x - body.x < this.width/2 + body.r){

            body.y = body.r + this.height/2;
            body.velY = 0;

        }

    }

}