function filterByYear(data, input) {
  return data.filter((d) => d.year === input);
}
var filteredYears = data.filter(filterByYear);
var sportsYear = filteredYears.map(s => s.sport)
sportFrequency={};
for (var i = 0; i < sportsYear.length; i++){
  var currentSport = sportsYear[i];
  if (currentSport in sportFrequency) {
    sportFrequency[currentSport] += 1;
  } else {
    sportFrequency[currentSport] = 1;
  }
}
var sportEvents = Object.keys(sportFrequency);
var sportEventCount= Object.values(sportFrequency);
console.log((sportEvents))
console.log(sportEventCount)

return sportFrequency



// function filterBySport(data,input){
//   return filteredData.filter((d) => d.sport);
// }
// d3.csv("./Resources/olympicscjb.csv").then(function (allSportData) {

  const input = "1992"

  const yearFilteredData = filterSportDataByYear(allSportData, input)
  var sports = allSportData.map(d => d.sport)
  var differentSports = new Set(sports)

  var sportFrequency = {};

  for (var i = 0; i < sportFilteredData.length; i++) {
    var currentSport = sportFilteredData[i];
    if (currentSport in sportFrequency) {
      sportFrequency[currentSport] += 1;
    } else {
      sportFrequency[currentSport] = 1;
    }
  }
  var sportEvents = Object.keys(sportFrequency);
  var sportEventCount= Object.values(sportFrequency);
  console.log((sportEvents))
  console.log(sportEventCount)

  return sportFrequency


  // separate sport Frequency into keys and values

  function init() {
    var trace = {
      x: sportEvent2016,
      y: sportEventCount2016,
      type: "bar",
      marker: { color: "#193050" },
    };

    var data = [trace];

    layout = {
      title: "USA Olympic Gold Medals by Sport (1976-2016)",
      //    barmode: 'stack'
    };
    Plotly.newPlot("plot", data, layout);
  }

  // Call updatePlotly() when a change takes place to the DOM
  d3.selectAll("#selDataset").on("change", updatePlotly);

  // This function is called when a dropdown menu item is selected
  function updatePlotly() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");

    const filteredByYear = filterSportDataByYear(allSportData, dataSet)
    // Initialize x and y arrays
    var x = filteredByYear;
    var y = [];

    if (dataset === "1976") {
      x = sportEvent1976;
      y = sportEventCount1976;
    }
    if (dataset === "All") {
      x = sportEventsAll;
      y = sportEventCountAll;
    }
    if (dataset === "1984") {
      x = sportEvent1984;
      y = sportEventCount1984;
    }
    if (dataset === "1988") {
      x = sportEvent1988;
      y = sportEventCount1988;
    }
    if (dataset === "1992") {
      x = sportEvent1992;
      y = sportEventCount1992;
    }
    if (dataset === "1996") {
      x = sportEvent1996;
      y = sportEventCount1996;
    }
    if (dataset === "2000") {
      x = sportEvent2000;
      y = sportEventCount2000;
    }
    if (dataset === "2004") {
      x = sportEvent2004;
      y = sportEventCount2004;
    }
    if (dataset === "2008") {
      x = sportEvent2008;
      y = sportEventCount2008;
    }
    if (dataset === "2016") {
      x = sportEvent2016;
      y = sportEventCount2016;
    }

    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
  }

  init();
  return sportFrequency;
});
filterSportDataByYear();
