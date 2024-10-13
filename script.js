
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


// setting up local storage

// add task
function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value;
    if (taskText) {
        console.log("task added:", taskText); //test
        taskInput.value = ""; //clears input field after click event
    }
}

// render the task added
function renderTask(taskText) {

    // create the li to be rendered
    const li = document.createElement("li");
    // adding text to the li 
    li.textContent = taskText;

    // add delete and add buttons here

    // appending li to the ul
    document.getElementById("tasksList").appendChild(li);
}
