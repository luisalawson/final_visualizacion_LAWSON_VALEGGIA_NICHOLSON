d3.csv('datos/datos_actualizados_LUISA.csv', d3.autoType).then(data => {
    data.forEach(d => {
      const fecha_hora = d.endTime.split(' ');
      const mes = fecha_hora[0].split('-')[1];
      d.month = mes;
      d.hoursPlayed = d.msPlayed / (1000 * 60 * 60); // Convertir los milisegundos a horas
    });
    const sums = d3.rollup(data, v => d3.sum(v, d => d.hoursPlayed), d => d.month);
    const chart2 = Plot.plot({
      marginLeft: 60,
      marginRight: 60,
      grid: true,
      x: { label: 'Mes' , domain: ["01","02","03","04","05","06","07","08","09","10","11","12"] },
      y: { label: 'Cantidad de horas de música escuchadas', domain:[0,35] },
      color: { legend: false },
      marks: [
        Plot.barY(sums,
          { x: d => d[0], y: d => d[1], fill: '#225EA8' }
        ),
        Plot.frame()
      ]
    });
  
    d3.select('#chart_1_luisa').append(() => chart2);
  });
  

  d3.csv('datos/datos_actualizados_SOLVA.csv', d3.autoType).then(data => {
    data.forEach(d => {
      const fecha_hora = d.endTime.split(' ');
      const mes = fecha_hora[0].split('-')[1];
      d.month = mes;
      d.hoursPlayed = d.msPlayed / (1000 * 60 * 60); // Convertir los milisegundos a horas
    });
  
    const sums = d3.rollup(data, v => d3.sum(v, d => d.hoursPlayed), d => d.month);
  
    const chart2 = Plot.plot({
      marginLeft: 60,
      marginRight: 60,
      grid: true,
      x: { label: 'Mes' },
      y: { label: 'Cantidad de horas de música escuchadas',domain:[0,35] },
      color: { legend: false },
      marks: [
        Plot.barY(sums,
          { x: d => d[0], y: d => d[1], fill: '#225EA8' }
        ),
        Plot.frame()
      ]
    });
  
    d3.select('#chart_1_solva').append(() => chart2);
  });
  

  d3.csv('datos/datos_actualizados_OLIVIA.csv', d3.autoType).then(data => {
    data.forEach(d => {
      const fecha_hora = d.endTime.split(' ');
      const mes = fecha_hora[0].split('-')[1];
      d.month = mes;
      d.hoursPlayed = d.msPlayed / (1000 * 60 * 60); // Convertir los milisegundos a horas
    });
  
    const sums = d3.rollup(data, v => d3.sum(v, d => d.hoursPlayed), d => d.month);
  
    const chart2 = Plot.plot({
      marginLeft: 60,
      marginRight: 60,
      grid: true,
      x: { label: 'Mes' },
      y: { label: 'Cantidad de horas de música escuchadas',domain:[0,35] },
      color: { legend: false },
      marks: [
        Plot.barY(sums,
          { x: d => d[0], y: d => d[1], fill: '#225EA8' }
        ),
        Plot.frame()
      ]
    });
  
    d3.select('#chart_1_olivia').append(() => chart2);
  });
  