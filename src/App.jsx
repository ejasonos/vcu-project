import { Outlet } from 'react-router'
import Sidebar from './components/Sidebar.jsx'

const App = () => {

  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  )
}

export default App
