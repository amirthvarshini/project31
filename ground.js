class Ground{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        World.add(world,this.body);
    }
}

  display();
{
    var pos = this.body.position;
     fill("white");
     rectMode(CENTER);
     rect(this.w,this.h,pos.x,pos.y);
}