import {useState } from 'react'
import useApps from '../Hooks/useApps'
import AppCard from '../Components/AppCard'
import err from '../assets/App-Error.png'


const Apps = () => {
  const {apps } = useApps()
  const [search, setSearch] = useState('')

  const term = search.trim().toLocaleLowerCase()

  const searchedApps = term
    ? apps.filter(a => a.title.toLocaleLowerCase().includes(term))
    : apps

  return (
    <>
    { 
      searchedApps.length!==0 ? 
      <div>

      <div className='flex justify-between items-center py-5'>
        <h1 className='font-bold text-2xl'>
          ({searchedApps.length}) Apps Found.
        </h1>

        <label className='input'>
          <input
            value={search}
            type='search'
            placeholder='Search Apps'
            onChange={e => setSearch(e.target.value)}
          />
        </label>
      </div>


      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-3 pb-8'>
        {searchedApps.map(app => (
          <AppCard
            key={app.id}
            app={app}
          />
        ))}
      </div>

    </div> : 
    <div className='flex flex-col gap-7 py-7 items-center justify-center'>
                <div>
                    <img src={err} />
                </div>
                <div className='text-[rgba(0,25,49,1)] font-inter text-[2rem] font-bold leading-[100%] text-left'>OPPS!! APP NOT FOUND</div>
                <div className='text-[rgba(0,25,49,1)] font-inter text-[1.5rem] font-normal leading-[1.5rem] text-left  opacity-[0.8]'>The App you are requesting is not found on our system.  please try another apps </div>
                <div>
                    <button onClick={() => setSearch('')} className="rounded-[0.4rem] bg-gradient-to-br from-[#632EE3] to-[#9F62F2] flex flex-row justify-center items-center gap-[1rem] px-[1.6rem] py-[1.2rem]">Go Back!</button>
                </div>
            </div>
    }
    
    </>
    
  )
}

export default Apps
