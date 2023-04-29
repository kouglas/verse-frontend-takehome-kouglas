import { fetchCarbonIntensityData } from "../api/fetchCarbonIntensityData";
import { BarChart } from "./charts/barChart";
import LineChart from "./charts/lineChart";


const DataViz = () => {
  
  // console.log(`from DataViz.tsx ${fetchCarbonIntensityData()}`)
  // fetchCarbonIntensityData()

  return (
    <div>here
      
      {/* <BarChart /> */}
      <LineChart />
    </div>


  )

  
}

export default DataViz;