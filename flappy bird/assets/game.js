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

let ground =  {

    sX:276,
    sY:0,
    w:224,
    h:112,
    x:0,
    y:cnvs.height-112,
    dx:3,
    draw:function()
    {
        context.drawImage(image,this.sX,this.sY,this.w,this.h,this.x,this.y,this.w,this.h);
        context.drawImage(image,this.sX,this.sY,this.w,this.h,this.x+this.w,this.y,this.w,this.h);
        context.drawImage(image,this.sX,this.sY,this.w,this.h,this.x+(2*this.w),this.y,this.w,this.h);
        context.drawImage(image,this.sX,this.sY,this.w,this.h,this.x+(3*this.w),this.y,this.w,this.h);
        context.drawImage(image,this.sX,this.sY,this.w,this.h,this.x+(4*this.w),this.y,this.w,this.h);
        context.drawImage(image,this.sX,this.sY,this.w,this.h,this.x+(5*this.w),this.y,this.w,this.h);
        context.drawImage(image,this.sX,this.sY,this.w,this.h,this.x+(6*this.w),this.y,this.w,this.h);
        context.drawImage(image,this.sX,this.sY,this.w,this.h,this.x+(7*this.w),this.y,this.w,this.h);
        context.drawImage(image,this.sX,this.sY,this.w,this.h,this.x+(8*this.w),this.y,this.w,this.h);
    },
    update:function(){
            this.x=this.x-this.dx;
            if(this.x % 112==0){
                this.x=0;
            }
    }

}

function draw() 
{
    cloud.draw();
    ground.draw();
}

function update()
{
    ground.update();
}
function loop(){
      
    draw();
   update();
    requestAnimationFrame(loop);

}
loop();
