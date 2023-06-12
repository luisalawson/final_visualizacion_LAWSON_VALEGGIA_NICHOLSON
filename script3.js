d3.csv('datos/datos_agrupados_OLIVIA.csv', d3.autoType).then(data => {
    // Ordenar los datos por msPlayed de forma descendente y tomar las 10 primeras canciones
    const filteredData = data.sort((a, b) => b.msPlayed - a.msPlayed).slice(0, 10);
    
    filteredData.forEach(d => {
        d.msPlayed = d.msPlayed / (1000 * 60 * 60); // Convertir los milisegundos a horas
    });

    const sums = d3.rollup(filteredData, v => d3.sum(v, d => d.msPlayed), d => d.trackName);

    const chart_3 = Plot.plot({
        style: {
            background: '#141414',
            fontSize: 10,
          },
        width: 650, // Increase the chart width
        height: 400, // Increase the chart height
        font: 'Poppins', // Set font family to Poppins
        marginLeft: 200,
        marginRight: 60,
        x: { domain:[0,8]  },
        y: { label: 'Cantidad de canciones escuchadas (horas)' },
        color: { legend: false },
        marks: [
            Plot.barX(sums,
                { y: d => d[0], x: d => d[1], fill: '#225EA8',        sort: { y: "x", reverse: true },  
            }
            )
        ]
    });

    d3.select('#chart_3_olivia').append(() => chart_3);
});

d3.csv('datos/datos_agrupados_LUISA.csv', d3.autoType).then(data => {
    // Ordenar los datos por msPlayed de forma descendente y tomar las 10 primeras canciones
    const filteredData = data.sort((a, b) => b.msPlayed - a.msPlayed).slice(0, 10);
    
    filteredData.forEach(d => {
        d.msPlayed = d.msPlayed / (1000 * 60 * 60); // Convertir los milisegundos a horas
    });

    const sums = d3.rollup(filteredData, v => d3.sum(v, d => d.msPlayed), d => d.trackName);

    const chart_3 = Plot.plot({
        style: {
            background: '#141414',
            fontSize: 10,
          },
        width: 650, // Increase the chart width
        height: 400, // Increase the chart height
        font: 'Poppins', // Set font family to Poppins
        marginLeft: 200,
        marginRight: 60,
        x: { domain:[0,8]  },
        y: { label: 'Cantidad de canciones escuchadas (horas)' },
        color: { legend: false },
        marks: [
            Plot.barX(sums,
                { y: d => d[0], x: d => d[1], fill: '#225EA8',         sort: { y: "x", reverse: true },  
            }
            )
            
        ]
    });

    d3.select('#chart_3_luisa').append(() => chart_3);
});

d3.csv('datos/datos_agrupados_SOLVA.csv', d3.autoType).then(data => {
    const filteredData = data.sort((a, b) => b.msPlayed - a.msPlayed).slice(0, 10);
    
    filteredData.forEach(d => {
        d.msPlayed = d.msPlayed / (1000 * 60 * 60); // Convertir los milisegundos a horas
    });

    const sums = d3.rollup(filteredData, v => d3.sum(v, d => d.msPlayed), d => d.trackName);

    const chart_3 = Plot.plot({
        style: {
            background: '#141414',
            fontSize: 10,
          },
        width: 650, // Increase the chart width
        height: 400, // Increase the chart height
        font: 'Poppins', // Set font family to Poppins
        marginLeft: 200,
        marginRight: 60,
        x: { domain:[0,8]  },
        y: { label: 'Cantidad de canciones escuchadas (horas)' },
        color: { legend: false },
        marks: [
            Plot.barX(sums,
                { y: d => d[0], x: d => d[1], fill: '#225EA8',        sort: { y: "x", reverse: true },  
            }
            )
            
        ]
    });
    d3.select('#chart_3_solva').append(() => chart_3);
});
