import React from 'react'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import StudentInputs from './Components/StudentInputs/StudentInputs'

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <StudentInputs />
      <Footer />
    </div>
  )
}

export default App