import React from 'react'
import { Link } from 'react-router-dom'

export function Navbar() {
    

    return (
        <>
            <div className='navbar'>
                <h1>My webpage</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
        </>
    )
}
