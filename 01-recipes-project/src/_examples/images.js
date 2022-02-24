import React from "react"
import styled from "styled-components"
import big from "../assets/images/big.jpg"
import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
      <h2>Gatsby Image</h2>
      <StaticImage src="../assets/images/big.jpg" alt="big food" />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  img {
    width: 600px;
  }
`

export default Images
