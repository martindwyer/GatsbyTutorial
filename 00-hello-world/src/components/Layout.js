import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = props => {
  console.log(props)
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
