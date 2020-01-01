function run(){

var dele=document.getElementsByClassName("letter");
for(i=0;i<dele.length;){
    document.getElementById("output").removeChild(dele[i]);

}

let font=document.getElementById("font").value;
let name = document.getElementById("yourname").value;

let type;

var ele = document.getElementsByTagName('input'); 
              
for(i = 0; i < ele.length; i++) { 
      
    

    if(ele[i].type=="radio") { 
      
        if(ele[i].checked) 
          type=ele[i].id; 
    } }



    

    let letters = name.split("");
 
if(type=="random"){

    
for(i=0;i<letters.length;i++){

var new_letter=document.createElement('div');
new_letter.className='letter';
new_letter.innerHTML=letters[i];
new_letter.style.fontFamily=font;

document.getElementById("output").appendChild(new_letter);
new_letter.style.left=`${Math.floor(Math.random() * 301)}px`;
new_letter.style.top=`${Math.floor(Math.random() * 101)}px`;
}


}

else{
   
        let t=15;
    for(i=0;i<letters.length;i++){
    
    var new_letter=document.createElement('div');
    new_letter.className='letter';
    new_letter.innerHTML=letters[i];
    new_letter.style.fontFamily=font;
    
    document.getElementById("output").appendChild(new_letter);
    new_letter.style.top=`${t}px`;
    new_letter.style.left=`${t}px`;
    t+=15;
    }
    


}
document.getElementById("yourname").value="";
}