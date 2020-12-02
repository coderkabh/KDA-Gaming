let cnvs = document.getElementById("canvas");
let context= cnvs.getContext("2d");


cnvs.style.backgroundColor="skyblue";

let image = new Image();
image.src="assets/images/MainImg.png"; 


let cloud=  {

    sX:0,
    sY:0,
    w:275,
    h:220,
    x:0,
    y:cnvs.height-220,
    draw:function()
    {
        context.drawImage(image,this.sX,this.sY,this.w,this.h,this.x,this.y,this.w,this.h);
        context.drawImage(image,this.sX,this.sY,this.w,this.h,this.x+this.w,this.y,this.w,this.h);
        context.drawImage(image,this.sX,this.sY,this.w,this.h,this.x+(2*this.w),this.y,this.w,this.h);
        context.drawImage(image,this.sX,this.sY,this.w,this.h,this.x+(3*this.w),this.y,this.w,this.h);
        context.drawImage(image,this.sX,this.sY,this.w,this.h,this.x+(4*this.w),this.y,this.w,this.h);
        context.drawImage(image,this.sX,this.sY,this.w,this.h,this.x+(5*this.w),this.y,this.w,this.h);
    }

}

function draw() 
{
    cloud.draw();
}
function loop(){
      
    draw();
   
    requestAnimationFrame(loop);

}
loop();
