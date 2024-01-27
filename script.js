const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 900;
console.log(canvas);
console.log(ctx);





class Eye1 {
      constructor() {
            this.startX = 120;
            this.startY = 100;
            this.width = 200;
            this.height = 150;
      }
      draw() {
            

           ctx.fillStyle = "orange";
      
           ctx.fillRect(this.startX, this.startY, this.width, this.height);
           ctx.lineWidth = 10;
           ctx.strokeStyle = "pink";
           ctx.strokeRect(this.startX, this.startY, this.width, this.height);
      }
}     

class Eye2 {
      constructor() {
            this.startX = 400;
            this.startY = 100;
            this.width = 200;
            this.height = 150;
      }
      draw() {
            

           ctx.fillStyle = "orange";
      
           ctx.fillRect(this.startX, this.startY, this.width, this.height);
           ctx.lineWidth = 10;
           ctx.strokeStyle = "pink";
           ctx.strokeRect(this.startX, this.startY, this.width, this.height);
      }
}  

 class Line1 {
       constructor() {
             this.x = 350;
             this.y = 350;
             this.toX = 400;
             this.toY = 700;
       }
       draw() {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.toX, this.toY);
            ctx.strokeStyle = "hsl(320, 100%, 50%)";
            ctx.stroke();
       }
 }      

 class Line2 {
       constructor() {
             this.x = 350;
             this.y = 350;
             this.toX = 300;
             this.toY = 700;
       }
       draw() {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.toX, this.toY);
            ctx.strokeStyle = "hsl(320, 100%, 50%)";
            ctx.stroke();
       }
 }      

 class Line3 {
       constructor() {
             this.x = 350;
             this.y = 350;
             this.toX = 350;
             this.toY = 350;
       }
       draw() {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.toX, this.toY);
            ctx.strokeStyle = "hsl(350, 100%, 50%)";
            ctx.stroke();
       }
 }      

//ctx.beginPath();
//ctx.moveTo(350, 350);
//ctx.lineTo(400, 700);
//ctx.lineTo(300, 700);
//ctx.lineTo(350, 350);
//ctx.strokeStyle = "hsl(320, 100%, 50%)";
//ctx.stroke();

const rect1 = new Eye1();
rect1.draw();       
const rect2 = new Eye2();
rect2.draw();       
const line1 = new Line1();
line1.draw();
const line2 = new Line2;
line2.draw();
const line3 = new Line3();
line3.draw();
