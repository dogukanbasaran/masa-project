import React from 'react'
import Blogpost from '../components/Blogpost'
import News from '../components/News'

const Home = () => {
  return (
    <main className='h-[auto] bg-black'>
      {/* Introduction */}
      <section className='h-[200px] p-10' id='introduction'>
          <p className='text-white text-3xl font-sociology2 flex justify-center'>Marmara Üniversite'sinde kurulmuş olan bir sosyoloji kulübü.</p>
      </section>
      {/* News */}
      <section className='h-[auto]' id='news'>
        <News/>
      </section>
      {/* Blog Posts */}
      <section className='h-[auto]' id='blog-posts'>
        <Blogpost/>
      </section>
    </main>
  )
}

export default Home
