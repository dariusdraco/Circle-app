var canvas=document.getElementById("canvas09");
ctx=canvas.getContext("2d") ;
var color="black" ;
ctx.beginPath() ;
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown (e) {
mousex=e.clientX - canvas.offsetLeft ;
mousey=e.clientY - canvas.offsetTop ;
circle(mousex,mousey) ;
}
function circle(mouseex,mousey) {
    ctx.beginPath() ;
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mousex,mousey,40,0,2*Math.PI);
    ctx.stroke();
}
