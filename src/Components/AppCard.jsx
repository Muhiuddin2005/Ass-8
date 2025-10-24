import React from 'react'
import { useNavigate } from 'react-router'
import car1 from '../assets/icon-downloads.png'
import car2 from '../assets/icon-ratings.png'

const AppCard = ({ app }) => {
  const { id, title, image, downloads, ratingAvg, companyName } = app
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/app/${id}`)
  }

  return (
    <div
      onClick={handleClick}
      className='card bg-base-100 shadow-sm cursor-pointer hover:scale-103 transition ease-in-out'
    >
      <figure className='h-40 overflow-hidden'>
        <img 
          src={image} 
          alt='App Thumbnail' 
          className='w-full object-cover' 
        />
      </figure>

      <div className='card-body'>
        <p className='card-title'>{title} : {companyName}</p>

        <div className='flex justify-between'>

          <div className='flex flex-row justify-center items-center gap-2 px-[10px] py-[6px] rounded-[4px] bg-[#F1F5E8]'>
            <img src={car1} alt='downloads icon' />
            <span>{downloads}</span>
          </div>

          <div className='flex flex-row justify-center items-center gap-2 px-[10px] py-[6px] rounded-[4px] bg-[#FFF0E1]'>
            <img src={car2} alt='ratings icon' />
            <span>{ratingAvg}</span>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default AppCard
