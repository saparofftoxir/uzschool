'use client'
import { reverceWord } from '@/utils/reverseWord'
import React, { useRef, useState } from 'react'

function Search() {
  const ismRef=useRef()
  const [ismlar,setIsmlar]=useState("")
  const submitForm = (e) => {
    e.preventDefault();
    setIsmlar(reverceWord(ismRef.current.value))
  }
  

  return (

    <div className='w-full h-screen'>
      <form onSubmit={submitForm} className='m-10' action="">
        <div className='flex items-center gap-x-10'>
          <input ref={ismRef} className='outline-none border rounded p-1.5 w-72' type="text" placeholder='enter your name' />
          <button className='px-5 text-white bg-cyan-800 rounded'>add</button>
        </div>
      </form>
      <div className='m-10'>
        {ismlar}
      </div>
    </div>
  )
}

export default Search