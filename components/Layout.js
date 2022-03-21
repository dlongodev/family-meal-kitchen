import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

const Layout = ({ children }) => {
    return (
        <div style={{ margin: "0 auto", maxWidth: "1300px" }}>
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout