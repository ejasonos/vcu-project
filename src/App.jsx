import { Outlet } from 'react-router'
import Navbar from './components/Navbar.jsx'

const App = () => {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
