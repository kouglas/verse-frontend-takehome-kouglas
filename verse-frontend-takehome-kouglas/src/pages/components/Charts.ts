import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { fetchCarbonIntensityData } from "../api/fetchCarbonIntensityData";
import type { CarbonIntensityData } from "../interfaces/CarbonIntensityData";
import { canvas } from "chart.js/dist/helpers/helpers.canvas";

Chart.register(...registerables)

const Charts = () => {
  const chartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const fetchAndRenderChart = async () => {
      const data = await fetchCarbonIntensityData()

      const context = chartRef.current?.getContext("2d")

    if(!context) return

    new Chart(context, {
      type: "line",
      data: {
        datasets: [
          {
            label: "Carbon Intensity",
            data: data.map((d: CarbonIntensityData) => ({
              x: d.datetime,
              y: d.carbon_intensity,
            })),
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: "time",
            time: {
              unit: "day",
            }
          }
        }
      }
    })
  }

  fetchAndRenderChart()
  }, [])


  return <canvas ref={chartRef} />
}

export default Charts;