'use client'
import { list } from '@/data/list';
import Link from 'next/link';
import React, { useState } from 'react'
import { IoSchoolSharp } from "react-icons/io5";
function Navbar() {
    const [choosenId, setChoosenId] = useState(0)
    const currentItem = list.find(item => item.id === choosenId)
    return (
        <nav className='w-full py-4 px-20 flex items-center text-base justify-between bg-white shadow'>
            <div className='flex items-center gap-x-2'>
                <IoSchoolSharp className='w-8 h-8' />
                <h2 className='font-bold font-mono text-xl'>School</h2>
            </div>
            <ul className='flex  items-center gap-x-10 '>
                {list.map(item => (
                    <li className={`${item.id === choosenId ? "bg-orange-400 text-white" : "hover:text-orange-400 duration-300"} ease-linear px-3 duration-100 p-1 rounded-3xl`} key={item.id}>
                        <Link onClick={() => setChoosenId(item.id)} href={`${item.title}`}>
                            {item.list}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar