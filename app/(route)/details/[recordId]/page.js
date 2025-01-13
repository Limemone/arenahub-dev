"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import DoctorDetail from '../_components/DoctorDetail';
import DoctorSuggestionList from '../_components/DoctorSuggestionList';

function Details({params}) {

  const [doctor,setDoctor]=useState();
  useEffect(()=>{
    console.log('Record ID:', params.recordId);
    getDoctorById();
  },[])

  const getDoctorById = async () => {
    try {
      const response = await GlobalApi.getDoctorById(params.recordId);
      console.log('API Response:', response.data); // Log the entire response
      setDoctor(response.data); // Directly store the entire response
    } catch (error) {
      console.error('Error fetching doctor:', error.response || error.message);
    }
  };

  return (
    <div className='p-5 md:px-10'>
      <h2 className='font-bold text-[22px]'>Details</h2>

      <div className='grid grid-cols-1 lg:grid-cols-4 '>
        {/* Doctor Detail  */}
        <div className=' col-span-3'>
        {doctor&& <DoctorDetail doctor={doctor} />}
         
        </div>
        {/* Doctor Suggestion  */}
        <div>
          <DoctorSuggestionList/>
        </div>
      </div>
    </div>
  )
}

export default Details