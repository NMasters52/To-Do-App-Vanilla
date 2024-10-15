
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
    
    parsedTasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center"; // Bootstrap classes for styling

        // Create a span for the text
        const textSpan = document.createElement("span");
        textSpan.textContent = task.text;
        textSpan.style.flexGrow = 1; // Allow text to grow
        textSpan.style.marginRight = "10px"; // Add space between text and buttons

        // Apply strikethrough if completed
        if (task.completed) {
            textSpan.style.textDecoration = "line-through"; // Apply strikethrough
        }

        li.appendChild(textSpan);

        // Create a button group
        const buttonGroup = document.createElement("div");
        buttonGroup.className = "btn-group";

        // Complete button
        const completeBtn = document.createElement("button");
        completeBtn.innerText = task.completed ? "Undo" : "Complete";
        completeBtn.className = task.completed ? "btn btn-warning btn-sm" : "btn btn-success btn-sm";
        completeBtn.onclick = () => {
            task.completed = !task.completed; // Toggle completion status
            localStorage.setItem("tasks", JSON.stringify(parsedTasks));
            renderTasks(); // Re-render tasks
        };
        buttonGroup.appendChild(completeBtn);

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.className = "btn btn-danger btn-sm"; // Small button for better alignment
        deleteBtn.onclick = () => {
            parsedTasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(parsedTasks));
            renderTasks(); // Re-render tasks
        };
        buttonGroup.appendChild(deleteBtn);

        // Append button group to the list item
        li.appendChild(buttonGroup);
        
        // Append the list item to the task list
        taskList.appendChild(li);
    });
}
// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const taskItems = document.querySelectorAll('.list-group-item');
    const isDarkMode = body.classList.toggle('dark-mode');

    taskItems.forEach(item => {
        item.classList.toggle('dark-mode', isDarkMode);
    });

    // Change button styles based on the current mode
    const toggleButton = document.getElementById('darkModeToggle');
    toggleButton.classList.toggle('btn-dark-mode', isDarkMode);
}

// Add event listener for the dark mode toggle button
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);


renderTasks();

