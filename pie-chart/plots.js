//// function buildPlot(){
d3.csv("../Resources/olympics.csv").then(function(data) {
   //console.log(data);


var olympics_1976=data.filter(d=>d.year==="1976");
var olympics_1984=data.filter(d=>d.year==="1984");
var olympics_1988=data.filter(d=>d.year==="1988");
var olympics_1992=data.filter(d=>d.year==="1992");
var olympics_1996=data.filter(d=>d.year==="1996");
var olympics_2000=data.filter(d=>d.year==="2000");
var olympics_2004=data.filter(d=>d.year==="2004");
var olympics_2008=data.filter(d=>d.year==="2008");
var olympics_2016=data.filter(d=>d.year==="2016");
//console.log(olympics_2008)

var male1976 = olympics_1976.filter(d => d.sex === "male")
var female1976 = olympics_1976.filter(d => d.sex === "female")
var male1984 = olympics_1984.filter(d => d.sex === "male")
var female1984 = olympics_1984.filter(d => d.sex === "female")
var male1988 = olympics_1988.filter(d => d.sex === "male")
var female1988 = olympics_1988.filter(d => d.sex === "female")
var male1992 = olympics_1992.filter(d => d.sex === "male")
var female1992 = olympics_1992.filter(d => d.sex === "female")
var male1996 = olympics_1996.filter(d => d.sex === "male")
var female1996 = olympics_1996.filter(d => d.sex === "female")
var male2000 = olympics_2000.filter(d => d.sex === "male")
var female2000 = olympics_2000.filter(d => d.sex === "female")
var male2004 = olympics_2004.filter(d => d.sex === "male")
var female2004 = olympics_2004.filter(d => d.sex === "female")
var male2008 = olympics_2008.filter(d => d.sex === "male")
var female2008 = olympics_2008.filter(d => d.sex === "female")
var male2016 = olympics_2016.filter(d => d.sex === "male")
var female2016 = olympics_2016.filter(d => d.sex === "female")
//console.log(male1976)


// create 2 data_set
var olympics1976 = [male1976.length, female1976.length];
var olympics1984 = [male1984.length, female1984.length];
var olympics1988 = [male1988.length, female1988.length];
var olympics1992 = [male1992.length, female1992.length];
var olympics1996 = [male1996.length, female1996.length];
var olympics2000 = [male2000.length, female2000.length];
var olympics2004 = [male2004.length, female2004.length];
var olympics2008 = [male2008.length, female2008.length];
var olympics2016 = [male2016.length, female2016.length];
//console.log(olympics1976);


var labels = ["Male", "Female"]

function init() {
  var data = [{
    values: olympics1976,
    labels: labels,
    type: "pie"
  }];

    var layout = {
     height: 600,
     width: 800
  };

 Plotly.newPlot("pie", data, layout);
}
// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable

  // Initialize an empty array for the country's data
  var data = [];

  if (data == 'olympics1976') {
      data = olympics1976;
  }
  else if (data == 'olympics1984') {
      data = olympics1984;
  }
  else if (data == 'olympics1988') {
      data = olympics1988;
  }
  // Call function to update the chart
  updatePlotly(data);
}
// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

init();
});



