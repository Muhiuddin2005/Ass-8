import React from 'react'
import { useParams } from 'react-router'
import useApps from '../Hooks/useApps'
import { updateList } from '../utils/localStorage'

const AppDetails = () => {

  const { id } = useParams()
  const { apps, loading } = useApps()

  const app = apps.find(p => p.id === Number(id))

  if (loading) return <p>Loading.......</p>

  const {image, description } = app || {}

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
            <p className='text-[rgba(0,25,49,1)] font-inter text-[2rem] font-bold leading-[100%] text-left capitalize'>
              SmPlan: ToDo List with Reminder
            </p>

            <p className='font-inter text-[1.25rem] font-bold leading-[2rem] text-left'>
              Developed by productive.io
            </p>
          </div>

          <div className='flex flex-row justify-start items-center gap-[1.5rem]'>

            <div className='flex flex-col justify-center items-start gap-[0.5rem]'>
              <img src='' alt='down' />
              <p className='text-[rgba(0,25,49,1)] font-inter text-[1rem] font-normal leading-[1.5rem] text-left capitalize opacity-[0.8]'>
                downloads
              </p>
              <p className='text-[rgba(0,25,49,1)] font-inter text-[2.5rem] font-extrabold leading-[2.5rem] text-left capitalize'>
                8M
              </p>
            </div>

            <div className='flex flex-col justify-center items-start gap-[0.5rem]'>
              <img src='' alt='down' />
              <p className='text-[rgba(0,25,49,1)] font-inter text-[1rem] font-normal leading-[1.5rem] text-left capitalize opacity-[0.8]'>
                downloads
              </p>
              <p className='text-[rgba(0,25,49,1)] font-inter text-[2.5rem] font-extrabold leading-[2.5rem] text-left capitalize'>
                8M
              </p>
            </div>

            <div className='flex flex-col justify-center items-start gap-[0.5rem]'>
              <img src='' alt='down' />
              <p className='text-[rgba(0,25,49,1)] font-inter text-[1rem] font-normal leading-[1.5rem] text-left capitalize opacity-[0.8]'>
                downloads
              </p>
              <p className='text-[rgba(0,25,49,1)] font-inter text-[2.5rem] font-extrabold leading-[2.5rem] text-left capitalize'>
                8M
              </p>
            </div>
          </div>

          <div
            onClick={() => updateList(app)}
            className='cursor-pointer flex flex-row justify-center items-center gap-[0.625rem] px-[1.25rem] py-[0.875rem] rounded-[0.25rem] bg-[rgba(0,211,144,1)]'
          >
            <p className='text-[rgba(255,255,255,1)] font-inter text-[1.25rem] font-semibold leading-[100%] text-left capitalize'>
              Install now
            </p>
          </div>

        </div>
      </div>

      <div>
        <p>Desc.</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default AppDetails
