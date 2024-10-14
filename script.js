
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
       }
   } catch (error) {
       console.error("Failed to parse tasks from localStorage:", error);
   }

    localTasks.push(taskText);

     // sets tasks text to local storage
     localStorage.setItem("tasks", JSON.stringify(localTasks));
     console.log(localTasks);
};

// how the tasks are rendered to the ul
function renderTasks() {
    const tasks = localStorage.getItem("tasks");
    const taskList = document.getElementById("taskList");

    const parsedTasks = JSON.parse(tasks);
    
    parsedTasks.map(task => {
    const li = document.createElement("li");
    const textNode = document.createTextNode(task);
    li.appendChild(textNode);
    taskList.appendChild(li);
   })
};

renderTasks();

