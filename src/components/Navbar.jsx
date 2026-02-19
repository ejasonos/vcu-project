import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <>
          <nav className='m-6 flex justify-center space-x-5 bg-blue-300'>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
          </nav>
        </>
    )
}

export default Navbar