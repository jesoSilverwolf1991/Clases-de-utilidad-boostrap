
const projectBoard = new Draggable.Droppable(document.getElementById('projectBoard'), {
    draggable: '.card',
    delay: 200,
  });
  

  projectBoard.on('drag:start', (event) => {
    event.source.classList.add('dragging');
  });
  
  projectBoard.on('drag:stop', (event) => {
    event.source.classList.remove('dragging');
  });
  