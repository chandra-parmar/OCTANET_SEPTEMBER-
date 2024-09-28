let taskInput=document.querySelector("#taskinput")
let Addtask= document.querySelector("#addtask")
let Tasklist= document.querySelector("#tasklist")

Addtask.addEventListener("click",function()
{
    if(taskInput.value=="")
    {
        alert("Enter task")
    }
    else{
       let newTask= document.createElement('li') 
       newTask.textContent=taskInput.value; //assign task in list
       let Remove= document.createElement('button')
       Remove.textContent="Remove"
       Remove.style.margin="10px"

       newTask.appendChild(Remove)
       Tasklist.appendChild(newTask)
       //Tasklist.appendChild(newTask) 
       Remove.addEventListener("click",function()
      {
        Tasklist.removeChild(newTask)   
      })
       taskInput.value=""   //clear input field
    }
    
    
})

