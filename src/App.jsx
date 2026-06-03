import React from 'react'
import Heading from './components/Heading'
import User from './components/User'

const App = () => {
  return (
    <div className='bg-[#FFFBF4] min-h-screen'>
      <div className='flex flex-col items-center justify-center'>
      <Heading />
      <User />
      </div>
    </div>
  )
}

export default App
