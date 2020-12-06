let cnvs = document.getElementById("canvas");
let context= cnvs.getContext("2d");
let fire1 = document.getElementById("fire1");
let fire2 = document.getElementById("fire2");



let frames=0;

let image = new Image();
image.src="assets/images/MainImg.png"; 

let criket= new Image();
criket.src="assets/images/cricket.png";

let flap=new Audio();
flap.src="assets/audio/flap.wav";

let point=new Audio();
point.src="assets/audio/point.wav";

let hit=new Audio();
hit.src="assets/audio/hit.wav";

let die=new Audio();
die.src="assets/audio/die.wav";

let swooshing=new Audio();
swooshing.src="assets/audio/swooshing.wav";

const state = {
    current:0,
    getReady:0,
    game:1,
    gameOver:2,
}
cnvs.addEventListener("click",function(event){
    switch(state.current){
        case state.getReady:
            state.current = state.game;
            swooshing.play();
            break;
        case state.game:
            bird.move();
            flap.play();
            break;
        case state.gameOver:
            let cnvsPosition=cnvs.getBoundingClientRect();

            let clickX = event.clientX - cnvsPosition.left;
            let clickY = event.clientY-cnvsPosition.top;

            if(clickX>startbtn.x && clickX<startbtn.x+startbtn.w && clickY>startbtn.y &&
                clickY<startbtn.y+startbtn.h){
                    state.current=state.getReady;
                    pipes.reset();
                    ball.reset();
                    score.reset();
                }
            
            break;   
    }

});
const startbtn={
    x:720,
    y:373,
    w:83,
    h:29,
}

const getReady={
    sX:0,
    sY:220,
    w:173,
    h:152,
    x:cnvs.width/2-(173/2),
    y:200,
    draw:function()
    {
        if(state.current==state.getReady)
        {  
            context.drawImage(image,this.sX,this.sY,this.w,this.h,this.x,this.y,this.w,this.h);
            fire1.style.display="none";
            fire2.style.display="none";
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
            fire1.style.display="block";
            fire2.style.display="block";
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
        if(state.current==state.game){
            this.x=this.x-this.dx;
            if(this.x % 112==0){
                this.x=0;
            }
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
            speed:0,gravity:0.20,jump:4.3,
            radius:13,

            draw:function(){
                    let bird=this.animationOfBird[this.frame];
                    context.drawImage(image,bird.sX,bird.sY,this.w,this.h,this.x-this.w/2,this.y-this.h/2,this.w,this.h);
            },
            update:function(){

                this.period=state.current==state.getReady?10:5;
                this.frame+=frames%this.period==0 ? 1:0;
                this.frame=this.frame%this.animationOfBird.length;

                if(state.current==state.getReady){
                    this.y=150;
                }
                else{
                    this.y=this.y+this.speed;
                    this.speed=this.speed+this.gravity;
                }    
                if(this.y+this.h/2>=cnvs.height-ground.h){
                    this.speed=0;
                    this.frame=0;  
                    if(state.current==state.game){
                        state.current=state.gameOver;
                        die.play();
                    }
                    
                }
            },
            move:function(){
                   this.speed = -this.jump;
                      
            }
}

const pipes={
    position:[],
    top:{
        sX:553,
        sY:0
    },
    bottom:{
        sX:502,
        sY:0
    },
    w:53,
    h:400,
    gapBtwPipes:170,
    maxYPos:-150,
    dx:3,

    draw:function(){
        for(let i=0;i<this.position.length;i++){
            let p=this.position[i];

            let topYPos = p.y;
            let bottomYPos = p.y + this.h + this.gapBtwPipes;
            
            context.drawImage(image, this.top.sX, this.top.sY, this.w, this.h, p.x, topYPos, this.w, this.h);  
            
            context.drawImage(image, this.bottom.sX, this.bottom.sY, this.w, this.h, p.x, bottomYPos, this.w, this.h);  
        }
    },
    update:function(){
        if(state.current !== state.game){
            return;
        }
        if(frames%100 == 0){
            this.position.push(
                {
                    x:cnvs.width,
                    y:this.maxYPos*(Math.random()+1)
                });
        }
        for(let i=0;i<this.position.length;i++){
            let p=this.position[i];
            p.x=p.x-this.dx;

            if(p.x+this.w<=0){
                this.position.shift();
                point.play();
                score.value=score.value+1;
                score.best=Math.max(score.value,score.best);

                localStorage.setItem("best",score.best);
            }
            if(bird.x+bird.radius>p.x && bird.x-bird.radius<p.x+this.w && 
                bird.y+bird.radius>p.y && bird.y-bird.radius<p.y+this.h){
                    hit.play();
                    state.current=state.gameOver;
                }

                let tobp=p.y+this.h+this.gapBtwPipes;
                let bopb=p.y+this.h+this.gapBtwPipes+this.h;
            if(bird.x+bird.radius>p.x && bird.x-bird.radius<p.x+this.w && 
                    bird.y+bird.radius>tobp && bird.y-bird.radius<bopb)
                    {
                        hit.play();
                        state.current=state.gameOver;
                    } 
        }
},
reset:function(){
    this.position=[];

}
}

const ball={
    ball_pos:[],
    w:30,h:30,sX:0,sY:0,dx:4,

    draw:function(){
        for(let i=0;i<this.ball_pos.length;i++){
            let p=this.ball_pos[i];
            context.drawImage(criket,this.sX,this.sY,2000,2000,p.x,p.y,this.w,this.h);
        }
    },
    update:function(){
            if(state.current!==state.game){
                return;
            }
            if(frames%100==0){
                this.ball_pos.push(
                    {
                        x:cnvs.width,
                        y:Math.random()*400,
                    }
                );
            }
            for(let i=0;i<this.ball_pos.length;i++){
                let p=this.ball_pos[i];
                p.x=p.x-this.dx;

                if(p.x+ this.w<=0){
                    this.ball_pos.shift();
                }

                if(bird.x+bird.radius>p.x && bird.x-bird.radius<p.x+this.w && 
                    bird.y+bird.radius>p.y && bird.y-bird.radius<p.y+this.h){
                        hit.play();
                        state.current=state.gameOver;
                    }
            }

    },
    reset:function(){
        this.ball_pos=[];
    }
}

const score={

    best:parseInt(localStorage.getItem("best")) || 0,
    value:0,
    draw:function(){
            context.fillStyle="black";
            if(state.current==state.game){
                context.font="50px teko";
                context.fillText(this.value,cnvs.width/2,100);
            }     
             else if(state.current==state.gameOver){
                context.font="30px teko";
                context.fillText(this.value,cnvs.width/2+65,300);

                context.font="30px teko";
                context.fillText(this.best,cnvs.width/2+65,340);
             }
    },
    reset:function(){
        this.value=0;
    }
}

    
  

function draw() 
{
    context.fillStyle="#70c5ce";
    context.fillRect(0,0,cnvs.clientWidth,cnvs.height);
    cloud.draw();
    pipes.draw();
    ball.draw();
    ground.draw();
    bird.draw();
    getReady.draw();
    gameOver.draw();
    score.draw();
}

function update()
{
    ground.update();
    bird.update();
    pipes.update();
    ball.update();
}
function loop(){
      
    draw();
   update();
   frames--;

    requestAnimationFrame(loop);

}
loop();
