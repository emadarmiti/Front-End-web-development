function add(){

//data
var data=document.getElementById('item').value;
if(data==""){document.getElementById('error').innerHTML='Please enter data!';}

else{

document.getElementById('error').innerHTML='';

//create the element


var new_data=document.createElement('li');
new_data.innerHTML=data;
new_data.className='new_data';
//check the style
var list=document.getElementsByClassName('new_data');
if(list.length==0){
    new_data.style.backgroundColor='white';
}
else{
if(list[list.length-1].style.backgroundColor=='white'){
    new_data.style.backgroundColor='lightgray';
}
else{
    new_data.style.backgroundColor='white';
}

}

document.getElementById('list').appendChild(new_data);

document.getElementById('item').value='';


}


}
function remove(){

    var data=document.getElementById('item').value;
    
    if(data==""){document.getElementById('error').innerHTML='Please enter data!';}
    
    else{
        document.getElementById('error').innerHTML='';

        var list=document.getElementsByClassName('new_data');
         var test=0;
        for(i=0;i<list.length;i++){

            if(data.toUpperCase().localeCompare(list[i].innerHTML.toUpperCase())==0){
                document.getElementById('list').removeChild(list[i]);
                
                for(t=i;t<list.length;t++){

                    if(list[t].style.backgroundColor=='white')
                    list[t].style.backgroundColor='lightgray';
                    else
                    list[t].style.backgroundColor='white';

                }

                test=1;
                break;

            }

           
        }

        if(test==0)document.getElementById('error').innerHTML="Item does't found";








        document.getElementById('item').value='';


    }


}