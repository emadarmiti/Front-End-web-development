function compute_grade(){


var boxes=document.getElementsByTagName('input');

var ave=0;

for(i=0;i<6;i+=2){

ave=ave+boxes[i].value/boxes[i+1].value;


}
ave/=3;
ave*=100;
ave=Math.round(ave);

if(boxes[6].checked){

    ave+=5
}


var mark=document.createElement('div');
mark.innerHTML=ave;
if(ave>=60)mark.className='pass';
else mark.className='fail';
document.getElementById('result').appendChild(mark);


}
function clear_grades(){

var del1=document.getElementsByClassName('pass');
var del2=document.getElementsByClassName('fail');
console.log(del1.length);
console.log(del2.length);
for(i=0;i<del1.length;)
    document.getElementById('result').removeChild(del1[i]);
    for(i=0;i<del2.length;)
    document.getElementById('result').removeChild(del2[i]);

    var boxes=document.getElementsByTagName('input');

    for(i=0;i<6;i++)boxes[i].value="";

}