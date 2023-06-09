import { useEffect, useState } from 'react'
import {
  Chart as ChartJS,  
  LineElement, PointElement, 
  CategoryScale, 
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
  import { Line } from 'react-chartjs-2'
import { error } from 'console'

  ChartJS.register (
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend

  )

const LineChart = () => {

  const [chart, setChart] = useState([])

  let proxyURL = "http://localhost:3000/datafetched"

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${proxyURL}`)
      .then((response) =>  {
        response.json()
        .then((json) => {
          console.log(json)
          setChart(json.data)
        })
      }).catch(error => {
        console.log(error)
      })
    }
    fetchData()
  }, [proxyURL])
  
  console.log("chart", chart)

  

  let data = {
    labels: ""
  }

  return ( 
    <div>
      <Line data={data}/>
    </div>
  );
}

export default LineChart;