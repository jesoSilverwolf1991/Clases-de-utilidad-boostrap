document.addEventListener('DOMContentLoaded', function () {
   
    const barChartData = {
      labels: ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4', 'Categoria 5'],
      datasets: [{
        label: 'Datos de Ejemplo',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [12, 19, 3, 5, 2],
      }],
    };
  
    
    const barChartConfig = {
      type: 'bar',
      data: barChartData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  
    
    const barChartCanvas = document.getElementById('barChart').getContext('2d');
    new Chart(barChartCanvas, barChartConfig);
  });
  