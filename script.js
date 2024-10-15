
// *Using In-Memory Storage*
// function addTask() {
//     // create li to be added
//     const li = document.createElement("li");

//     // create text to be added to li
//     const taskInput = document.getElementById("task");
//     const taskText = taskInput.value;

//     // create textNode to hold the text
//     const textNode = document.createTextNode(taskText);
//     li.appendChild(textNode);
    

//     // create button to be added with text
//     const completeBtn = document.createElement("button");
//     completeBtn.textContent = "complete task";

//     // create clickevent for the button
//     completeBtn.addEventListener("click", () => {
//         li.style.textDecoration = "line-through";
//     });

//     // append completeBtn to the li
//     li.appendChild(completeBtn);

//     // create deleteBtn
//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "delete task";

//     // deleteBtn onClick to delete element after being clicked
//     deleteBtn.addEventListener("click", () => {
//         li.remove();
//     });

//     // append delete btn to Li
//     li.appendChild(deleteBtn);

//     // add content to webpage
//     document.getElementById("taskList").appendChild(li);
    

//     // delete text from input after submit
//     taskInput.value = "";
// }


// using *local storage*
function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

     // Check if the input is not empty
     if (taskText === "") {
        alert("Please enter a task."); 
        return;
    }

   // Retrieve existing tasks from localStorage
   let localTasks = [];
 
   try {
       const storedTasks = localStorage.getItem("tasks");
       if (storedTasks) {
           localTasks = JSON.parse(storedTasks);
           if (!Array.isArray(localTasks)) {
            localTasks = []; // Reset to empty array if not an array
        }
       }
   } catch (error) {
       console.error("Failed to parse tasks from localStorage:", error);
       localTasks = [];
   }

   localTasks.push({ text: taskText, completed: false });

     // sets tasks text to local storage
     localStorage.setItem("tasks", JSON.stringify(localTasks));
     taskInput.value = "";

     renderTasks();
};

// how the tasks are rendered to the ul
function renderTasks() {
    const tasks = localStorage.getItem("tasks");
    const taskList = document.getElementById("taskList");

     // Clear existing tasks
     taskList.innerHTML = '';

    const parsedTasks = JSON.parse(tasks) || [];
    
    parsedTasks.forEach(task => {
        const li = document.createElement("li");
        const textNode = document.createTextNode(task.text);
        li.appendChild(textNode);

        //complete button
        const completeBtn = document.createElement("button");
        completeBtn.innerText = task.completed ? "undo" : "Complete";
        li.appendChild(completeBtn);
        // give functionality to complete button
        completeBtn.onclick = () => {
            task.completed = !task.completed;
            localStorage.setItem("tasks", JSON.stringify(parsedTasks));
            renderTasks();
        };
        if (task.completed) {
            li.style.textDecoration = "line-through"; 
        }

        //delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        li.appendChild(deleteBtn);
        // give delete button functionality
        deleteBtn.onclick = () => {
            // Use findIndex to locate the task to delete
            const indexToDelete = parsedTasks.findIndex(t => t.text === task.text);
            if (indexToDelete !== -1) {
                parsedTasks.splice(indexToDelete, 1);
                localStorage.setItem("tasks", JSON.stringify(parsedTasks)); 
                renderTasks(); 
            }
        }; 
        

            // render the li to the targeted ul
        taskList.appendChild(li);
   });
};



renderTasks();

