// function buildPlot(){
  d3.csv("../Resources/olympics.csv").then(function(data) {
   // console.log(data);


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


//console.log(female2016)

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
var olympics1976 = [male1976, female1976]
var olympics1984 = [male1984, female1984]
var olympics1988 = [male1988, female1988]
var olympics1992 = [male1992, female1992]
var olympics1996 = [male1996, female1996]
var olympics2000 = [male2000, female2000]
var olympics2004 = [male2004, female2004]
var olympics2008 = [male2008, female2008]
var olympics2016 = [male2016, female2016]



console.log(olympics1976)

});





