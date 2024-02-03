document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;
    taskList.appendChild(li);

    li.addEventListener('click', () => li.parentNode.removeChild(li));

    taskInput.value = '';
}
