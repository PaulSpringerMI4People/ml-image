'use client'
import { useState } from 'react'

export default function Home() {

  const [image, setImage] = useState<File>();

  const handleChange = (event: any) => {
    const i = event.target.files[0];
    setImage(i);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (image && image.type === "image/png") {
      try {
        // use `image` as data in request to backend
        // use axios package
        alert(`Image uploaded, name is ${image.name}`);
      } catch (err) {
        alert(`Something went wrong!`);
      }
    } else alert("Invalid format or you haven't picked a file");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="min-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Upload an image</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Our model processes your image through x and displays it here.</p>
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <div className="flex flex-row m-4 gap-x-6 font-bold text-sm mb-2 text-white center gap-y-8">
            <form onSubmit={handleSubmit} className='flex flex-col py-2 gap-y-4 space-y-4 mt-4'>
              <input type="file" name="myImage" onChange={handleChange} />
              <button
                type="submit"
                className="px-0 py-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out bg-green dark:bg-green"
              >
                Upload
              </button>
            </form>
            <div className="flex items-center justify-center w-full h-72 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}
