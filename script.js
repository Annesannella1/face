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
             this.x1 = 350;
             this.y1 = 350;
             this.x2 = 400;
             this.y2 = 650;
             this.x3 = 350;
             this.y3 = 650;
       }
       draw() {
            ctx.beginPath();
            ctx.moveTo(this.x1, this.y1);
            ctx.lineTo(this.x2, this.y2);
            ctx.lineTo(this.x3, this.y3);
            ctx.lineTo(this.x1, this.y1);
            ctx.strokeStyle = "hsl(320, 100%, 50%)";
            ctx.closePath();
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
