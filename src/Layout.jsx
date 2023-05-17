import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Heder'

const Layout = props => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

Layout.propTypes = {}

export default Layout