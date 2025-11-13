
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import PageNotFound from './pages/PageNotFound'
import AdminPage from './pages/AdminPage'
import FindDonorPage from './pages/FindDonorPage'

function App() {


  return (
    <>
        
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/adminpage' element={<AdminPage/>}/>
          <Route path='/finddonorpage' element={<FindDonorPage/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
 
    </>
  )
}

export default App
