

// function buildPlot(){
  d3.csv("./Resources/olympicscjb.csv").then(function(data) {
    // console.log(data);

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
      
      var trace1 = {
        x: sportEvent1976,
        y: sportEventCount1976 ,
        type: "bar"
      };
      
      var data = [trace1];
      
      var layout = {
        title: "'Bar' Chart"
      };
      
      Plotly.newPlot("plot", data, layout);

      return wordFrequency;
    }

    wordCount("I yam what I yam and always will be what I yam");
    
     
    const olympics_1984=data.filter(d=>d.year==="1984");
    var sport_1984=olympics_1984.map(data=>data.sport)
    console.log(sport_1984)

    const olympics_1988=data.filter(d=>d.year==="1988");
    var sport_1988=olympics_1988.map(data=>data.sport)
    console.log(sport_1988)

    const olympics_1992=data.filter(d=>d.year==="1992");
    var sport_1992=olympics_1992.map(data=>data.sport)
    console.log(sport_1992)

    const olympics_1996=data.filter(d=>d.year==="1996");
    var sport_1996=olympics_1996.map(data=>data.sport)
    console.log(sport_1996)
    
    const olympics_2000=data.filter(d=>d.year==="2000");
    var sport_2000=olympics_2000.map(data=>data.sport)
    console.log(sport_2000)

    const olympics_2004=data.filter(d=>d.year==="2004");
    var sport_2004=olympics_2004.map(data=>data.sport)
    console.log(sport_2004)

    const olympics_2008=data.filter(d=>d.year==="2008");
    var sport_2008=olympics_2008.map(data=>data.sport)
    console.log(sport_2008)

    const olympics_2016=data.filter(d=>d.year==="2016");
    var sport_2016=olympics_2016.map(data=>data.sport)
    console.log(sport_2016)

    const menOlympics2016=olympics_2016.filter(d=>d.sex==="male");
    const womenOlympics2016=olympics_2016.filter(d=>d.sex==="female");
    console.log(womenOlympics2016)
   
    var medal= data.map(data=>data.medal)





  })
