d3.csv('final_visualizacion_LAWSON_VALEGGIA_NICHOLSON/datos/datos_agrupados_OLIVIA.csv', d3.autoType).then(data => {
  // Ordenar los datos por msPlayed de forma descendente y tomar las 10 primeras canciones
  const filteredData = data.sort((a, b) => b.msPlayed - a.msPlayed).slice(0, 10);
  
  filteredData.forEach(d => {
      const fecha_hora = d.endTime.split(' ');
      const hora = fecha_hora[1].split(':')[0];
      d.hour = hora;
      d.msPlayed = d.msPlayed / (1000 * 60 * 60); // Convertir los milisegundos a horas
  });

  const sums = d3.rollup(filteredData, v => d3.sum(v, d => d.msPlayed), d => d.hour);

  const chart_1 = Plot.plot({
      marginLeft: 60,
      marginRight: 60,
      grid: true,
      x: { label: 'Hora' },
      y: { label: 'Cantidad de canciones escuchadas (horas)', domain: [0, 24] },
      color: { legend: false },
      marks: [
          Plot.barY(sums,
              { x: d => d[0], y: d => d[1], fill: '#225EA8' }
          ),
          Plot.frame()
      ]
  });

  d3.select('#chart_3_olivia').append(() => chart_1);
});
