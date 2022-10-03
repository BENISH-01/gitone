let list=[];
function add(){
    let a=document.getElementById("todo").value
    list.push(a);
    
    display(list)
    document.getElementById("todo").value=''
    


}

function display(c){
    

    let element=" "
    for(let i=0; i<c.length;i++){
        element=element+"<li>"+c[i]+"</li>"
    }
    document.getElementById("orderd").innerHTML=element
}

function save(){
    localStorage.setItem("todo",JSON.stringify(list))

}


function empty(){
    var toDoItems = orderd.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }

}
