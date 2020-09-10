import React, {useEffect} from 'react'
import Link from 'next/link'
import {Chart} from 'chart.js';

const ProportionChart = ({arabica, robusta}:TProportion) => {

  useEffect(() => {
    let ctxProportion = document.getElementById('proportion')
    let proportionChart = new Chart(ctxProportion as HTMLCanvasElement, {
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
          mode: undefined
        }
      }
    })
  })

  return (<div>
      <canvas id="proportion" width="250" height="250"></canvas>
  </div>)
}

export default ProportionChart
