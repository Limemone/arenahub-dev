"use client"
import ArenaList from '@/app/_components/ArenaList';
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'

function Search({params}) {

  const [arenaList,setArenaList]=useState([]);
  useEffect(()=>{
    console.log(params.cname);
    getArenas();
  },[])

  const getArenas=()=>{
    GlobalApi.getArenaByCategory(params.cname).then(resp=>{
      setArenaList(resp.data.data);
    })
  }
  return (
    <div className='mt-5'>
        <ArenaList heading={params.cname}
        arenaList={arenaList}
        />
    </div>
  )
}

export default Search