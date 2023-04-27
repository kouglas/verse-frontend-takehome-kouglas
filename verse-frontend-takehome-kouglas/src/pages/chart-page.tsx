import Link from "next/link";
import DataViz from "./components/DataViz";

const Charts = () => {
  return ( 
    <main>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className=" left-0 top-0 flex w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit font-extrabold tracking-widest pl-8" >
          <Link href="https://verse.inc" >Verse</Link>
            <div className="border-1 border-black absolute right-8 p-3 bottom-3 bg-black text-white font-light rounded-md">
              <a href="/api/auth/logout">Logout</a> 
            </div>
        </h1> 
      </div>
      <section className="relative">
        <div>
          
        <DataViz />
        </div>
  
      </section>



    
    </main>

    

  );
}

export default Charts;