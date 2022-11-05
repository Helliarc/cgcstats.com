/*

This file contains the class and configuration data to build a Chart from data stored on the server Cache.  
All data is prequeried on the server to avoid SQL injection at this time.

*/

class ChartCGCBNB {
  constructor(name, button, object){
    this.name = name;
    this.button = button;
    this.object = object;

    // This object is the parsed JSON retrieved from Server, initialized in this.loadData()
    this.dataJSON = [];
    // These 2 objects are the data that feed the graph, they are initialized in this.loadData();
    this.labelsMP = [];
    this.dataMP = [];
  
  // These two objects configure the Chart and are initialized in this.chartConfig();
  this.data = {};
  this.config = {};
}

// Load data is called to load the JSON Cache from the Server and convert the data to useful objects.  WILL IMPLEMENT CONTROLS TO PREVENT EXCESSIVE DATA REQUESTS.
loadData(){ 
  if (Object.keys(this.dataMP) > 1){
    this.chartConfig();
  }else{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "CGCStats/hourCGCBNB.txt", false); //This line is different in each Class as it references the Server Cache location for the reference data
    xhr.send();
    if (xhr.status==200){
      this.dataJSON = JSON.parse(xhr.responseText);
      this.labelsMP = this.dataJSON.map(function(e){ return e[1] });
      this.dataMP   = this.dataJSON.map(function(e){ return e[2] });

      this.chartConfig();
    }
  }
}

// The Chart Configuration is set-up and initialized to the object HERE, these objects are amended and altered to suit design requirements to display the Charts.
chartConfig(){
  this.data = {
    labels: this.labelsMP,
    datasets: [{
      label: 'Catgirl Coin price in $BNB',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: this.dataMP,
    }]
  };

  this.config = {
    type: 'line',
    data: this.data,
    options: {
      scales: {
        yAxis: {
          // suggestedMin: 0.00000000001,
          // suggestedMax: 0.01,
        },
        xAxis: {

        }
      },
    },
  };
}
  }
  
  let chartCGCBNB = new ChartCGCBNB('chartCGCBNB', 'buttonCGCBNB');