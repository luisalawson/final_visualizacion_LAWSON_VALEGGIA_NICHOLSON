

  d3.csv('datos/datos_merge.csv', d3.autoType).then(data => {
    var framed = true;
    let chart_5 = 
    // Plot.plot({
    //   grid: true,
    //   inset: 10,
      
    //   marks: [
    //     framed ? Plot.frame() : null,
    //     Plot.dot(data, {x: "danceability", y: "popularidad", fill: "#eee"}),
    //     Plot.dot(data, {x: "danceability", y: "popularidad", fx: "Nombre"})
    //   ]
    // })
    // Plot.plot({
    //   marks: [
    //     Plot.delaunayMesh(data, {x: "danceability", y: "popularidad", z: "Nombre", stroke: "Nombre", strokeOpacity: 0.5}),
    //     Plot.dot(data, {x: "danceability", y: "popularidad", fill: "Nombre"})
    //   ]
    // })
    Plot.plot({
        x: {   domain: [-50, 150]  },
        y: {  domain: [0, 1] },
        marks: [
          Plot.density(data, {fx: "Nombre", x: "popularidad", y: "danceability", stroke: "density", clip: true}),
          Plot.frame()
        ]
      })
    d3.select('#chart_6').append(() => chart_5);
  });