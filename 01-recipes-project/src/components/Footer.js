import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      &copy; {new Date().getFullYear()}&nbsp; <span>SimpleRecipes</span>&nbsp;
      built with&nbsp; <a href="https://www.gatsbyjs.com/">Gatsby.js</a>
    </footer>
  )
}

export default Footer
