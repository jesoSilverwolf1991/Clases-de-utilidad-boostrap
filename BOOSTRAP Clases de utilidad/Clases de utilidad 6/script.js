document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('taskList');
  

    function addTask(description, dueDate) {
      const card = document.createElement('div');
      card.classList.add('card');
  
      const cardHeader = document.createElement('div');
      cardHeader.classList.add('card-header');
      cardHeader.textContent = 'Tarea Pendiente';
  
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
      cardBody.innerHTML = `
        <p>${description}</p>
        <p class="due-date">Fecha límite: ${dueDate}</p>
      `;
  
      card.appendChild(cardHeader);
      card.appendChild(cardBody);
  
      taskList.appendChild(card);
    }
  
   
    addTask('Hacer la compra', '2023-12-01');
    addTask('Preparar presentación', '2023-12-05');
  });
  