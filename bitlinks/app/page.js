import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-blue-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl text-slate-950 font-bold ${poppins.className}`}>The best URL shortener in the market</p>
          <p className="px-28 text-center font-serif text-lg text-slate-900">
            We are the most straightforward and easy-to-use URL shortener in the market. With BitLinks, you can shorten your URLs in seconds and share them with anyone. Most of the time, you don't even need to sign up. 
          </p>
          <div className='flex gap-3 justify-start'>
                <Link className='text-white' href="/shorten"><button className='bg-blue-400 hover:bg-blue-500 rounded-lg shadow-lg hover:shadow-xl p-3 py-1 font-bold transition-transform duration-100 active:scale-95'>Try Now</button></Link>
                <Link className='text-white' href="https://github.com/ShreyashPainuly/BitLinks-URLShortner"><button className='bg-blue-400 hover:bg-blue-500 rounded-lg shadow-lg hover:shadow-xl p-3 py-1 font-bold transition-transform duration-100 active:scale-95'>GitHub</button></Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="an image of a vector" src={"/vector.jpg"} fill={true}/>
        </div>
      </section>
    </main>
  );
}
