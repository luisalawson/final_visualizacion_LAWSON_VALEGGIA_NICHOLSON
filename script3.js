d3.csv('datos/datos_agrupados_OLIVIA.csv', d3.autoType).then(data => {
    const filteredData = data.sort((a, b) => b.msPlayed - a.msPlayed).slice(0, 5);
    filteredData.forEach(d => {
        d.msPlayed = d.msPlayed / (1000 * 60 * 60); // Convertir los milisegundos a horas
    });
    const sums = d3.rollup(filteredData, v => d3.sum(v, d => d.msPlayed), d => d.trackName);
    const chart_3 = Plot.plot({
        style: {
            background: '#141414',
            fontSize: 10,
          },
        x: {padding: 0.4},
        y:{domain:[0,8]},
        marks: [
          Plot.barY(sums, {x: d => d[0], y: d => d[1], dx: 2, dy: 2, sort: { x: "y", reverse: true }}),
          Plot.barY(sums, {x: d => d[0], y: d => d[1], fill: "#D32373", dx: -2, dy: -2})
        ]
      })
    d3.select('#chart_3_olivia').append(() => chart_3);
});

d3.csv('datos/datos_agrupados_LUISA.csv', d3.autoType).then(data => {
    const filteredData = data.sort((a, b) => b.msPlayed - a.msPlayed).slice(0, 5);
    filteredData.forEach(d => {
        d.msPlayed = d.msPlayed / (1000 * 60 * 60); // Convertir los milisegundos a horas
    });
    const sums = d3.rollup(filteredData, v => d3.sum(v, d => d.msPlayed), d => d.trackName);
    const chart_3 = Plot.plot({
        style: {
            background: '#141414',
            fontSize: 10,
          },
        x: {padding: 0.4},
        y:{domain:[0,8]},
        marks: [
          Plot.barY(sums, {x: d => d[0], y: d => d[1], dx: 2, dy: 2, sort: { x: "y", reverse: true }}),
          Plot.barY(sums, {x: d => d[0], y: d => d[1], fill: "#6823D3", dx: -2, dy: -2})
        ]
      })

    d3.select('#chart_3_luisa').append(() => chart_3);
});

d3.csv('datos/datos_agrupados_SOLVA.csv', d3.autoType).then(data => {
    const filteredData = data.sort((a, b) => b.msPlayed - a.msPlayed).slice(0, 5);
    filteredData.forEach(d => {
        d.msPlayed = d.msPlayed / (1000 * 60 * 60); // Convertir los milisegundos a horas
    });
    const sums = d3.rollup(filteredData, v => d3.sum(v, d => d.msPlayed), d => d.trackName);
    const chart_3 = Plot.plot({
        style: {
            background: '#141414',
            fontSize: 10,
          },
        x: {padding: 0.4},
        y:{domain:[0,8]},
        marks: [
          Plot.barY(sums, {x: d => d[0], y: d => d[1], dx: 2, dy: 2, sort: { x: "y", reverse: true }}),
          Plot.barY(sums, {x: d => d[0], y: d => d[1], fill: "#23B0D3", dx: -2, dy: -2})
        ]
      })
    d3.select('#chart_3_solva').append(() => chart_3);
});

