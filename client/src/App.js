import React, {useEffect} from 'react'
import axios from 'axios'
const App = () => {
  useEffect( () => {
      fetchData()
  }, []);

  const fetchData = async () => {
    const res = await axios.get('/users')
    console.log(res, 'res check')
  }

  return (
    <div>
      <h1>User</h1>
    </div>
  )
}

export default App
