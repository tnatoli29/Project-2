

// function buildPlot(){
  d3.csv("./Resources/olympicscjb.csv").then(function(data) {
    console.log(data);

    var years=data.map(data=>data.year)
    // console.log(years);

    function yearsUnique(year){
      var uniqueYears = [];
      
      // Loop through array values
      for(i=0; i < year.length; i++){
          if(uniqueYears.indexOf(year[i]) === -1) {
            uniqueYears.push(year[i]);
          }
      }
      return uniqueYears;

  }
  var years = data.map(data=>data.year)
  var singleYears = yearsUnique(years);
  // console.log(singleYears);

  function sportsUnique(event){
    var uniqueSports = [];
    
    // Loop through array values
    for(i=0; i < sport.length; i++){
        if(uniqueSports.indexOf(sport[i]) === -1) {
          uniqueSports.push(sport[i]);
        }
    }
    return uniqueSports;

}
  var sport=data.map(data=>data.sport)
  var uniqueSports = sportsUnique(sport);
  // console.log(uniqueSports);
    
    
 
    // var sex = data.map(data=>data.sex)

    const female= data.filter(d=>d.sex==="female")

    const male= data.filter(d=>d.sex==="male")

    
   
    // function wordCount(myString) {
    //   // Convert string to an array of words
    //   var stringArray = sport
    
    //   // An object to hold word frequency
    //   var wordFrequency = {};
    
    //   // Iterate through the array
    //   for (var i = 0; i < stringArray.length; i++) {
    //     var currentWord = stringArray[i];
    //     // If the word has been seen before...
    //     if (currentWord in wordFrequency) {
    //       // Add one to the counter
    //       wordFrequency[currentWord] += 1;
    //     }
    //     else {
    //       // Set the counter at 1
    //       wordFrequency[currentWord] = 1;
    //     }
    //   }
    //   console.log(wordFrequency);
    //   return wordFrequency;
    //   console.log(wordFrequency);
    // }
    // wordCount("I yam what I yam and always will be what I yam");
    

    const olympics_1976=data.filter(d=>d.year==="1976");
    var sport_1976=olympics_1976.map(data=>data.sport)
    console.log(sport_1976)

    function wordCount(myString) {
      // Convert string to an array of words
      var stringArray = sport_1976
    
      // An object to hold word frequency
      var wordFrequency = {};
    
      // Iterate through the array
      for (var i = 0; i < stringArray.length; i++) {
        var currentWord = stringArray[i];
        // If the word has been seen before...
        if (currentWord in wordFrequency) {
          // Add one to the counter
          wordFrequency[currentWord] += 1;
        }
        else {
          // Set the counter at 1
          wordFrequency[currentWord] = 1;
        }
      }
      console.log(wordFrequency);

      var sportEvent1976 = Object.keys(wordFrequency);
      var sportEventCount1976= Object.values(wordFrequency);
      console.log((sportEvent1976))
      console.log(sportEventCount1976)


      
  //   var trace1 = {
  //     x: sportEvent1976,
  //     y: sportEventCount1976,
  //     // text: data.map(row => row.greekName),
  //     name: "Greek",
  //     type: "bar"
  //   };
  //   // var trace1 = {
  //   //   x: years,
  //   //   y: sport,
  //   //   name: 'Dog',
  //   //   type: 'bar'
  //   // };
    
  //   // var trace2 = {
  //   //   x: sport,
  //   //   y: womenOlympics2016,
  //   //   name: 'cow',
  //   //   type: 'bar'
  //   // };


  //   var data = [trace1];
  //   // var layout = {barmode: 'stack'}; 

  //   Plotly.newPlot('plot', data);

  // }
     
     
      return wordFrequency;
    }

    wordCount("I yam what I yam and always will be what I yam");
    
     
    const olympics_1984=data.filter(d=>d.year==="1984");
    const olympics_1988=data.filter(d=>d.year==="1988");
    const olympics_1992=data.filter(d=>d.year==="1992");
    const olympics_1996=data.filter(d=>d.year==="1996");
    const olympics_2000=data.filter(d=>d.year==="2000");
    const olympics_2004=data.filter(d=>d.year==="2004");
    const olympics_2008=data.filter(d=>d.year==="2008");
    const olympics_2016=data.filter(d=>d.year==="2016");
    

    const menOlympics2016=olympics_2016.filter(d=>d.sex==="male");
    const womenOlympics2016=olympics_2016.filter(d=>d.sex==="female");
    console.log(womenOlympics2016)
   
    var medal= data.map(data=>data.medal)





  })
