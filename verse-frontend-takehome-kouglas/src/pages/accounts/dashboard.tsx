
import Image from "next/image"
import styles from "../../../components/Dashboard.module.css"

export default function Dashboard(){
  return (
  <div className="">
    <h1>this is the dashboard</h1>
  <Image
    src="/Verse-Logo.png"
    height={144}
    width={144}
    alt="an alt"
  />
  </div>

  )

}