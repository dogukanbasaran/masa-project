import React from 'react'
import newsData from '../data/newsData'

const Announcements = () => {
  return (
    <div>
        <div className='container p-10'>
            {/* Section Title */}
            <h2 className='text-white text-2xl mb-4 uppercase font-sociology3'>News</h2>
            {/* Grid Area */}
            <div className='grid grid-cols-4 grid-rows-1 gap-5'>
              {/* News */}
              {newsData.map((news) => {
                  return(
                    <div className='col-span-1 bg-slate-400 font-sociology2 max-w-sm overflow-hidden' key={news.id}>
                        {/* News Image*/}
                        <img src={news.newsImage} className='h-[auto] w-[370px]'/>
                        <div className='p-2 bg-slate-900'>
                          <h3 className='text-[20px] text-white'>{news.newsName}</h3>
                          <div className='flex justify-between items-center mt-4'>
                              <button className='text-white bg-blue-800 py-1 px-2 hover:bg-blue-500 duration-500'>More Detail</button>
                              <p className='text-white'>{news.newsDate}</p>
                          </div>
                        </div>
                    </div>
                  )
              })}
            </div>
        </div>
    </div>
  )
}

export default Announcements
