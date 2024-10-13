function addTask() {
    const li = document.createElement("li");
    const textNode = document.createTextNode(document.getElementById
    ("task").value);
    const completeBtn = document.createElement("button");

    li.appendChild(textNode);
    li.appendChild(completeBtn);
    document.getElementById("taskList").appendChild(li);
}