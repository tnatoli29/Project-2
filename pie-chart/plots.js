 // Part 5 - Working Pie Chart
function init() {
  //Grab the dropdown select element
  var dropdown = d3.select("#selDataset");

  d3.csv("../Resources/olympics.csv").then(function(data) {
    //console.log(data[0]);
    var gender = data.map(d => d.sex);
    //console.log(gender)

    var years = data.map(d => d.year);
    var uniYears = [...new Set(years)];
   // console.log(uniYears);

    uniYears.forEach((sample) => {
      dropdown
        .append("option")
        .text(sample)
        .property("value", sample);
    });
    //Build the charts with the first sample
    var firstSample = uniYears[0];
    buildCharts(firstSample);
    });
  }

function buildCharts(sample) {
// Construct pie chart
  d3.csv("../Resources/olympics.csv").then((data) => {
    var years = data.map(d => d.year);
    var uniYears = [...new Set(years)];

    var male = data.filter(d => d.sex === "male").length
    //console.log(male)

    var female = data.filter(d => d.sex === "female").length;
    //console.log(female)


 var trace1 = {
   labels: ["Male", "Female"],
   values: [male, female],
   type: 'pie',
   textinfo: "label+percent"
 };

 var data = [trace1];

 var layout = {
  title: "Male/Female Athletes",
};

Plotly.newPlot("plot", data, layout);

});
}
function optionChanged(newSample) {
  // Change data in charts and graphs based on selected Subject ID
  buildCharts(newSample);
}


init();

