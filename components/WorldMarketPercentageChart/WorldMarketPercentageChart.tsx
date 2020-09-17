import React, { useEffect } from 'react'
import Chart from 'chart.js';

type worldMarketProps = {
  worldMarketPercentage: number,
  name: string
}


const WorldMarketPercentageChart = ({ worldMarketPercentage, name }: worldMarketProps) => {
  //World largest producers
  const worldLargestProducers = [{ name: "Colombia", worldMarketPercentage: 6 }, { name: "Brazil", worldMarketPercentage: 35 }, { name: "Vietnam", worldMarketPercentage: 14 }, { name: "Indonesia", worldMarketPercentage: 7 }, { name: "Etiopia", worldMarketPercentage: 5 }].filter((country: worldMarketProps) => country.name.toLowerCase() != name.toLowerCase())
  useEffect(() => {
    let ctxMarketPercentage = document.getElementById('worldMarketPercentage')
    var marketPercentage = new Chart(ctxMarketPercentage as HTMLCanvasElement, {
      type: 'pie',
      data: {
        datasets: [
          {
            data: [
              worldMarketPercentage, ...worldLargestProducers.map((country) => country.worldMarketPercentage), 100 - worldLargestProducers.reduce((total, country) => total + country.worldMarketPercentage, worldMarketPercentage)
            ],
            backgroundColor: ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#ffc6ff']
          }
        ],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [name, ...worldLargestProducers.map((country) => country.name), 'Rest of the world']
      },
      options: {
        responsive: false,
        tooltips: {
          enabled: false
        },
        hover: {
          mode: undefined
        }
      }
    })
  })

  return (<div>
    <canvas id="worldMarketPercentage" width="250" height="250"></canvas>
  </div>)
}

export default WorldMarketPercentageChart
