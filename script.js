function addTask() {
    const li = document.createElement("li");
    const textNode = document.createTextNode(document.getElementById("task").value);
    li.appendChild(textNode);
    document.getElementById("taskList").appendChild(li);
}