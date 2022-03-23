import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

const Layout = ({ children }) => {
    return (
        <div style={{ margin: "0 auto", maxWidth: "1300px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}>
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout