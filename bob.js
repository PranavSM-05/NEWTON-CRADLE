class bob {
    constructor(x,y,radius){
        var options ={
            isStatic : false,
            restitution : 1.1,
            friction : 5, 
            density : 10
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius*2);
        pop();
    }
}