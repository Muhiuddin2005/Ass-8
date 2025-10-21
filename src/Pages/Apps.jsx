import { useState } from 'react'
import useApps from '../Hooks/useApps'
import AppCard from '../Components/AppCard'

const Apps = () => {
  const { loading, apps } = useApps()
  const [search, setSearch] = useState('')

  const term = search.trim().toLocaleLowerCase()

  const searchedApps = term
    ? apps.filter(a => a.title.toLocaleLowerCase().includes(term))
    : apps


  return (
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


      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {searchedApps.map(app => (
          <AppCard
            key={app.id}
            app={app}
          />
        ))}
      </div>

    </div>
  )
}

export default Apps
