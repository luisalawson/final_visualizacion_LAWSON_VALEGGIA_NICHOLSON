d3.csv('datos/datos_actualizados_LUISA.csv', d3.autoType).then(data => {
    data.forEach(d => {
      const fecha_hora = d.endTime.split(' ');
      const hora = fecha_hora[1].split(':')[0];
      d.hour = hora;
      d.msPlayed = d.msPlayed / (1000 * 60 * 60); // Convertir los milisegundos a horas
    });
  
    const sums = d3.rollup(data, v => d3.sum(v, d => d.msPlayed), d => d.hour);
  
    const chart_1 = Plot.plot({
        marginLeft: 60,
        marginRight: 60,
        grid: true,
        x: { label: 'Hora' },
        y: { label: 'Cantidad de canciones escuchadas (horas)', domain:[0,24] },
        color: { legend: false },
        marks: [
          Plot.barY(sums,
            { x: d => d[0], y: d => d[1], fill: '#225EA8' } // Ajustar los nombres de las propiedades
          ),
          Plot.frame()
        ]
      });
      
  
    d3.select('#chart_luisa').append(() => chart_1);
  });
  
  d3.csv('datos/datos_actualizados_SOLVA.csv', d3.autoType).then(data => {
    data.forEach(d => {
      const fecha_hora = d.endTime.split(' ');
      const hora = fecha_hora[1].split(':')[0];
      d.hour = hora;
      d.msPlayed = d.msPlayed / (1000 * 60 * 60); // Convertir los milisegundos a horas
    });
  
    const sums = d3.rollup(data, v => d3.sum(v, d => d.msPlayed), d => d.hour);
  
    const chart_1 = Plot.plot({
        marginLeft: 60,
        marginRight: 60,
        grid: true,
        x: { label: 'Hora' },
        y: { label: 'Cantidad de canciones escuchadas (horas)', domain:[0,24] },
        color: { legend: false },
        marks: [
          Plot.barY(sums,
            { x: d => d[0], y: d => d[1], fill: '#225EA8' } // Ajustar los nombres de las propiedades
          ),
          Plot.frame()
        ]
      });
      
  
    d3.select('#chart_solva').append(() => chart_1);
  });
  
  d3.csv('datos/datos_actualizados_OLIVIA.csv', d3.autoType).then(data => {
    data.forEach(d => {
      const fecha_hora = d.endTime.split(' ');
      const hora = fecha_hora[1].split(':')[0];
      d.hour = hora;
      d.msPlayed = d.msPlayed / (1000 * 60 * 60); // Convertir los milisegundos a horas
    });
  
    const sums = d3.rollup(data, v => d3.sum(v, d => d.msPlayed), d => d.hour);
  
    const chart_1 = Plot.plot({
        marginLeft: 60,
        marginRight: 60,
        grid: true,
        x: { label: 'Hora' },
        y: { label: 'Cantidad de canciones escuchadas (horas)', domain:[0,24] },
        color: { legend: false },
        marks: [
          Plot.barY(sums,
            { x: d => d[0], y: d => d[1], fill: '#225EA8' } // Ajustar los nombres de las propiedades
          ),
          Plot.frame()
        ]
      });
      
  
    d3.select('#chart_olivia').append(() => chart_1);
  });