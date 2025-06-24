"use client"
import React, { useState } from 'react';

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState(false)

    const generate = () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "url": url,
        "shorturl": shorturl
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      fetch("/api/generate", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
          seturl("")
          setshorturl("")
          console.log(result)
          alert(result.message)
        })
        .catch((error) => console.error(error));
    }

  return (
    <div className='mx-auto max-w-lg bg-blue-100 my-16 p-8 rounded-lg flex flex-col gap-4'> 
      <h1 className='text-2xl font-bold'>Generate your short URLs</h1>
      <div className='flex flex-col gap-2'>
        <input type="text"
        value={url}
        className='px-4 py-2 focus:outline-blue-500 bg-white rounded-md'
        placeholder="Enter your URL" 
        onChange={e => {seturl(e.target.value)}} />

        <input type="text" 
        value={shorturl}
        className='px-4 py-2 focus:outline-blue-500 bg-white rounded-md'
        placeholder="Enter your preffered short URL" 
        onChange={e => {setshorturl(e.target.value)}} />
        <button onClick={generate} className='bg-blue-400 hover:bg-blue-500 rounded-lg shadow-lg hover:shadow-xl p-3 py-1 font-bold transition-transform duration-100 active:scale-95 my-3 text-white'>Generate</button>
      </div>

      {generated && (
        <div className="mt-6 bg-white border-l-4 border-blue-500 p-5 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">🎉 Your Shortened Link</h2>
          <a
            href={generated}
            target="_blank"
            className="text-blue-600 text-xl font-bold break-all hover:underline hover:text-blue-500 transition"
          >
            {generated}
          </a>
        </div>
      )}
    </div>
  )
}

export default Shorten;