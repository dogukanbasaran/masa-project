import {Outlet} from 'react-router-dom'
import Header from '../components/Header'

const SharedLayout = () => {
  return (
     <>
        <Header/>
        <main className='bg-black text-white h-[700px] text-6xl flex justify-center pt-40'>
          <Outlet/>
        </main>
     </>
  )
}

export default SharedLayout
