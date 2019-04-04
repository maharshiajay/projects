let add=document.getElementById("addtodo");
let removeal=document.getElementById("removeall");
let list=document.getElementById("todolist");

removeall.onclick=function(){
    list.innerHTML='';
}

//adding a new list element

addtodo.onclick=function(){
    todoListing(todolist);
    
    document.getElementById("userinput").value="";
    document.getElementById("userinput").focus();
}
function todoListing(targetList){
    let inputvalue=document.getElementById("userinput").value;
    let li=document.createElement('li');
    let textnode=document.createTextNode(inputvalue + '');
    let removebutton=document.createElement('button');
    
    if (inputvalue !== '')
        {
            removebutton.classname='btn btn-xs btn-danger';
            removebutton.innerHTML='&times';
            removebutton.setAttribute('onclick','removeme(this)')
        
        li.appendChild(textnode)
            li.appendChild(removebutton)
            targetList.appendChild(li);
        }else{
            alert="enter a todo list";
        }
}
function removeme(item){
    let p=item.parentElement;
    p.parentElement.removeChild(p);
}