
function addTask() {
    // create li to be added
    const li = document.createElement("li");

    // create text to be added to li
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value;

    // create textNode to hold the text
    const textNode = document.createTextNode(taskText);
    li.appendChild(textNode);
    

    // create button to be added with text
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "complete task";

    // create clickevent for the button
    completeBtn.addEventListener("click", () => {
        li.style.textDecoration = "line-through";
    });

    // append completeBtn to the li
    li.appendChild(completeBtn);

    // create deleteBtn
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete task";

    // deleteBtn onClick to delete element after being clicked
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    // append delete btn to Li
    li.appendChild(deleteBtn);

    // add content to webpage
    document.getElementById("taskList").appendChild(li);
    

    // delete text from input after submit
    taskInput.value = "";
}