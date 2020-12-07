//// function buildPlot(){
d3.csv("../Resources/olympics.csv").then(function(data) {
   //console.log(data);


const olympics_1976=data.filter(d=>d.year==="1976");
const olympics_1984=data.filter(d=>d.year==="1984");
const olympics_1988=data.filter(d=>d.year==="1988");
const olympics_1992=data.filter(d=>d.year==="1992");
const olympics_1996=data.filter(d=>d.year==="1996");
const olympics_2000=data.filter(d=>d.year==="2000");
const olympics_2004=data.filter(d=>d.year==="2004");
const olympics_2008=data.filter(d=>d.year==="2008");
const olympics_2016=data.filter(d=>d.year==="2016");
//console.log(olympics_2008)

const male1976 = olympics_1976.filter(d => d.sex === "male")
const female1976 = olympics_1976.filter(d => d.sex === "female")
const male1984 = olympics_1984.filter(d => d.sex === "male")
const female1984 = olympics_1984.filter(d => d.sex === "female")
const male1988 = olympics_1988.filter(d => d.sex === "male")
const female1988 = olympics_1988.filter(d => d.sex === "female")
const male1992 = olympics_1992.filter(d => d.sex === "male")
const female1992 = olympics_1992.filter(d => d.sex === "female")
const male1996 = olympics_1996.filter(d => d.sex === "male")
const female1996 = olympics_1996.filter(d => d.sex === "female")
const male2000 = olympics_2000.filter(d => d.sex === "male")
const female2000 = olympics_2000.filter(d => d.sex === "female")
const male2004 = olympics_2004.filter(d => d.sex === "male")
const female2004 = olympics_2004.filter(d => d.sex === "female")
const male2008 = olympics_2008.filter(d => d.sex === "male")
const female2008 = olympics_2008.filter(d => d.sex === "female")
const male2016 = olympics_2016.filter(d => d.sex === "male")
const female2016 = olympics_2016.filter(d => d.sex === "female")
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

total_olympics = {1976: olympics1976, 1984: olympics1984, 1988: olympics1988, 1992: olympics1992, 1996: olympics1996, 2000: olympics2000, 2004: olympics2004, 2008: olympics2008, 2016: olympics2016};
//console.log(total_olympics);


// set the dimensions and margins of the graph
var width = 450
    height = 450
    margin = 40

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin


// append the svg object to the div called 'my_dataviz'
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


// create 2 data_set
var data1 = olympics1976;
var data2 = olympics1984;
var data3 = olympics1988;
var data4 = olympics1992;
var data5 = olympics1996;
var data6 = olympics2000;
var data7 = olympics2004;
var data8 = olympics2008;
var data9 = olympics2016;
//console.log(data1)

// set the color scale
var color = d3.scaleOrdinal()
  .domain(["a", "b", "c", "d", "e", "f"])
  .range(d3.schemeDark2);

// A function that create / update the plot for a given variable:
function update(data) {

  // Compute the position of each group on the pie:
  var pie = d3.pie()
    .value(function(d) {return d.value; })
    .sort(function(a, b) { console.log(a) ; return d3.ascending(a.key, b.key);} )
    // This make sure that group order remains the same in the pie chart
  var data_ready = pie(d3.entries(data))

  // map to data
  var u = svg.selectAll("path")
    .data(data_ready)

 // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  u
    .enter()
    .append('path')
    .merge(u)
    .transition()
    .duration(1000)
    .attr('d', d3.arc()
      .innerRadius(0)
      .outerRadius(radius)
    )
    .attr('fill', function(d){ return(color(d.data.key)) })
    .attr("stroke", "white")
    .style("stroke-width", "2px")
    .style("opacity", 1)

  // remove the group that is not present anymore
  u
    .exit()
    .remove()

}

// Initialize the plot with the first dataset
update(data1)
});
