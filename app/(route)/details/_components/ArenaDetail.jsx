import { Button } from '@/components/ui/button'
import { GraduationCap, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import BookAppointment from './BookAppointment'

function ArenaDetail({arena}) {
    const socialMediaList=[
        {
            id:1,
            icon:'/youtube.png',
            url:''
        },
        {
            id:2,
            icon:'/linkedin.png',
            url:''
        },
        {
            id:3,
            icon:'/twitter.png',
            url:''
        },
        {
            id:4,
            icon:'/facebook.png',
            url:''
        }
    ]
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-lg'>
          {/* Arena Image  */}
          <div>
              <Image src={arena.image?.url}
              width={200}
              height={200}
              alt='arena-image'
              className='rounded-lg w-full h-[280px] object-cover'
              />
          </div>
          {/* Arena Info  */}
          <div className='col-span-2 mt-5 flex md:px-10 flex-col gap-3 items-baseline'>
                <h2 className='font-bold text-2xl'>{arena?.Name || 'No Name Provided'}</h2>
                <h2 className='text-md flex gap-2 text-gray-500'>
                    <MapPin/>
                    <span>{arena?.Address || 'No Address Provided'}</span>
                </h2>
                <h2 className='text-[10px] bg-blue-100 p-1 rounded-full
                        px-2 text-primary'>{arena.categories[0].Name}</h2>

                <div className='flex gap-3'>
                    {socialMediaList.map((item,index)=>(
                        <Image src={item.icon} key={index}
                        width={30}
                        height={30}
                        />
                    ))}
                </div>
                <BookAppointment arena={arena} />
          </div>

          {/* About Arena  */}

         
        </div>
         <div className='p-3 border-[1px] rounded-lg mt-5'>
         <h2 className='font-bold text-[20px]'>About</h2>
         <p className='text-gray-500 tracking-wide mt-2'>{arena.About}</p>
       </div>
       </>
  )
}

export default ArenaDetail