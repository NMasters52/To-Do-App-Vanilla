function addTask() {
    // create the li
    const li = document.createElement("li");

    // create text for li
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value;

    // create text node 
    const textNode = document.createTextNode(taskText);
    li.appendChild(textNode);

    // create the complete button
    const completeBtn  = document.createElement("button");
    

    // add the task to the ul
    li.appendChild(textNode);
    // add button to newly added text
    li.appendChild(completeBtn);
    document.getElementById("taskList").appendChild(li);
}