import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='h-17 bg-blue-500 flex items-center justify-between px-3 text-white'>
        <div className="logo font-bold text-2xl font-serif">
           <Link href="/">BitLinks</Link>
        </div>
        <ul className='flex justify-center items-center gap-4'>
            <Link className='font-mono' href="/"><li>Home</li></Link>
            <Link className='font-mono' href="/about"><li>About</li></Link>
            <Link className='font-mono' href="/shorten"><li>Shorten</li></Link>
            <Link className='font-mono' href="/contact"><li>Contact Us</li></Link>
            <li className='flex gap-3'>
                <Link className='font-mono' href="/shorten"><button className='bg-blue-400 hover:bg-blue-500 rounded-lg shadow-lg hover:shadow-xl p-3 py-1 font-bold transition-transform duration-100 active:scale-95'>Try Now</button></Link>
                <Link className='font-mono' href="https://github.com/ShreyashPainuly/BitLinks-URLShortner"><button className='bg-blue-400 hover:bg-blue-500 rounded-lg shadow-lg hover:shadow-xl p-3 py-1 font-bold transition-transform duration-100 active:scale-95'>GitHub</button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;