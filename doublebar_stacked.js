

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
    

    // const olympics_1976=data.filter(d=>d.year==="1976");
    // var sport_1976=olympics_1976.map(data=>data.sport)
    // console.log(sport_1976)

    // function wordCount(myString) {
    //   // Convert string to an array of words
    //   var stringArray = sport_1976
    
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

    //   var sportEvent1976 = Object.keys(wordFrequency);
    //   var sportEventCount1976= Object.values(wordFrequency);
    //   console.log((sportEvent1976))
    //   console.log(sportEventCount1976)     
      
    //   var trace1 = {
    //     x: sportEvent1976,
    //     y: sportEventCount1976 ,
    //     type: "bar"
    //   };
      
    //   var data = [trace1];
      
    //   var layout = {
    //     title: "'Bar' Chart"
    //   };
      
    //   Plotly.newPlot("plot", data, layout);

    //   return wordFrequency;
    // }

    // wordCount("I yam what I yam and always will be what I yam");
    
     
    const olympics_1984=data.filter(d=>d.year==="1984");
    var sport_1984=olympics_1984.map(data=>data.sport)
    console.log(sport_1984)

    // function wordCount(myString) {
    //   // Convert string to an array of words
    //   var stringArray = sport_1984
    
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

    //   var sportEvent1984 = Object.keys(wordFrequency);
    //   var sportEventCount1984= Object.values(wordFrequency);
    //   console.log((sportEvent1984))
    //   console.log(sportEventCount1984)     
      
    //   var trace1 = {
    //     x: sportEvent1984,
    //     y: sportEventCount1984 ,
    //     type: "bar"
    //   };
      
    //   var data = [trace1];
      
    //   var layout = {
    //     title: "'Bar' Chart"
    //   };
      
    //   Plotly.newPlot("plot", data, layout);

    //   return wordFrequency;
    // }

    // wordCount("I yam what I yam and always will be what I yam");

    const olympics_1988=data.filter(d=>d.year==="1988");
    var sport_1988=olympics_1988.map(data=>data.sport)
    console.log(sport_1988)

    function wordCount(myString) {
      // Convert string to an array of words
      var stringArray = sport_1988
    
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

      var sportEvent1988 = Object.keys(wordFrequency);
      var sportEventCount1988= Object.values(wordFrequency);
      console.log((sportEvent1988))
      console.log(sportEventCount1988)     
      
      var trace1 = {
        x: sportEvent1988,
        y: sportEventCount1988 ,
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

    const olympics_1992=data.filter(d=>d.year==="1992");
    var sport_1992=olympics_1992.map(data=>data.sport)
    console.log(sport_1992)

    // function wordCount(myString) {
    //   // Convert string to an array of words
    //   var stringArray = sport_1992
    
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

    //   var sportEvent1992 = Object.keys(wordFrequency);
    //   var sportEventCount1992= Object.values(wordFrequency);
    //   console.log((sportEvent1992))
    //   console.log(sportEventCount1992)     
      
    //   var trace1 = {
    //     x: sportEvent1992,
    //     y: sportEventCount1992 ,
    //     type: "bar"
    //   };
      
    //   var data = [trace1];
      
    //   var layout = {
    //     title: "'Bar' Chart"
    //   };
      
    //   Plotly.newPlot("plot", data, layout);

    //   return wordFrequency;
    // }

    // wordCount("I yam what I yam and always will be what I yam");


    const olympics_1996=data.filter(d=>d.year==="1996");
    var sport_1996=olympics_1996.map(data=>data.sport)
    console.log(sport_1996)

    // function wordCount(myString) {
    //   // Convert string to an array of words
    //   var stringArray = sport_1996
    
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

    //   var sportEvent1996 = Object.keys(wordFrequency);
    //   var sportEventCount1996= Object.values(wordFrequency);
    //   console.log((sportEvent1996))
    //   console.log(sportEventCount1996)     
      
    //   var trace1 = {
    //     x: sportEvent1996,
    //     y: sportEventCount1996 ,
    //     type: "bar"
    //   };
      
    //   var data = [trace1];
      
    //   var layout = {
    //     title: "'Bar' Chart"
    //   };
      
    //   Plotly.newPlot("plot", data, layout);

    //   return wordFrequency;
    // }

    // wordCount("I yam what I yam and always will be what I yam");
    
    const olympics_2000=data.filter(d=>d.year==="2000");
    var sport_2000=olympics_2000.map(data=>data.sport)
    console.log(sport_2000)


    // function wordCount(myString) {
    //   // Convert string to an array of words
    //   var stringArray = sport_2000
    
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

    //   var sportEvent2000 = Object.keys(wordFrequency);
    //   var sportEventCount2000= Object.values(wordFrequency);
    //   console.log((sportEvent2000))
    //   console.log(sportEventCount2000)     
      
    //   var trace1 = {
    //     x: sportEvent2000,
    //     y: sportEventCount2000 ,
    //     type: "bar"
    //   };
      
    //   var data = [trace1];
      
    //   var layout = {
    //     title: "'Bar' Chart"
    //   };
      
    //   Plotly.newPlot("plot", data, layout);

    //   return wordFrequency;
    // }

    // wordCount("I yam what I yam and always will be what I yam");

    const olympics_2004=data.filter(d=>d.year==="2004");
    var sport_2004=olympics_2004.map(data=>data.sport)
    console.log(sport_2004)


    // function wordCount(myString) {
    //   // Convert string to an array of words
    //   var stringArray = sport_2004
    
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

    //   var sportEvent2004 = Object.keys(wordFrequency);
    //   var sportEventCount2004= Object.values(wordFrequency);
    //   console.log((sportEvent2004))
    //   console.log(sportEventCount2004)     
      
    //   var trace1 = {
    //     x: sportEvent2004,
    //     y: sportEventCount2004 ,
    //     type: "bar"
    //   };
      
    //   var data = [trace1];
      
    //   var layout = {
    //     title: "'Bar' Chart"
    //   };
      
    //   Plotly.newPlot("plot", data, layout);

    //   return wordFrequency;
    // }

    // wordCount("I yam what I yam and always will be what I yam");


    const olympics_2008=data.filter(d=>d.year==="2008");
    var sport_2008=olympics_2008.map(data=>data.sport)
    console.log(sport_2008)

    // function wordCount(myString) {
    //   // Convert string to an array of words
    //   var stringArray = sport_2008
    
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

    //   var sportEvent2008 = Object.keys(wordFrequency);
    //   var sportEventCount2008= Object.values(wordFrequency);
    //   console.log((sportEvent2008))
    //   console.log(sportEventCount2008)     
      
    //   var trace1 = {
    //     x: sportEvent2008,
    //     y: sportEventCount2008 ,
    //     type: "bar"
    //   };
      
    //   var data = [trace1];
      
    //   var layout = {
    //     title: "'Bar' Chart"
    //   };
      
    //   Plotly.newPlot("plot", data, layout);

    //   return wordFrequency;
    // }

    // wordCount("I yam what I yam and always will be what I yam");

    const olympics_2016=data.filter(d=>d.year==="2016");
    var sport_2016=olympics_2016.map(data=>data.sport)
    console.log(sport_2016)

    function wordCount(myString) {
      // Convert string to an array of words
      var stringArray = sport_2016
    
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

      var sportEvent2016 = Object.keys(wordFrequency);
      var sportEventCount2016= Object.values(wordFrequency);
      console.log((sportEvent2016))
      console.log(sportEventCount2016)     
      
      var trace1 = {
        x: sportEvent2016,
        y: sportEventCount2016 ,
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

    const menOlympics2016=olympics_2016.filter(d=>d.sex==="male");
    const womenOlympics2016=olympics_2016.filter(d=>d.sex==="female");
    // console.log(womenOlympics2016)
   
    var medal= data.map(data=>data.medal)





  })
