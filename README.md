# To-Do App

A simple To-Do application using **JavaScript**, **LocalStorage**, and **Bootstrap** for styling. This app allows users to add tasks, mark them as completed, delete tasks, and toggle dark mode for a better user experience.

## Features

1. **Add Task**: Allows users to add new tasks to their list.
2. **Mark as Complete/Undo**: Users can mark tasks as complete or undo the completion.
3. **Delete Task**: Users can remove tasks from their list.
4. **Dark Mode**: Toggles between light and dark mode for better readability.
5. **LocalStorage Support**: The tasks are saved in `localStorage` so they persist even after the page is refreshed.

## Technologies Used

- **HTML5** for the structure
- **CSS** with **Bootstrap** for styling
- **JavaScript** for interactivity and logic
- **LocalStorage** for saving tasks locally

## How It Works

1. **Task Management**: 
    - You can add tasks using the input field and clicking the "Submit" button.
    - Each task will appear in a list with two buttons: "Complete" (or "Undo" if already completed) and "Delete".
    - Clicking "Complete" strikes through the task and changes the button to "Undo".
    - Clicking "Delete" removes the task from the list and `localStorage`.
    
2. **Dark Mode**:
    - You can toggle between light and dark mode by clicking the "Toggle Dark Mode" button. The background and text colors adjust accordingly for a dark or light theme.

3. **LocalStorage**:
    - The tasks are saved in the browser's `localStorage` as an array of task objects. Each task has a `text` and `completed` status.
    - The app retrieves and renders the tasks from `localStorage` every time the page loads.

## Installation and Usage

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/todo-app.git
    ```

2. Navigate into the project folder:

    ```bash
    cd todo-app
    ```

3. Open `index.html` in a web browser to run the app.

    ```bash
    open index.html
    ```

4. Add tasks, mark them as complete, or delete them. Your tasks will persist even after refreshing the page!

## Code Overview

### Adding Tasks

The `addTask()` function takes the input from the text box, validates it, and adds the task to the list and `localStorage`.

```javascript
function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    let localTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    localTasks.push({ text: taskText, completed: false });

    localStorage.setItem("tasks", JSON.stringify(localTasks));
    taskInput.value = "";
    renderTasks();
}
```

### Rendering Tasks

The `renderTasks()` function retrieves tasks from `localStorage`, creates `li` elements, and appends them to the list on the page.

```javascript
function renderTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("taskList");

    taskList.innerHTML = ''; // Clear previous tasks

    tasks.forEach((task, index) => {
        // Create and append list items for each task
    });
}
```

### Dark Mode Toggle

The `toggleDarkMode()` function applies a dark theme by toggling CSS classes on the body and task items.

```javascript
function toggleDarkMode() {
    const body = document.body;
    const taskItems = document.querySelectorAll('.list-group-item');
    const isDarkMode = body.classList.toggle('dark-mode');

    taskItems.forEach(item => {
        item.classList.toggle('dark-mode', isDarkMode);
    });

    const toggleButton = document.getElementById('darkModeToggle');
    toggleButton.classList.toggle('btn-dark-mode', isDarkMode);
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Bootstrap](https://getbootstrap.com/) for the CSS framework.
- [MDN Web Docs](https://developer.mozilla.org/) for the JavaScript and LocalStorage references.

Feel free to contribute and suggest improvements!
