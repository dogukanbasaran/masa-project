import React from 'react'
import personImage from '../assets/images/person/ekinsu.jpg'
import personImage2 from '../assets/images/person/dogukan.jpg'
import personImage3 from '../assets/images/person/ceyhun.jpg'
import personImage4 from '../assets/images/person/merve.jpg'

const Team = () => {
  return (
    <div className='h-[auto] bg-black'>
       <div className='container px-20 text-white'>
            {/* Title */}
           {/* <div className='flex justify-center space-x-4 divide-x divide-blue-500 mb-8 text-lg font-sociology2' id='title'>
            <h2 className='px-2'>Üst Yönetim</h2>
            <h2 className='px-2' >Medya</h2>
            <h2 className='px-2' >Etkinlik</h2>
            <h2 className='px-2' >Sponsorluk</h2>
            <h2 className='px-2' >Sosyal Sorumluluk</h2>
            <h2 className='px-2' >Saha Çalışmaları</h2>
            <h2 className='px-2' >Kariyer Gelistirme</h2>
            <h2 className='px-2' >International Week</h2>
           </div> */}
           <div className='flex flex-wrap justify-center p-20'>
                {/* Card */}
                <div className='group relative overflow-hidden'>
                  <img src={personImage3} className='w-[240px] h-auto group-hover:scale-110 group-hover:opacity-50 duration-500'/>
                  <div className='absolute px-2 bottom-2'>
                    <h3 className=' font-sociology3 font-bold group-hover:text-blue-500 group-hover:mb-2 duration-500'>Ceyhun Aksoy</h3>
                    <p className='text-sm opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-white'>Yönetim Kurulu Başkanı</p>
                  </div>
                </div>
                <div className='group relative overflow-hidden'>
                  <img src={personImage4} className='w-[240px] h-auto group-hover:scale-110 group-hover:opacity-50 duration-500'/>
                  <div className='absolute px-2 bottom-2'>
                    <h3 className=' font-sociology3 font-bold group-hover:text-blue-500 group-hover:mb-2 duration-500'>Merve Güler</h3>
                    <p className='text-sm opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-white'>Yönetim Kurulu Başkan Yardımcısı</p>
                  </div>
                </div>
                <div className='group relative overflow-hidden'>
                  <img src={personImage} className='w-[240px] h-auto group-hover:scale-110 group-hover:opacity-50 duration-500'/>
                  <div className='absolute px-2 bottom-2'>
                    <h3 className=' font-sociology3 font-bold group-hover:text-blue-500 group-hover:mb-2 duration-500'>Ekinsu Ülgen</h3>
                    <p className='text-sm opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-white'>Genel Sekreter</p>
                  </div>
                </div>
                <div className='group relative overflow-hidden'>
                  <img src={personImage2} className='w-[240px] h-auto group-hover:scale-110 group-hover:opacity-50 duration-500'/>
                  <div className='absolute px-2 bottom-2'>
                    <h3 className=' font-sociology3 font-bold group-hover:text-blue-500 group-hover:mb-2 duration-500'>Doğukan Başaran</h3>
                    <p className='text-sm opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-white'>Teşkilat Başkanı</p>
                  </div>
                </div>
           </div>
       </div>
    </div>
  )
}

export default Team
