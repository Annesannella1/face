const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 900;
console.log(canvas);
console.log(ctx);


ctx.fillStyle = "orange";
      
ctx.fillRect(120, 100, 200, 150);
ctx.lineWidth = 10;
ctx.strokeStyle = "pink";
ctx.strokeRect(120, 100, 200, 150);
   

ctx.fillStyle = "orange";
ctx.fillRect(400, 100, 200, 150);
ctx.lineWidth = 10;
ctx.strokeStyle = "pink";
ctx.strokeRect(400, 100, 200, 150);



ctx.beginPath();
ctx.moveTo(350, 350);
ctx.lineTo(400, 700);
ctx.lineTo(300, 700);
ctx.lineTo(350, 350);
ctx.strokeStyle = "hsl(320, 100%, 50%)";
ctx.stroke();


   
