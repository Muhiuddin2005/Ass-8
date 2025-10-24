import React, { useState } from 'react'

import { loadInstalledapps, removeFromInstalledapps } from '../utils/localStorage'
import car1 from '../assets/icon-downloads.png'
import car2 from '../assets/icon-ratings.png'
import { toast } from 'react-toastify'

const Installedapps = () => {

  const [installedapps, setInstalledapps] = useState(() => loadInstalledapps())
  const [sortOrder, setSortOrder] = useState('none')

  if (!installedapps.length) return <div className='flex items-center justify-center mt-30'>No App Installed</div>


  const sortedItem = (() => {
    if (sortOrder === 'size-asc') {
      return [...installedapps].sort((a, b) => a.size - b.size)
    } else if (sortOrder === 'size-desc') {
      return [...installedapps].sort((a, b) => b.size - a.size)
    } else {
      return installedapps
    }
  })()


  const handleUninstall = id => {
    removeFromInstalledapps(id)
    setInstalledapps(prev => prev.filter(p => p.id !== id))
    toast.success("App uninstalled!")
  }


  return (
    <div>

      <div className='flex justify-between items-center py-5'>
        <p className='font-bold text-2xl'>
          ({sortedItem.length}) Apps Found.
        </p>

        <label className='form-control w-full max-w-xs'>
          <select
            className='select select-bordered'
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value='none'>Sort by size</option>
            <option value='size-asc'>Low-&gt;High</option>
            <option value='size-desc'>High-&gt;Low</option>
          </select>
        </label>
      </div>


      <div className='w-full'>
        {sortedItem.map(app => (
          <div key={app.id}>
            <div className="flex flex-row justify-center items-center gap-[1.6rem] p-[1.6rem] rounded-[0.4rem] bg-[#FFFFFF] w-full">
              <div className='flex'>
                <div><img
                  className='w-35 h-25'
                  src={app.image}
                  alt={app.title}
                /></div>
                <div className='flex flex-col'>
                 <div><p className='card-title'>{app.title} : {app.companyName}</p></div>
                 <div className='flex items-center justify-center'>
                  <div className='flex flex-row justify-center items-center gap-2 px-[10px] py-[6px] rounded-[4px]'>
                              <img src={car1} alt='downloads icon' />
                              <span>{app.downloads}</span>
                            </div>
                  <div className='flex flex-row justify-center items-center gap-2 px-[10px] py-[6px] rounded-[4px]'>
                              <img src={car2} alt='ratings icon' />
                              <span>{app.ratingAvg}</span>
                            </div>
                  <div>{app.size} MB</div>
                 </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleUninstall(app.id)}
                  className='cursor-pointer rounded-[0.4rem] bg-[#00D390] flex flex-row justify-center items-center gap-[1rem] px-[1.6rem] py-[1.2rem]'
                >
                  Uninstall
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Installedapps
