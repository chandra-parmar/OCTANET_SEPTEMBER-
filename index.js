let taskInput = document.querySelector("#taskinput");
let Addtask = document.querySelector("#addtask");
let Tasklist = document.querySelector("#tasklist");

Addtask.addEventListener("click", function () {
    if (taskInput.value == "") {
        alert("Enter task");
    } else {
        let newTask = document.createElement('li');
        
        
        let taskText = document.createElement('span');
        taskText.textContent = taskInput.value; 

        let check = document.createElement('input');
        check.type = "checkbox";

        check.addEventListener("change", function () {
            if (check.checked) {
                newTask.style.backgroundColor = 'lightgreen';
                taskText.style.textDecoration = "line-through";

            } else {
                taskText.style.backgroundColor = ''; 
                taskText.style.textDecoration = "none"; 
            }
        });

        let Remove = document.createElement('button');
        Remove.textContent = "Remove";
        Remove.style.margin = "10px";

        newTask.appendChild(check);
        newTask.appendChild(taskText); 
        newTask.appendChild(Remove);
        Tasklist.appendChild(newTask);

        // Remove button event
        Remove.addEventListener("click", function () {
            Tasklist.removeChild(newTask);
        });

        taskInput.value = "";   
    }
});
