import React, { use } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useAuth0 } from '@auth0/auth0-react';
import Link from 'next/link';
import SideNav from './components/SideNav';
import Cards from './components/Cards';

export default function Profile() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pb-4">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="fixed left-0 top-0 flex w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit font-extrabold tracking-widest pl-8" >
          <Link href="https://verse.inc" >Verse</Link>
            <div className="border-1 border-black absolute right-8 p-3 bottom-3 bg-black  text-white font-light rounded-md">
              <a href="/api/auth/logout">Logout</a> 
              {/* the above link needs to  be an icon and not a button w/ text */}
            </div>
        </h1> 
        <SideNav />
      </div>
      <section className="float-top">
        <Cards />
      </section>
  




    </main>
  );
}