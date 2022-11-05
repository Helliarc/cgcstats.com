const charts = [chartCGCUSD, chartCGCBNB, chartCGCLock, chartS1PoolSize, chartTotalFP];

function showChart(id){

    charts.forEach(chart => {
        if (chart.button === id){

          if (document.getElementById(id).innerHTML === "Hide Chart"){
              document.getElementById(chart.name).style.display="none";
              document.getElementById(id).innerHTML="Show Chart";
              chart.object.destroy();
            }
          else{
              chart.loadData();
              chart.object = new Chart(document.getElementById(chart.name), chart.config);
              document.getElementById(id).innerHTML="Hide Chart";
              document.getElementById(chart.name).style.display="block";
            }
        }
    });
  }; 