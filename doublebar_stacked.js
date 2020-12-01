

// function buildPlot(){
  d3.csv("./Resources/olympics.csv").then(function(data) {
    console.log(data);
    var years=data.map(data=>data.year)
    var sport=data.map(data=>data.sport)
    var sex = data.map(data=>data.sex)

    const female= data.filter(d=>d.sex==="female")
    console.log(female)
    const male= data.filter(d=>d.sex==="male")
    console.log(male)
    const olympics_1976=data.filter(d=>d.year==="1976");
    const olympics_1984=data.filter(d=>d.year==="1984");
    const olympics_1988=data.filter(d=>d.year==="1988");
    const olympics_1992=data.filter(d=>d.year==="1992");
    const olympics_1996=data.filter(d=>d.year==="1996");
    const olympics_2000=data.filter(d=>d.year==="2000");
    const olympics_2004=data.filter(d=>d.year==="2004");
    const olympics_2008=data.filter(d=>d.year==="2008");
    const olympics_2016=data.filter(d=>d.year==="2016");

    olympics_2016.filter()
   


    var medal= data.map(data=>data.medal)


    var trace1 = {
      x: sport,
      y: olympics_2016,
      name: 'Dog',
      type: 'bar'
    };
    
    // var trace2 = {
    //   x: sport,
    //   y: male,
    //   name: 'cow',
    //   type: 'bar'
    // };


    var data = [trace1];
    // var layout = {barmode: 'stack'};

    Plotly.newPlot('plot', data);

  });
 




// function olympicYear(game){
//   return game.year
// }
// var yearOfolympicGames = data.filter(olympicYear);

// // Display the results
// console.log(yearOfolympicGames);




