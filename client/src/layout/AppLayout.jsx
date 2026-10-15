import React from 'react'
import { NavLink, Outlet } from 'react-router'
import DashboardScreen from '../screes/DashboardScreen'
import StudentScree from '../screes/StudentScree'
import About from '../screes/About'

const AppLayout = () => {
    const [isAppReady, updateAppStatus] = React.useState(false)
    setTimeout(() => { 
        updateAppStatus(true)

    }, 3*1000);

    if (!isAppReady) {
        return <div>
            page is loading
        </div>

    }

    return (
        <div>
            <header>Header</header>
            <nav  >
                <ul style={{ listStyle: "none", textDecoration: "none" }}>
                    <li ><NavLink to={"/"} style={{ listStyle: "none", textDecoration: "none" }}> Dashboard </NavLink></li>
                    <li><NavLink to={"/student"} style={{ listStyle: "none", textDecoration: "none" }}> student </NavLink></li>
                    <li style={{ textDecoration: "none", listStyle: "none" }}><NavLink style={{ textDecoration: "none", color: "red", listStyle: "none" }} to={"/about"} > <About /> </NavLink></li>

                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </div>
    )
}

export default AppLayout