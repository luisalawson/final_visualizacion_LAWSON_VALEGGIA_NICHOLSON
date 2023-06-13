d3.csv('datos/datos_merge_coincidencias.csv', d3.autoType).then(data => {
  const filteredData = data.sort((a, b) => b.coincidencias - a.coincidencias).slice(0, 10);

  function getImageUrl(artistName) {
    if (artistName === "WOS") {
      return "imagenes/wos.webp";
    } else if (artistName === "Bizarrap") {
      return "imagenes/bizarrap.webp";
    } else if (artistName === "Nicki Nicole") {
      return "imagenes/nicki.webp";
    } else if (artistName === "Morat") {
      return "imagenes/morat.jpeg";
    } else if (artistName === "TINI") {
      return "imagenes/tini.webp";
    } else {
      return "imagenes/tini.webp"; // Si no hay imagen específica, usa una imagen predeterminada
    }
  }

  const chart = Plot.plot({
    style: {
      background: '#141414',
      fontSize: 10,
    },
    width: 650, // Aumenta el ancho del gráfico
    height: 400, // Aumenta la altura del gráfico
    font: 'Poppins', // Establece la fuente a Poppins
    marginLeft: 130,
    marks: [
      Plot.barX(filteredData, {
        sort: { y: "x", reverse: true },  
        x: 'coincidencias',
        y: 'artistName',
        fill: d => (d.artistName === "WOS" || d.artistName === "Bizarrap" || d.artistName === "Nicki Nicole" || d.artistName === "Morat" || d.artistName === "TINI") ? "#4D36DB" : "#C7D9F1",
      }),
      Plot.image(filteredData, {
        x: 'coincidencias',
        y: 'artistName',
        url: d => getImageUrl(d.artistName),
        width: 20,
        height: 20,
        dy: 5,
      })
    ]
  });

  d3.select('#chart_8').append(() => chart);
}).catch(error => {
  console.log(error);
});
