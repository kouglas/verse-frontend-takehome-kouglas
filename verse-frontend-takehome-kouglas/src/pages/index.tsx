import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Profile from './profile'
import Login from './components/Login'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="fixed left-0 top-0 flex w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit font-extrabold tracking-widest pl-8">
          <Link href="https://verse.inc" >Verse</Link>
      <div className="border-1 border-black absolute right-8 p-3 bottom-3 bg-black  text-white font-light rounded-md">
        <Link href="/api/auth/login" className="">
          Sign up
        </Link>
      </div>
        </h1> 
      </div>

      <div className="grid text-center ">
        <a
          href="https://verse.inc"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-8"
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
        </a>
        <Login />
        <a 
          // href="/api/auth/login"
          // href='#'
          onClick={() => router.push('/profile')}
          className='border-1 border-black w-11/12 bg-black text-white text-sm px-2.5 pb-3 ml-auto mr-auto pt-3 rounded-md mt-2'
          >Log In</a>  

          <a href="#" className=' mt-3 text-xs'>Forgot your password?</a>

        {/* <a href="/api/auth/logout">Logout</a> */}
        
      </div>
    </main>
  )
}


