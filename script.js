document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.add-task');
  const taskInput = document.getElementById('new-task');
  const taskList = document.getElementById('tasks');

  // Adicionar tarefa
  form.addEventListener('submit', addTask);

  function addTask(e) {
      e.preventDefault();
      if (taskInput.value === '') return;

      const li = document.createElement('li');
      li.className = 'task-item';
      li.innerHTML = `<span>${taskInput.value}</span><button class="delete">X</button>`;

      // Adicionar botão de exclusão a tarefa
      const deleteBtn = li.querySelector('.delete');
      deleteBtn.addEventListener('click', removeTask);

      // Adicionar tarefa à lista
      taskList.appendChild(li);

      // Limpar campo de entrada
      taskInput.value = '';
  }

  // Remover tarefa
  function removeTask(e) {
      e.target.parentElement.remove();
  }
});
