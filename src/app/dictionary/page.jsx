'use client'
import { btnsTitle } from '@/data/btnsTitle';
import React, { useState } from 'react'

function Dictionary() {
    const [choosen, setChoosen] = useState(1)
    const currentItem = btnsTitle.find(item => item.id === choosen)
    const clickTabBtn = (item) => {
        setChoosen(item.id)
    }
    
    return (
        <div className='w-full h-screen flex items-center flex-col'>
            <div className='w-full flex mt-16  justify-center'>
                <h1 className='text-2xl font-bold'>{currentItem?.title}</h1>
            </div>
            <div className='w-10/12 border rounded-lg h-[370px] mt-7 bg-gray- '>
                <div className='flex w-full items-end  p-4'>
                    <div className=' gap-x- flex items-start justify-start'>
                        {btnsTitle.map(item => (
                            <button
                                className={`${item.id === choosen ? "border-2 border-gray-200 border-b-0 text-gray-950" : " border-b-2 border-gray-200"} transition rounded-t p-1.5  text-blue-600`}
                                onClick={() => clickTabBtn(item)}
                                key={item.id}>
                                {item.title}
                            </button>
                        ))}
                    </div>
                    <div className='flex-1 h-[1px] bg-gray-200 '>
                    </div>
                </div>
                <div className='w-full flex items-start justify-between p-3 gap-x-5 '>
                    <div className='flex w-[1500px] items-center gap-x-3'>
                        <form className='w-10/12 items-center flex  gap-x-5' action="">
                            <input className='outline-none text-black rounded w-full  border border-gray-200 p-1' type="text" placeholder={"So'zni kiriting"} />
                            <button className='w-32 ml-5 p-1 rounded text-white bg-blue-700'>
                                Izlash
                            </button>
                        </form>
                    </div>
                    <div className='w-[500px] flex flex-col items  '>
                        {currentItem?.context?.map((item, index) => (
                            <div key={index}>
                                <div className='flex items-center gap-x-2'>
                                    <input type="checkbox" />
                                    {item.paragraph}

                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dictionary;