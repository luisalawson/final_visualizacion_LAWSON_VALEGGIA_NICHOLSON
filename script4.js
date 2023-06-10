

  d3.csv('datos/datos_merge.csv', d3.autoType).then(data => {
    
    let chart_5 = Plot.plot({
        x: {   domain: [-50, 150]  },
        y: {  domain: [0, 1] },
        marks: [
          Plot.density(data, {fx: "Nombre", x: "popularidad", y: "danceability", stroke: "density", clip: true}),
          Plot.frame()
        ]
      })
    d3.select('#chart_6').append(() => chart_5);
  });