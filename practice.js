// function buildPlot(){
    d3.csv("./Resources/olympics.csv").then(function(data) {
        console.log(data);

        var years=[2001,2003,2004,2001,2003,2004];
        console.log(years.length);
        var filteredYears= years.filter(year => year.length > 3 )
        console.log(filteredYears)

        console.log(years[2])

    });
       

    