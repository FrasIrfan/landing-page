import React from 'react'
import team from '../../../public/assets/logos/team.svg'
import Image from 'next/image'

const MeetTeam = () => {



  return (
      <>
      
          <div className='bg-gradient-to-r font-bold space-y-6 font-montserrat py-40 flex flex-col items-center from-[#0b1825] via-[#121829] to-[#280a1e]'>
              <h1 className='text-5xl'>Meet Our Team</h1>
              <p className='text-lg text-[#FFFDF9]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
              <Image alt='team' src={team} width={1000} height={700}/>

          </div>
          
          
      </>
  )
}

export default MeetTeam
