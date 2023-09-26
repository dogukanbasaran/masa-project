import React from 'react'
import blogData from '../data/blogData'
import {HiOutlineHeart} from 'react-icons/hi'

const Blogpost = () => {
  return (
    <div className='container p-10'>
        {/* Section Title */}
        <h2 className='text-white text-2xl mb-4 uppercase font-sociology3'>Popular Posts</h2>
        {/* Grid Area */}
        <div className='grid grid-cols-3 grid-rows-1 gap-5'>
            {/* Post */}
            {blogData.map((blog) => {
                return(
                    <div className='col-span-1 bg-slate-400 font-sociology2' key={blog.id}>
                    {/* Post Header */}
                    <div className='border-b p-4 flex items-center justify-between'>
                        <h3 className='text-[20px]'>{blog.postName}</h3>
                        <div className='flex items-center space-x-2'>
                            <h3>{blog.writerName}</h3>
                            <img src={blog.writerAvatar} className='w-10 h-10 rounded-full'/>
                        </div>
                    </div>
                    {/* Post Content */}
                    <p className='p-4 text-[16px]'>{blog.postContent}</p>
                    {/* Post Footer */}
                    <div className='border-t  p-4 flex items-center justify-end space-x-4 text-sm'>
                        <p>{blog.postDate}</p>
                        <p className='flex justify-center items-center'><HiOutlineHeart className='w-6 h-6'/>{blog.likeCount}</p>
    
                    </div>
                </div>
    
                )
            })}
            
        </div>
    </div>
  )
}

export default Blogpost
