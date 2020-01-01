var num_w=10;
var num_l=10;
var top_=0;

function creat_snow_ball(){

    let randomsize=random_size();
    let randomposition=random_pos();


var ball=document.createElement('div');
ball.className='snowball';
ball.style.width=`${randomsize}px`;
ball.style.height=`${randomsize}px`;
ball.style.left=`${randomposition}px`;
ball.style.top='-100px';

if(randomsize==10)ball.style.opacity='0.3';
else if(randomsize==20)ball.style.opacity='0.6';
else ball.style.opacity='1';
document.getElementById("snow_scene").appendChild(ball);



}
function add_snow_ball(){
    document.getElementById("snow_scene").style.overflow='hidden';
    test=setInterval(function(){ creat_snow_ball(); }, 50);
test1=setInterval(function(){ falling(); }, 15);
}

function random_size(){

 return ((( Math.floor(Math.random()*10)+1 ) % 3 )+1)*10;


}
function random_pos(){

    return Math.floor(Math.random() * (1400 - -10 + 1)) + -10;


}
function falling(){

let balls=document.getElementsByClassName('snowball');
let speed=document.getElementsByTagName('input')[0].value;
for(i=0;i<balls.length;i++){
if(balls[i].style.width==='10px'){

const mrgn1=balls[i].style.top;

let mrgn2=parseInt(mrgn1, 10);
if(mrgn2>600){

    document.getElementById("snow_scene").removeChild(balls[i]);
    break;

}
mrgn2+=1*speed;

balls[i].style.top=`${mrgn2}px`;
}
else if(balls[i].style.width==='20px')
{


    
const mrgn1=balls[i].style.top;

let mrgn2=parseInt(mrgn1, 10);

if(mrgn2>600){

    document.getElementById("snow_scene").removeChild(balls[i]);
    break;

}
mrgn2+=3*speed;

balls[i].style.top=`${mrgn2}px`;
}

else if(balls[i].style.width==='30px'){

const mrgn1=balls[i].style.top;

let mrgn2=parseInt(mrgn1, 10);
if(mrgn2>600){

    document.getElementById("snow_scene").removeChild(balls[i]);
    break;

}
mrgn2+=6*speed;

balls[i].style.top=`${mrgn2}px`;
}

}


}