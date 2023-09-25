import React from 'react'

const Home = () => {
  return (
    <main className='h-[auto] bg-black'>
      {/* Introduction */}
      <section className='h-[580px]' id='introduction'>
          <h2 className='text-white text-6xl font-sociology2 flex justify-center items-center '>Hoş geldiniz</h2>
      </section>
      {/* Announcements */}
      <section className='h-[320px] p-20 border' id='announcements'>
         <h2 className='text-white text-6xl'>Duyurular</h2>
      </section>
      {/* Blog Posts */}
      <section className='h-[400px] p-20 border' id='blog-posts'>
        <h2 className='text-white text-6xl'>Blog Gönderileri</h2>
      </section>
  

    </main>
  )
}

export default Home
