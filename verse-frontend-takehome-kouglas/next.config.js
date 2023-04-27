// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/datafetched",
        destination: "https://storage.googleapis.com/verse-scratch-data-public/interview-takehome/caiso_carbon_intensity.json"
      }
    ]
  }
  return {
    rewrites
  }
}
