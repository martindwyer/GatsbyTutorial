import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "normalize.css"
import "../assets/css/main.css"

const Layout = props => {
  console.log(props)
  return (
    <React.Fragment>
      <Navbar />
      <div className="page">{props.children}</div>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
