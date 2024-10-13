
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
    completeBtn.textContent = "complete";

    // create clickevent for the button
    completeBtn.addEventListener("click", () => {
        li.style.textDecoration = "line-through";
    })

    // append button to the li
    li.appendChild(completeBtn);

    // add content to webpage
    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}