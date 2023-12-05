import React from 'react'
import Home from './Pages/home/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import List from './Pages/list/List'
import Hotel from './Pages/hotel/Hotel'

function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' Component={Home}></Route>
  <Route path='/hotels' Component={List}></Route>
  <Route path='/hotels/:id' Component={Hotel}></Route>
</Routes>
</BrowserRouter>


    </>
  )
}

export default App