import test_default, { test as test1, age } from './part1.js'
console.log(test1, age, test_default());
document.addEventListener('DOMContentLoaded', function () {
    getRemoveNewTask();

})
function getRemoveNewTask() {
    const taskList = document.getElementById('task-list');
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');

    // Функція для видалення пункту списку
    function removeTask(event) {
        if (event.target.classList.contains('delete-button')) {
            event.target.parentElement.remove();
        }
    }

    // Додавання обробника подій до списку завдань з використанням делегування
    taskList.addEventListener('click', removeTask);

    // Додавання нового завдання до списку
    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value;
        if (taskText.trim() !== '') {
            const taskItem = document.createElement('li');
            taskItem.className = 'task-item';
            taskItem.innerHTML = `
                    <span>${taskText}</span>
                    <button class="delete-button">Видалити</button>
                `;
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    });
}