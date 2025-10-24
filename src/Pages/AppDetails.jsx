import React from 'react'
import { useParams } from 'react-router'
import useApps from '../Hooks/useApps'
import { updateList } from '../utils/localStorage'
import down from "../assets/icon-downloads.png"
import rating from "../assets/icon-ratings.png"
import review from "../assets/icon-review.png"
import { BarChart, Bar, XAxis, YAxis} from 'recharts';


const AppDetails = () => {

  const { id } = useParams()
  const { apps, loading } = useApps()

  const app = apps.find(p => p.id === Number(id))

  if (loading) return <p>Loading.......</p>

  const { image, description, companyName, ratingAvg, downloads, reviews, title,ratings } = app || {}
  const data = ratings.map(r => ({
    star: r.name,
    reviews: r.count
  }))

  return (
    <div className='flex flex-col justify-start items-start gap-[2.5rem] p-[5rem]'>

      <div className='flex flex-row justify-start items-center gap-[2.5rem]'>
        <img
          className='shadow-[0_0.625rem_1.25rem_-0.75rem_rgba(0,0,0,0.1)]'
          src={image}
          alt=''
        />

        <div className='flex flex-col justify-start items-start gap-[1.875rem]'>

          <div className='flex flex-col justify-start items-start gap-[0.5rem]'>
            <p className='text-[rgba(0,25,49,1)] font-inter text-[2rem] font-bold leading-[100%] text-left '>
              {title}
            </p>

            <p className='font-inter text-[1.25rem] font-bold leading-[2rem] text-left'>
              Developed by <span className='text-blue-600'>{companyName}</span>
            </p>
          </div>

          <div className='flex flex-row justify-start items-center gap-[1.5rem]'>

            <div className='flex flex-col justify-center items-start gap-[0.5rem]'>
              <img src={down} alt='down' />
              <p className='text-[rgba(0,25,49,1)] font-inter text-[1rem] font-normal leading-[1.5rem] text-left  opacity-[0.8]'>
                Downloads
              </p>
              <p className='text-[rgba(0,25,49,1)] font-inter text-[2.5rem] font-extrabold leading-[2.5rem] text-left '>
                {downloads}
              </p>
            </div>

            <div className='flex flex-col justify-center items-start gap-[0.5rem]'>
              <img src={rating} alt='down' />
              <p className='text-[rgba(0,25,49,1)] font-inter text-[1rem] font-normal leading-[1.5rem] text-left  opacity-[0.8]'>
                Average Ratings
              </p>
              <p className='text-[rgba(0,25,49,1)] font-inter text-[2.5rem] font-extrabold leading-[2.5rem] text-left '>
                {ratingAvg}
              </p>
            </div>

            <div className='flex flex-col justify-center items-start gap-[0.5rem]'>
              <img src={review} alt='down' />
              <p className='text-[rgba(0,25,49,1)] font-inter text-[1rem] font-normal leading-[1.5rem] text-left  opacity-[0.8]'>
                Total Reviews
              </p>
              <p className='text-[rgba(0,25,49,1)] font-inter text-[2.5rem] font-extrabold leading-[2.5rem] text-left '>
                {reviews}
              </p>
            </div>
          </div>

          <div
            onClick={() => updateList(app)}
            className='cursor-pointer flex flex-row justify-center items-center gap-[0.625rem] px-[1.25rem] py-[0.875rem] rounded-[0.25rem] bg-[rgba(0,211,144,1)]'
          >
            <p className='text-[rgba(255,255,255,1)] font-inter text-[1.25rem] font-semibold leading-[100%] text-left '>
              Install now
            </p>
          </div>
          
          </div>
      </div>
<BarChart className='w-full'
  data={data}
  layout="vertical"
  style={{ width: '100%', maxWidth: '100%', height: '300px'}}>
  <XAxis type="number"/>
  <YAxis type="category" dataKey="star"/>
  <Bar dataKey="reviews" fill="#FF8811"/>
</BarChart>

      <div>
        <p className='font-inter text-[1.25rem] font-bold leading-[2rem] text-left pb-4'>Description</p>
        <p className='text-[rgba(0,25,49,1)] font-inter text-[1.3rem] font-normal leading-[1.5rem] text-left  opacity-[0.8]'>{description}</p>
      </div>
    </div>
  )
}

export default AppDetails
