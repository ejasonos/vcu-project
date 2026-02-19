import { NavLink } from 'react-router'

const Sidebar = () => {
    return (
        <>
          <nav className="flex justify-center space-x-5 m-6 p-6 rounded-lg h-fit bg-[darkblue] text-white">
            <NavLink to='/gevcu'>GEVCU</NavLink>
            <NavLink to='/bms'>BMS</NavLink>
            <NavLink to='/aidiagnostics'>AI Diagnostics</NavLink>
          </nav>
        </>
    )
}

export default Sidebar