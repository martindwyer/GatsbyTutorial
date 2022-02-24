import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

import Images from "../_examples/images"

export default function Home() {
  return (
    <div>
      <Layout>
        <h1>Home Page</h1>
        <Images />
      </Layout>
    </div>
  )
}
