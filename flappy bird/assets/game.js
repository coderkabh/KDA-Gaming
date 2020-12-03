let cnvs = document.getElementById("canvas");
let context= cnvs.getContext("2d");

let frames=0;
let image = new Image();
image.src="assets/images/MainImg.png"; 

const state = {
    current:0,
    getReady:0,
    game:1,
    gameOver:2,
}
cnvs.addEventListener("click",function(){
    switch(state.current){
        case state.getReady:
            state.current= state.game;
            break;
        case  state.game:
            bird.move();
            break;
        case state.gameOver:
            state.current=state.getReady;
            break;   
    }

})

const getReady={
    sX:0,
    sY:220,
    w:173,
    h:152,
    x:cnvs.width/2-(173/2),
    y:200,
    draw:function()
    {
        if(state.current==state.getReady){

        
        context.drawImage(image,this.sX,this.sY,this.w,this.h,this.x,this.y,this.w,this.h);
        }
    }
}

const gameOver={
    sX:175,
    sY:228,
    w:225,
    h:202,
    x:cnvs.width/2-(225/2),
    y:200,
    draw:function()
    {
        if(state.current==state.gameOver){
 context.drawImage(image,this.sX,this.sY,this.w,this.h,this.x,this.y,this.w,this.h);
        }
    }
}


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
const bird={
    animationOfBird:[
            {sX:276,sY:112},
            {sX:276,sY:139},
            {sX:276,sY:164},
            {sX:276,sY:139} ],
            x:50,y:150,w:34,h:26,frame:0,period:5,
            draw:function(){
                    let bird=this.animationOfBird[this.frame];
                    context.drawImage(image,bird.sX,bird.sY,this.w,this.h,this.x,this.y,this.w,this.h);
            },
            update:function(){
                this.frame+=frames%this.period==0 ? 1:0;
                this.frame=this.frame%this.animationOfBird.length;
            },
            move:function(){

            }
}

function draw() 
{
    context.fillStyle="#70c5ce";
    context.fillRect(0,0,cnvs.clientWidth,cnvs.height);
    cloud.draw();
    ground.draw();
    bird.draw();
    getReady.draw();
    gameOver.draw();
}

function update()
{
    ground.update();
    bird.update();
}
function loop(){
      
    draw();
   update();
   frames--;
    requestAnimationFrame(loop);

}
loop();
