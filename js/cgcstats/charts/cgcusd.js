class ChartCGCUSD {
  constructor(name, button, object){
      this.name = name;
      this.button = button;
      this.object = object;

      this.labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
      ];
    
    this.data = {
      labels: this.labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
    };
    
    this.config = {
      type: 'line',
      data: this.data,
      options: {}
    };
  }
}

let chartCGCUSD = new ChartCGCUSD('chartCGCUSD', 'buttonCGCUSD');