import React, {useEffect} from 'react'
import Link from 'next/link'
import Chart from 'chart.js';

const WorldMarketPercentageChart = ({worldMarketPercentage, name}) => {
  //World largest producers
  const worldLargestProducers = [{name:"Colombia", percent: 6}, {name:"Brasil", percent: 35}, {name:"Vietnam", percent: 14}, {name:"Indonesia", percent: 7}, {name:"Etiopia", percent: 5}]
  useEffect(() => {
    let ctxMarketPercentage = document.getElementById('worldMarketPercentage')
    var marketPercentage = new Chart(ctxMarketPercentage, {
      type: 'pie',
      data: {
        datasets: [

          {
            data: [
              worldMarketPercentage, ...worldLargestProducers.map((country)=> country.percent), 100 - worldLargestProducers.reduce((total, country)=> total + country.percent, worldMarketPercentage)
            ],
            backgroundColor: ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#ffc6ff']
          }
        ],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [name, ...worldLargestProducers.map((country)=> country.name), 'Rest of the world']
      },
      options: {
        responsive: false,
        tooltips: {
          enabled: false
        },
        hover: {
          mode: null
        }
      }
    })
  })

  return (<div>
      <canvas id="worldMarketPercentage" width="250" height="250"></canvas>
  </div>)
}

export default WorldMarketPercentageChart
