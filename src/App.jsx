

import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
 const [location, setlocation] = useState()
useEffect(()  =>{
  const url ='https://rickandmortyapi.com/api/location/3'
  axios.get(url)
  .then(res)

}

)

  return (
    <>
      
    </>
  )
}

export default App
