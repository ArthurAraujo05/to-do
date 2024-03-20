document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.add-task');
  const taskInput = document.getElementById('new-task');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', addTask);

  function addTask(e) {
      e.preventDefault();
      if (taskInput.value === '') return;

      const li = document.createElement('li');
      li.className = 'task-item';
      li.innerHTML = `<span>${taskInput.value}</span>
                        <button class="delete-btn"><i class="li-trash"></i></button> 
                        <button class="check-btn"><i class="li-check"></i></button> `;

      const deleteBtn = li.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', function() {
        removeTask(li);
      });

      const checkBtn = li.querySelector('.check-btn');
      checkBtn.addEventListener('click', function() {
        toggleDone(li);
      });

      taskList.appendChild(li);

      taskInput.value = '';
  }

  function removeTask(task) {
    task.remove();
  }

  function toggleDone(task) {
    task.classList.toggle('done');
  }
});


