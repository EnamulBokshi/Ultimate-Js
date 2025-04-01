let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


let width = canvas.width;
let height = canvas.height;

let opacity = 1;

function drawCircle(x,y){
    ctx.fillStyle = `rgba(0,255,0,${opacity})`;
    ctx.beginPath();
    ctx.arc(x,y,10,0,Math.PI * 2);
    ctx.fill();
}

canvas.addEventListener("click",(e)=>{
    drawCircle(e.offsetX, e.offsetY)
})