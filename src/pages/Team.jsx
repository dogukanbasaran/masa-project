import React from 'react'
import teamData from '../data/teamData'

const Team = () => {
  return (
    <div className='h-[auto] bg-black'>
       <div className='container px-20 text-white'>
           <div className='flex flex-wrap justify-center p-20'>
            {teamData.map((team) => {
              return (
                <div className='group relative overflow-hidden cursor-pointer' key={team.id}>
                    <img src={team.image} className='w-[240px] h-auto group-hover:scale-110 group-hover:opacity-50 duration-500'/>
                    <div className='absolute px-2 bottom-2'>
                    <h3 className=' font-sociology3 font-bold group-hover:text-blue-500 group-hover:mb-2 duration-500'>{team.name}</h3>
                    <p className='text-sm opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-white'>{team.description}</p>
                  </div>

                </div>
              )
            })}
           </div>
       </div>
    </div>
  )
}

export default Team
