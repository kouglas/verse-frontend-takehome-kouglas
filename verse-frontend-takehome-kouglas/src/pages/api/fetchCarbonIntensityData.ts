import { CarbonIntensityData } from "../interfaces/CarbonIntensityData";

export async function fetchCarbonIntensityData(): Promise<CarbonIntensityData[]> {
  const baseUrl = "https://storage.googleapis.com/verse-scratch-data-public/interview-takehome/caiso_carbon_intensity.json"
  // might be helpful to try fetching from the proxy url instead:  http://localhost:3000/datafetched

  const response  = await fetch(baseUrl, 
    {
      // mode: 'no-cors',
      // method: 'OPTIONS'
    }
  )
  
  if(!response.ok){

    throw new Error('Failed to fetch data')
  }

  const carbonData = await response.json()



  return carbonData.map((data: any) => ({
    datetime: new Date(data.datetime),
    carbon_intensity: data.carbon_intensity 
  }))
}