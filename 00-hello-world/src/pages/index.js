import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { page, text } from "../examples/home.module.css"

export default function Home() {
  return (
    <div className="page">
      <Layout>
        <h1>Hello world Cedar Rapids!</h1>
        <Link to="/about">About</Link>
        <Link to="/company/history">Company History</Link>
        This is the home page
      </Layout>
    </div>
  )
}
