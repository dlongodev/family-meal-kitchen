import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import styled from 'styled-components'

const Container = styled.div`
margin: 0 auto;
max-width: 1300px;
box-shadow: var(--shadow0);
display: flex;
flex-direction: column;
`

const Content = styled.main`
flex: 1 0 auto;
`
const Layout = ({ children }) => {
    return (
        <>
        <Container>
            <Content>
            <NavBar />
                {children}
            </Content>
            <Footer />
        </Container>
        </>
    )
}

export default Layout