 // Part 5 - Working Pie Chart

d3.csv("../Resources/olympics.csv").then(function(data) {
  //console.log(data[0]);
  //console.log(data[0].sex)


 function genderCount(obj) {
    return obj.reduce((acc, data) => {
        if (data.sex === 'male') {
            acc.male++;
        }
        else {
            acc.female++;
        }
        return acc;
    }, {male: 0, female: 0});
}
console.log(genderCount(data))


 var trace1 = {
   labels: ["Male", "Female"],
   values: [553, 482],
   type: 'pie'
 };

 var data = [trace1];

 var layout = {
  title: "Male/Female Athletes",
};

Plotly.newPlot("plot", data, layout);

});
