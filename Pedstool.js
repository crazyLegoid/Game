class Pedstool{

    constructor(x, y, width, height) {
        
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

    }

    display() {
        
        fill(255);
        rect(this.x, this.x, this.width, this.height);

    }

}