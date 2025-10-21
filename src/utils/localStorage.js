export const loadInstalledapps = () => {
  try {
    const data = localStorage.getItem('installedapps')
    return data ? JSON.parse(data) : []
  } 
  catch (err) {
    console.log(err)
    return []
  }
}


export const updateList = app => {

  const installedapps = loadInstalledapps()

  try {
    const duplicate = installedapps.some(item => item.id === app.id)
    if (duplicate) return alert('Already added in installedapps')

    const updatedInstalledapps = [...installedapps, app]
    localStorage.setItem('installedapps', JSON.stringify(updatedInstalledapps))

  } 
  catch (err) {
    console.log(err)
  }
}


export const removeFromInstalledapps = id => {

  const installedapps = loadInstalledapps()

  try {
    const updatedInstalledapps = installedapps.filter(item => item.id !== id)
    localStorage.setItem('installedapps', JSON.stringify(updatedInstalledapps))
  } 
  catch (err) {
    console.log(err)
  }
}
