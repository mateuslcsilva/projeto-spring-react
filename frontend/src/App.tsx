import { useState } from 'react'
import NotificationButton from './components/NotificationButton/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NotificationButton />
    </div>
  )
}

export default App
