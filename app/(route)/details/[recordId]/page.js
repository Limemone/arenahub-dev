"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import ArenaDetail from '../_components/ArenaDetail';
import ArenaSuggestionList from '../_components/ArenaSuggestionList';

function Details({params}) {

  const [arena,setArena]=useState();
  useEffect(()=>{
    console.log('Record ID:', params.recordId);
    getArenaById();
  },[])

  const getArenaById = async () => {
    try {
      const response = await GlobalApi.getArenaById(params.recordId);
      console.log('API Response:', response.data); // Log the entire response
      setArena(response.data); // Directly store the entire response
    } catch (error) {
      console.error('Error fetching arena:', error.response || error.message);
    }
  };

  return (
    <div className='p-5 md:px-10'>
      <h2 className='font-bold text-[22px]'>Details</h2>

      <div className='grid grid-cols-1 lg:grid-cols-4 '>
        {/* Arena Detail  */}
        <div className=' col-span-3'>
        {arena&& <ArenaDetail arena={arena} />}
         
        </div>
        {/* Arena Suggestion  */}
        <div>
          <ArenaSuggestionList/>
        </div>
      </div>
    </div>
  )
}

export default Details