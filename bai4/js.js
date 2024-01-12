class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    render(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.stroke();
    }
}

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
let myCircle = new Circle(50, 50, 80, "#000000");

myCircle.render(context);