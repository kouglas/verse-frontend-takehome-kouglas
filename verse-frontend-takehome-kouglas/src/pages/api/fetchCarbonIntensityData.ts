import { CarbonIntensityData } from "../interfaces/CarbonIntensityData";

export async function fetchCarbonIntensityData(): Promise<CarbonIntensityData[]> {

  const response  = await fetch ("https://storage.googleapis.com/verse-scratch-data-public/interview-takehome/caiso_carbon_intensity.json"
  )

  const data = await response.json()

  return data.map((d: any) => ({
    datetime: new Date(d.datetime),
    carbon_intensity: d.carbon_intensity 
  }))
}