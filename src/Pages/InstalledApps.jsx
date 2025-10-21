import React, { useState } from 'react'

import { loadInstalledapps, removeFromInstalledapps } from '../utils/localStorage'

const Installedapps = () => {

  const [installedapps, setInstalledapps] = useState(() => loadInstalledapps())
  const [sortOrder, setSortOrder] = useState('none')


  if (!installedapps.length) return <p>No Data</p>


  const sortedItem = (() => {
    if (sortOrder === 'downloads-asc') {
      return [...installedapps].sort((a, b) => a.downloads - b.downloads)
    } else if (sortOrder === 'downloads-desc') {
      return [...installedapps].sort((a, b) => b.downloads - a.downloads)
    } else {
      return installedapps
    }
  })()


  const handleUninstall = id => {
    removeFromInstalledapps(id)
    setInstalledapps(prev => prev.filter(p => p.id !== id))
  }


  return (
    <div className='space-y-6'>

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
            <option value='none'>Sort by downloads</option>
            <option value='downloads-asc'>Low-&gt;High</option>
            <option value='downloads-desc'>High-&gt;Low</option>
          </select>
        </label>
      </div>


      <div className='space-y-3'>
        {sortedItem.map(app => (
          <div key={app.id} className='card card-side bg-base-100 shadow border'>
            <figure>
              <img
                className='w-35 h-25 object-cover'
                src={app.image}
                alt={app.title}
              />
            </figure>

            <div className='card-body'>
              <p className='card-title'>{app.title}</p>
            </div>

            <div className='flex gap-2 items-center '>
              <button
                onClick={() => handleUninstall(app.id)}
                className='btn btn-outline'
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Installedapps
