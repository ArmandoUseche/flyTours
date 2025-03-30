import Login from './assets/components/login'
import './App.css'
import Welcome from "./assets/components/WelcomePRU"
import { useState } from 'react'

function App() {
  const [user, setUser] = useState([])

  return (
    <>
    {
      user.length === 0
        ? <Login setUser={setUser} />
        : <Welcome user={user} setUser={setUser} />
    }
    </>
  )
}

export default App
