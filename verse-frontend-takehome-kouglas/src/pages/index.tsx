import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="fixed left-0 top-0 flex w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit font-extrabold tracking-widest pl-8">
          Verse
      <div className="border-1 border-black absolute right-8 p-3 bottom-3 bg-black  text-white font-light rounded-md">
        <Link href="#" className="">
          Sign up
        </Link>
      </div>
        </h1> 
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          <Image
            src="/Verse-Logo.png"
            height={144}
            width={144}
            alt="verse logo"
            className="ml-auto mr-auto"
          />
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            auth0{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            put auth0 stuff here 
          </p>
        </a>
        
      </div>
    </main>
  )
}
