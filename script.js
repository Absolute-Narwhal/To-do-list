document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
            taskInput.focus();
        }
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.id == "li") {
            taskList.removeChild(li);
        }
    });

    function addTask(text) {
        const li = document.createElement('li');
        li.textContent = text;
        li.id = "li"
        taskList.appendChild(li);
    }
});
