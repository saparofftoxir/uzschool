import React from 'react'

function Login() {
  return (
    <div className='w-full flex items-center justify-center h-screen'>
      <div className='w-2/5 flex flex-col border-2 rounded  bg-white'>
        <div className='w-full flex items-center rounded-t h-16 bg-cyan-600'>
          <h1 className='font-bold text-2xl pl-5 text-white'>
            Tizimga kirish
          </h1>
        </div>
        <form className='w-full flex flex-col gap-y-12 p-4' action="">
          <div className=' w-full flex items-center justify-between '>
            <label className='w-28 text-black' htmlFor="">Login</label>
            <input className='border p-2 outline-none rounded flex-1' type="text" />
          </div>
          <div className=' w-full flex items-center justify-between '>
            <label className='w-28 text-black' htmlFor="">Parol</label>
            <input className='border p-2 outline-none rounded flex-1' type="text" />
          </div>
        </form>
        <div className='w-full h-14 mt-14 border-t-2 p-3 bg-gray-100 flex items-center justify-end'>
          <button className=' bg-cyan-600 rounded p-1.5 px-5 text-white'>Kirish</button>
        </div>
      </div>
    </div>
  )
}

export default Login