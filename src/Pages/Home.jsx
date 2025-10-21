import React from 'react'
import { useNavigate, Link } from 'react-router'
import useApps from '../Hooks/useApps'
import AppCard from '../Components/AppCard'
import Header from '../Components/Header'

const Home = () => {

  const { apps } = useApps()
  const navigate = useNavigate()

  const trendingApps = apps.slice(0, 8)


  return (
    <div>
      <Header />

      <div className='w-full min-h-screen flex flex-col justify-start items-center gap-[2.5rem] p-[5rem]'>

        <div className='flex flex-col justify-center items-center gap-[1rem]'>
          <div className='text-[rgba(0,25,49,1)] font-inter text-[3rem] font-bold leading-[100%] tracking-[0%] text-center capitalize'>
            Trending Apps
          </div>

          <div className='text-[rgba(98,115,130,1)] font-inter text-[1.25rem] font-normal leading-[2rem] tracking-[0%] text-center'>
            Explore All Trending Apps on the Market developed by us
          </div>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
          {trendingApps.map(item => (
            <AppCard key={item.id} app={item} />
          ))}
        </div>


        <div
          onClick={() => navigate(`/apps`)}
          className='cursor-pointer rounded-[4px] bg-gradient-to-br from-[#632ee3] to-[#9f62f2] flex flex-row justify-center items-center gap-2.5 px-4 py-3'
        >
          <p className='text-white font-inter text-base font-semibold leading-[100%] tracking-normal text-left capitalize'>
            Show All
          </p>
        </div>

      </div>
    </div>
  )
}

export default Home
