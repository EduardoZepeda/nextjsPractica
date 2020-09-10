import React, {useEffect} from 'react'
import Link from 'next/link'
import Chart from 'chart.js';

const ProportionChart = ({arabica, robusta}) => {

  useEffect(() => {
    let ctxProportion = document.getElementById('proportion')
    var proportionChart = new Chart(ctxProportion, {
      type: 'pie',
      data: {
        datasets: [
          {
            data: [
              arabica, robusta
            ],
            backgroundColor: ['#caffbf', '#bdb2ff']
          }
        ],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: ["arabica", "robusta"]
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
      <canvas id="proportion" width="250" height="250"></canvas>
  </div>)
}

export default ProportionChart
