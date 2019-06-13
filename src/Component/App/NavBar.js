import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
    <ul>
        <li>
            <Link to='/'>
                About me
            </Link>
        </li>
        <li>
            <Link to='/pages/contact'>
                Contact me
            </Link>
        </li>
        <li>
            <Link to='/pages/project'>
                My project
            </Link>
        </li>
    </ul>
)

export default NavBar