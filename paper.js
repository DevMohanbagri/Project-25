class paper {
    constructor(x,y,diameter){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,diameter,options);
        this.diameter = diameter;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("white");
        ellipse(pos.x,pos.y,this.diameter);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,70,70);
       
        
    }
};