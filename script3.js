d3.csv('datos/datos_agrupados_OLIVIA.csv', d3.autoType).then(data => {
    // Ordenar los datos por msPlayed de forma descendente y tomar las 10 primeras canciones
    const filteredData = data.sort((a, b) => b.msPlayed - a.msPlayed).slice(0, 10);
    
    filteredData.forEach(d => {
        d.msPlayed = d.msPlayed / (1000 * 60 * 60); // Convertir los milisegundos a horas
    });

    const sums = d3.rollup(filteredData, v => d3.sum(v, d => d.msPlayed), d => d.trackName);

    const chart_3 = Plot.plot({
        marginLeft: 60,
        marginRight: 60,
        grid: true,
        x: {   tickRotate: -45, },
        y: { label: 'Cantidad de canciones escuchadas (horas)', domain: [0, 24] },
        color: { legend: false },
        marks: [
            Plot.barY(sums,
                { x: d => d[0], y: d => d[1], fill: '#225EA8' }
            ),
            Plot.frame()
            
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
        marginLeft: 60,
        marginRight: 60,
        grid: true,
        x: {   tickRotate: -45, },
        y: { label: 'Cantidad de canciones escuchadas (horas)', domain: [0, 24] },
        color: { legend: false },
        marks: [
            Plot.barY(sums,
                { x: d => d[0], y: d => d[1], fill: '#225EA8' }
            ),
            Plot.frame()
            
        ]
    });

    d3.select('#chart_3_luisa').append(() => chart_3);
});

d3.csv('datos/datos_agrupados_SOLVA.csv', d3.autoType).then(data => {
    // Ordenar los datos por msPlayed de forma descendente y tomar las 10 primeras canciones
    const filteredData = data.sort((a, b) => b.msPlayed - a.msPlayed).slice(0, 10);
    
    filteredData.forEach(d => {
        d.msPlayed = d.msPlayed / (1000 * 60 * 60); // Convertir los milisegundos a horas
    });

    const sums = d3.rollup(filteredData, v => d3.sum(v, d => d.msPlayed), d => d.trackName);

    const chart_3 = Plot.plot({
        marginLeft: 60,
        marginRight: 60,
        grid: true,
        x: {   tickRotate: -45, },
        y: { label: 'Cantidad de canciones escuchadas (horas)', domain: [0, 24] },
        color: { legend: false },
        marks: [
            Plot.barY(sums,
                { x: d => d[0], y: d => d[1], fill: '#225EA8' }
            ),
            Plot.frame()
            
        ]
    });

    d3.select('#chart_3_solva').append(() => chart_3);
});
