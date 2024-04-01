import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../Navbar'

export function MainLayout(props) {
    

    return (
        <>
            <Navbar/>            
            <Outlet/>
        </>
    )
}
