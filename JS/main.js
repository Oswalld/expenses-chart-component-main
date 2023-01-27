console.log("ehoh");
window.onload = function(event) {
// Récupération des données JSON
const data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ];
  
  const chartContainer = document.querySelector('.chart');
  let maxAmount = 0;
  let maxAmountIndex = 0;
  
  data.forEach((datapoint, index) => {
      const chartComponent = document.createElement('div');
      chartComponent.classList.add('component-chart');
      
      const popUp = document.createElement('div');
      popUp.classList.add('pop-up');
      chartComponent.appendChild(popUp);
      
      const popUpText = document.createElement('p');
      popUpText.innerText = '$' + datapoint.amount;
      popUp.appendChild(popUpText);
  
      const chartBar = document.createElement('div');
      chartBar.classList.add('chart-bar', `chart-bar-${index + 1}`);
      chartBar.style.height += `${datapoint.amount * 3}px`;
      chartComponent.appendChild(chartBar);
  
      const label = document.createElement('p');
      label.innerText = datapoint.day;
      chartComponent.appendChild(label);
  
      chartContainer.appendChild(chartComponent);
  
      if (datapoint.amount > maxAmount) {
          maxAmount = datapoint.amount;
          maxAmountIndex = index;
      }
  });
  
  const chartBars = document.querySelectorAll('.chart-bar');
  chartBars[maxAmountIndex].style.backgroundColor = "hsl(186, 34%, 60%)";

  chartBars.forEach((chartBar) => {
    chartBar.addEventListener("mouseover", () => {
      chartBar.parentNode.firstElementChild.style.display = "flex";
    })
  });
  chartBars.forEach((chartBar) => {
    chartBar.addEventListener("mouseout", () => {
      chartBar.parentNode.firstElementChild.style.display = "none";
    })
  });


  
}