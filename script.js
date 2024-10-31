const taskInput = document.getElementById('taskInput');
const taskDate = document.getElementById('taskDate');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

let tasks = [];

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text + (task.date ? ` (Due: ${task.date})` : '');
        if (task.completed) {
            li.classList.add('completed');
        }
        li.addEventListener('click', () => toggleTaskCompletion(index));
        li.addEventListener('dblclick', () => editTask(index));
        
        taskList.appendChild(li);
    });
}

function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function editTask(index) {
    const newTaskText = prompt("Edit your task:", tasks[index].text);
    if (newTaskText) {
        tasks[index].text = newTaskText;
        tasks[index].date = taskDate.value;
        renderTasks();
    }
}

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    const dueDate = taskDate.value;
    if (taskText) {
        tasks.push({ text: taskText, completed: false, date: dueDate });
        taskInput.value = '';
        taskDate.value = '';
        renderTasks();
    }
});

// Initial render
renderTasks();
