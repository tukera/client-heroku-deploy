import React, { useRef, useEffect } from 'react'
import Chart from 'chart.js/auto'
import { chartOptions } from '../chartConfigs/chartOptions'

const CoinHistory = ({ day, week, year }) => {
  const chartRef = useRef()

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type: 'line',
        data: {
          datasets: [
            {
              label: '',
              data: day,
              backgroundColor: 'rgba(67.8, 90.2, 90.2)',
              borderColor: 'rgba(44.7, 83.1, 83.1)',
              pointRadius: 0,
              borderWidth: 1
            }
          ]
        },
        options: chartOptions
      })
    }
  }, [])

  return (
    <div>
      <canvas ref={chartRef} id='coinChart' width={300} height={300} />
    </div>
  )
}

export default CoinHistory
