import React, { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import CategoriesContext from './context'
import Dashboard from './pages/Dashboard'
import TicketPage from './pages/TicketPage'

const App = () => {

  const [categories, setCategories] = useState(null)
  const value = {categories, setCategories}

  return (
    <div className='app'>
      <CategoriesContext.Provider value={value} >
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/ticket' element={<TicketPage />}/>
        <Route path='/ticket/:id' element={<TicketPage editMode={true} />}/>
      </Routes>
      </BrowserRouter>
      </CategoriesContext.Provider>
    </div>
  )
}

export default App
