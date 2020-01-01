
function submit()

{

//validate the password

if((document.getElementById("pass1").value=="" ))
{

    document.getElementsByClassName("error")[2].innerHTML="Please Check Out The Password!!";
    document.getElementById("pass1").style.border="1px solid red";
    return;
}
else if( document.getElementById("pass2").value==""){

    document.getElementsByClassName("error")[2].innerHTML="Please Check Out The Password!!";
    document.getElementById("pass2").style.border="1px solid red";
    return;

}
else if((document.getElementById("pass1").value!=document.getElementById("pass2").value)){
    document.getElementsByClassName("error")[2].innerHTML="Please Check Out The Password!!";
    document.getElementById("pass1").style.border="1px solid red";
    document.getElementById("pass2").style.border="1px solid red";
    return;



}

//for hiding the page 3 and showing the page 4
document.getElementById("p3").style.display="none";
document.getElementById("p4").style.display="block";

document.getElementById("progressbar").style.display="none";
document.getElementById("progress_bar_titles").style.display="none";


//for page 4 data

let data=document.getElementsByTagName("input");
let space=document.getElementsByClassName("data");
for(i=0;i<3;i++)space[i].innerHTML+=data[i].value;
for(i=3;i<6;i++)if(data[i].checked)space[3].innerHTML+=data[i].value;
for(i=6,j=4;i<8;i++,j++)space[j].innerHTML+=data[i].value;
space[6].innerHTML+=document.getElementById("address").value;
space[7].innerHTML+=data[8].value;

//For the submition text

document.getElementById("submited").style.display="block";

}


function next(id1, _id2 ,btn_type,error_number){

//To validate the data when go to a next page
    if(btn_type=="next"){
    let data=document.getElementsByClassName(id1);
    for(i=0;i<data.length;i++)if(data[i].value==""){
        document.getElementsByClassName("error")[error_number-1].innerHTML="Please Check Out The fields!!";
      data[i].style.border="1px solid red";
      
      
        return;}
        document.getElementsByClassName("error")[error_number-1].innerHTML="<br>";
  

//for the bar progress
let line_num="line"+(error_number+1);
let step_num="stepnumber"+(error_number+1);
document.getElementById(line_num).style.backgroundColor=" rgb(67, 150, 67)";
document.getElementById(step_num).style.backgroundColor=" rgb(67, 150, 67)";
document.getElementById(step_num).style.color=" white";
 
let data1=document.getElementsByClassName(_id2);
for(i=0;i<data1.length;i++)data1[i].style.border="1px solid lightgrey";
document.getElementsByClassName("error")[error_number].innerHTML="<br>";

    }
//To delete the password after go prev
    else {
    
    
    if(id1=="p3"){
        document.getElementById("pass1").value="";
        document.getElementById("pass2").value="";

    }
    let line_num="line"+(error_number);
    let step_num="stepnumber"+(error_number);
    document.getElementById(line_num).style.backgroundColor="white";
    document.getElementById(step_num).style.backgroundColor="white";
    document.getElementById(step_num).style.color=" black";
    let data1=document.getElementsByClassName(_id2);
for(i=0;i<data1.length;i++)data1[i].style.border="1px solid lightgrey";


}
   

//Show and hide pages
/*
document.getElementById(id1).style.transform="translateX(100px)";
document.getElementById(id1).style.transform="translateX(100px)";
*/
$(document).ready(function(){
 $("#"+id1).animate({

left: '400px',





 },'slow');
 $("#"+_id2).animate({

display: 'block',
left: '400px'


 },'slow');
});


document.getElementById(id1).style.display="none";







}

function on_input(id_){


document.getElementById(id_).style.border="1px solid green";


}