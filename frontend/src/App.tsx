import { useState } from 'react'
import NotificationButton from './components/NotificationButton/index'
import Header from './components/Header/index'
import SalesCard from './components/SalesCard/index'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <Header />

      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>

    </>


  )
}

export default App
