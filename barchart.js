
function buildPlot(){
  d3.csv("./Resources/olympicscjb.csv").then(function(data) {
   // console.log(data);
    // console.log(years);  
    var sport=data.map(data=>data.sport)
    var wordFrequencyAll = {};
    function allYears() {
      // Convert string to an array of words
      var arrayAllyrs = sport
      // Iterate through the array
      for (var i = 0; i < arrayAllyrs.length; i++) {
        var currentWordAll = arrayAllyrs[i];
        // If the word has been seen before...
        if (currentWordAll in wordFrequencyAll) {
          // Add one to the counter
          wordFrequencyAll[currentWordAll] += 1;
        }
        else {
          // Set the counter at 1
          wordFrequencyAll[currentWordAll] = 1;
        }
      }
      // console.log(wordFrequencyAll);
      return wordFrequencyAll;
      // console.log(wordFrequencyAll);
    }
    allYears();
    var sportEventsAll = Object.keys(wordFrequencyAll);
    var sportEventCountAll= Object.values(wordFrequencyAll);
    console.log((sportEventsAll))
    console.log(sportEventCountAll)

    const olympics_1976=data.filter(d=>d.year==="1976");
    var sport_1976=olympics_1976.map(data=>data.sport)
    // console.log(sport_1976)

    var wordFrequency1976 = {};
    function arrayYear1976() {
      // Convert string to an array of words
      var stringArray1976 = sport_1976
      // Iterate through the array
      for (var i = 0; i < stringArray1976.length; i++) {
        var currentWord1976 = stringArray1976[i];
        // If the word has been seen before...
        if (currentWord1976 in wordFrequency1976) {
          // Add one to the counter
          wordFrequency1976[currentWord1976] += 1;
        }
        else {
          // Set the counter at 1
          wordFrequency1976[currentWord1976] = 1;
        }
      }
      // console.log(wordFrequency1976);

      return wordFrequency1976;
    }
    arrayYear1976();
    
    var sportEvent1976 = Object.keys(wordFrequency1976);
    var sportEventCount1976= Object.values(wordFrequency1976);
    console.log((sportEvent1976))
    console.log(sportEventCount1976)  

    const olympics_1984=data.filter(d=>d.year==="1984");
    var sport_1984=olympics_1984.map(data=>data.sport)
   
    var wordFrequency1984 = {};
   
    function arrayYear1984() {
      // Convert string to an array of words
      var stringArray1984 = sport_1984
      // Iterate through the array
      for (var i = 0; i < stringArray1984.length; i++) {
        var currentWord1984 = stringArray1984[i];
        // If the word has been seen before...
        if (currentWord1984 in wordFrequency1984) {
          // Add one to the counter
          wordFrequency1984[currentWord1984] += 1;
        }
        else {
          // Set the counter at 1
          wordFrequency1984[currentWord1984] = 1;
        }
      }
      // console.log(wordFrequency1984);    
      return wordFrequency1984;
    }
    arrayYear1984();

    var sportEvent1984 = Object.keys(wordFrequency1984);
    var sportEventCount1984= Object.values(wordFrequency1984);
    console.log((sportEvent1984))
    console.log(sportEventCount1984) 

    const olympics_1988=data.filter(d=>d.year==="1988");
    var sport_1988=olympics_1988.map(data=>data.sport)

   var wordFrequency1988 = {};

    function arrayYear1988() {
      // Convert string to an array of words
      var stringArray1988 = sport_1988

      // Iterate through the array
      for (var i = 0; i < stringArray1988.length; i++) {
        var currentWord1988 = stringArray1988[i];
        // If the word has been seen before...
        if (currentWord1988 in wordFrequency1988) {
          // Add one to the counter
          wordFrequency1988[currentWord1988] += 1;
        }
        else {
          // Set the counter at 1
          wordFrequency1988[currentWord1988] = 1;
        }
      }
      // console.log(wordFrequency1988);  
      return wordFrequency1988;
    }
    arrayYear1988();

    var sportEvent1988 = Object.keys(wordFrequency1988);
    var sportEventCount1988= Object.values(wordFrequency1988);
    console.log((sportEvent1988))
    console.log(sportEventCount1988)   

    const olympics_1992=data.filter(d=>d.year==="1992");
    var sport_1992=olympics_1992.map(data=>data.sport)
    // console.log(sport_1992)

    var wordFrequency1992 = {};

    function arrayYear1992() {
      // Convert string to an array of words
      var stringArray1992 = sport_1992
    
      // Iterate through the array
      for (var i = 0; i < stringArray1992.length; i++) {
        var currentWord1992 = stringArray1992[i];
        // If the word has been seen before...
        if (currentWord1992 in wordFrequency1992) {
          // Add one to the counter
          wordFrequency1992[currentWord1992] += 1;
        }
        else {
          // Set the counter at 1
          wordFrequency1992[currentWord1992] = 1;
        }
      }
      // console.log(wordFrequency1992);  
      return wordFrequency1992;
    }
    arrayYear1992();

    var sportEvent1992 = Object.keys(wordFrequency1992);
    var sportEventCount1992= Object.values(wordFrequency1992);
    console.log((sportEvent1992))
    console.log(sportEventCount1992)     

    const olympics_1996=data.filter(d=>d.year==="1996");
    var sport_1996=olympics_1996.map(data=>data.sport)
    // console.log(sport_1996)

    var wordFrequency1996 = {};

    function arrayYear1996() {
      // Convert string to an array of words
      var stringArray1996 = sport_1996
    
      // Iterate through the array
      for (var i = 0; i < stringArray1996.length; i++) {
        var currentWord1996 = stringArray1996[i];
        // If the word has been seen before...
        if (currentWord1996 in wordFrequency1996) {
          // Add one to the counter
          wordFrequency1996[currentWord1996] += 1;
        }
        else {
          // Set the counter at 1
          wordFrequency1996[currentWord1996] = 1;
        }
      }
      // console.log(wordFrequency1996);  
      return wordFrequency1996;
    }
    arrayYear1996();
    
    var sportEvent1996 = Object.keys(wordFrequency1996);
    var sportEventCount1996= Object.values(wordFrequency1996);
    console.log((sportEvent1996))
    console.log(sportEventCount1996)   
   
   
    const olympics_2000=data.filter(d=>d.year==="2000");
    var sport_2000=olympics_2000.map(data=>data.sport)
    // console.log(sport_2000)

    var wordFrequency2000 = {};

    function arrayYear2000() {
      // Convert string to an array of words
      var stringArray2000 = sport_2000
      // Iterate through the array
      for (var i = 0; i < stringArray2000.length; i++) {
        var currentWord2000 = stringArray2000[i];
        // If the word has been seen before...
        if (currentWord2000 in wordFrequency2000) {
          // Add one to the counter
          wordFrequency2000[currentWord2000] += 1;
        }
        else {
          // Set the counter at 1
          wordFrequency2000[currentWord2000] = 1;
        }
      }
      // console.log(wordFrequency2000);    
      return wordFrequency2000;
    }
    arrayYear2000();

    var sportEvent2000 = Object.keys(wordFrequency2000);
    var sportEventCount2000= Object.values(wordFrequency2000);
    console.log((sportEvent2000))
    console.log(sportEventCount2000)  

    const olympics_2004=data.filter(d=>d.year==="2004");
    var sport_2004=olympics_2004.map(data=>data.sport)
    // console.log(sport_2004)

    var wordFrequency2004 = {};
    
    function arrayYear2004() {
      // Convert string to an array of words
      var stringArray2004 = sport_2004
      // Iterate through the array
      for (var i = 0; i < stringArray2004.length; i++) {
        var currentWord2004 = stringArray2004[i];
        // If the word has been seen before...
        if (currentWord2004 in wordFrequency2004) {
          // Add one to the counter
          wordFrequency2004[currentWord2004] += 1;
        }
        else {
          // Set the counter at 1
          wordFrequency2004[currentWord2004] = 1;
        }
      }
      // console.log(wordFrequency2004);
         
  return wordFrequency2004;
    }
    arrayYear2004();

    var sportEvent2004 = Object.keys(wordFrequency2004);
    var sportEventCount2004= Object.values(wordFrequency2004);
    console.log((sportEvent2004))
    console.log(sportEventCount2004)  

    const olympics_2008=data.filter(d=>d.year==="2008");
    var sport_2008=olympics_2008.map(data=>data.sport)
    // console.log(sport_2008)

    var wordFrequency2008 = {};
    
    function arrayYear2008() {
      // Convert string to an array of words
      var stringArray2008 = sport_2008
      // Iterate through the array
      for (var i = 0; i < stringArray2008.length; i++) {
        var currentWord2008 = stringArray2008[i];
        // If the word has been seen before...
        if (currentWord2008 in wordFrequency2008) {
          // Add one to the counter
          wordFrequency2008[currentWord2008] += 1;
        }
        else {
          // Set the counter at 1
          wordFrequency2008[currentWord2008] = 1;
        }
      }
      // console.log(wordFrequency2008);   
      return wordFrequency2008;
    }
    arrayYear2008();

 var sportEvent2008 = Object.keys(wordFrequency2008);
 var sportEventCount2008= Object.values(wordFrequency2008);
 console.log((sportEvent2008))
 console.log(sportEventCount2008) 

    const olympics_2016=data.filter(d=>d.year==="2016");
    var sport_2016=olympics_2016.map(data=>data.sport)
    // console.log(sport_2016)

    var wordFrequency2016 = {}

    function arrayYear2016() {

      // Convert string to an array of words
      var stringArray2016 = sport_2016
      // Iterate through the array
      for (var i = 0; i < stringArray2016.length; i++) {
        var currentWord2016 = stringArray2016[i];
        // If the word has been seen before...
        if (currentWord2016 in wordFrequency2016) {
          // Add one to the counter
          wordFrequency2016[currentWord2016] += 1;
        }
        else {
          // Set the counter at 1
          wordFrequency2016[currentWord2016] = 1;
        }
      }
      // console.log(wordFrequency2016); 
      return wordFrequency2016;
    }
    arrayYear2016();

    console.log(wordFrequency2016)
    var sportEvent2016 = Object.keys(wordFrequency2016);
    var sportEventCount2016= Object.values(wordFrequency2016);
    console.log((sportEvent2016))
      console.log(sportEventCount2016)  

    // use added numbers
    function init() {
      data = [{
        x: sportEvent2016,
        y: sportEventCount2016,
        type: "bar",
        marker:{color: '#193050'}

       }];
    
      
       layout={
         title:"USA Olympic Gold Medals by Sport (1976-2016)"
       }
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
    
      // Initialize x and y arrays
      var x = [];
      var y = [];
      var title=[];
    
      if (dataset === '1976') {
        x = sportEvent1976;
        y = sportEventCount1976;
        title="Olympic Gold Medals 1976"
      }
      if (dataset === 'All') {
        x = sportEventsAll;
        y = sportEventCountAll;
      }
      if (dataset === '1984') {
        x = sportEvent1984;
        y = sportEventCount1984;
      }
      if (dataset === '1988') {
        x = sportEvent1988;
        y = sportEventCount1988;
      }
      if (dataset === '1992') {
        x = sportEvent1992;
        y = sportEventCount1992;
      }
      if (dataset === '1996') {
        x = sportEvent1996;
        y = sportEventCount1996;
      }
      if (dataset === '2000') {
        x = sportEvent2000;
        y = sportEventCount2000;
      }
      if (dataset === '2004') {
        x = sportEvent2004;
        y = sportEventCount2004;
      }
      if (dataset === '2008') {
        x = sportEvent2008;
        y = sportEventCount2008;
      }
      if (dataset === '2016') {
        x = sportEvent2016;
        y = sportEventCount2016;
      }
    
      // Note the extra brackets around 'x' and 'y'
      Plotly.restyle("plot", "x", [x]);
      Plotly.restyle("plot", "y", [y]);
      Plotly.restyle("plot", "title", [title]);
    }
    
    init();
    
  });
}

buildPlot()