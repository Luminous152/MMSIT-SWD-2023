import React from 'react'

import ListCreateForm from './ListCreateForm'
import ListStatus from './ListStatus'
import ListGroup from './ListGroup'
import Heading from './Heading'

const App = () => {
  return (
   <main id="app" className="bg-zinc-100 flex flex-col min-h-screen">
  <div className="bg-white w-[450px] mx-auto mt-10 p-10">
  <Heading />
  <ListCreateForm />
  <ListStatus />
  <ListGroup />
    
  </div>
</main>

  )
}

export default App
