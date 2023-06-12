d3.csv('datos/datos_merge_coincidencias.csv', d3.autoType).then(data => {
  const filteredData = data.sort((a, b) => b.coincidencias - a.coincidencias).slice(0, 10);
  const filteredData2 = filteredData.sort;
  const chart = Plot.plot({
    style: {
      background: '#141414',
      fontSize: 10,
    },
    width: 650, // Increase the chart width
    height: 400, // Increase the chart height
    font: 'Poppins', // Set font family to Poppins
    marginLeft: 130,
    marks: [
      Plot.barX(filteredData, {
        sort: { y: "x", reverse: true },  
        x: 'coincidencias',
        y: 'artistName',
        fill: d => (d.artistName === "WOS" || d.artistName === "Bizarrap"||d.artistName === "Nicki Nicole"||d.artistName === "Morat"||d.artistName === "TINI") ? "#4D36DB" : "#C7D9F1",
      })
    ]
  });

  d3.select('#chart_8').append(() => chart);
});
