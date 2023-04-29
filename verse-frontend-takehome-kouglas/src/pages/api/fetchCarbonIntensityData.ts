import { CarbonIntensityData } from "../interfaces/CarbonIntensityData";

export async function fetchCarbonIntensityData(): Promise<CarbonIntensityData[]> {
  const baseUrl = "http://localhost:3000/datafetched"
  // might be helpful to try fetching from the proxy url instead:  http://localhost:3000/datafetched
  

  const response  = await fetch(baseUrl)
  
  if(!response.ok){

    throw new Error('Failed to fetch data')
  }

  const carbonData = await response.json()
    console.log(`from fetchComponent: ${JSON.stringify(carbonData)}`)

  // probably removing this return or changing it 
  return carbonData.data.map((data: any) => ({
    datetime: new Date(data.datetime),
    carbon_intensity: data.carbon_intensity 
  }))
}