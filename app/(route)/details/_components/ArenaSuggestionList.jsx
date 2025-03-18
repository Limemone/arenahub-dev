"use client"
import GlobalApi from '@/app/_utils/GlobalApi';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function ArenaSuggestionList() {
    const [arenaList,setArenaList]=useState([]);
    useEffect(()=>{
      getArenaList();
    },[])
    const getArenaList=()=>{
      GlobalApi.getArenaList().then(resp=>{
        console.log(resp.data.data);
        setArenaList(resp.data.data);
      })
    }
  return (
    <div className=' p-4 border-[1px] mt-5 md:ml-5 rounded-lg '>
        <h2 className='mb-3 font-bold'>Suggestions</h2>

        {arenaList.map((arena,index)=>(
            <Link href={'/details/'+arena.id} className=' mb-4 p-3 shadow-sm w-full 
            cursor-pointer hover:bg-slate-100
            rounded-lg flex items-center gap-3'>
                <Image src={arena.image?.url}
                width={70}
                height={70}
                className='w-[70px] h-[70px] rounded-full object-cover'
                />
                <div className='mt-3 flex-col flex gap-1 items-baseline'>
                    <h2 className='text-[10px] bg-blue-100 p-1 rounded-full px-2
                     text-primary'>{arena.categories?.Name}</h2>
                <h2 className='font-medium text-sm'>{arena.Name}</h2>
                <h2 className='text-primary text-xs flex gap-2'>
                    {/* <GraduationCap/> */}
                    {arena.Year_of_Experience}</h2>
                    </div>
            </Link>
        ))}
    </div>
  )
}

export default ArenaSuggestionList