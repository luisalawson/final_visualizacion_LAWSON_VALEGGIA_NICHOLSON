

d3.csv('datos/datos_merge.csv', d3.autoType).then(data => {
    let chart_7 = Plot.plot({
        marginLeft: 100,
        x: {grid: true},
        y: {label: null},
        marks: [
          Plot.barY(data, Plot.groupX({y: "mean"}, {fx: "Nombre",x: "danceability", sort: {x: "y"}})),
          Plot.ruleX([0])
        ]
      })
    
    d3.select('#chart_7').append(() => chart_7);
  });