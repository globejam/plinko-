class GBALL {
    constructor(x, y, r) {
        this.hue = "yellow";
        var options = {
            restitution: 0.8,
            friction: 0,
            density: 1
        }
        //this.body.gravity.y = 0;
        this.flag = false;
        x += random(-5, 5);
        this.body = Bodies.circle(mouseX, mouseY, r, options);
        this.body.label = "particle";
        this.r = r;
        World.add(world, this.body);
    }

    inRestriction() {
        var x = this.body.position.x;
        var y = this.body.position.y;
        //return((x > 870) || (x < 30));
    }

    show() {
        push();
        strokeWeight(2)
        stroke(0);
        fill("gold");
        var pos = this.body.position
        push();
        translate(pos.x, pos.y);
        ellipse(0, 0, this.r * 2);
        pop();
        pop();
    }

}