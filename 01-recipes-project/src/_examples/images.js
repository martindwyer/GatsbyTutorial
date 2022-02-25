import React from "react"
import styled from "styled-components"

import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
      <article>
        <h4>constrained </h4>
        <StaticImage
          height={400}
          width={null}
          src="../assets/images/recipe-1.jpeg"
          alt="big food"
          placeholder="tracedSVG"
          layout="constrained"
          className="example-img"
          as="section"
        />
      </article>

      <article>
        <h4>Fixed</h4>
        <StaticImage
          height={null}
          width={200}
          src="../assets/images/recipe-1.jpeg"
          alt="big food"
          placeholder="blurred"
          layout="fixed"
          className="example-img"
          as="div"
        />
      </article>
      <article>
        <h4>Full Width</h4>
        <StaticImage
          height={null}
          width={null}
          src="../assets/images/recipe-1.jpeg"
          alt="big food"
          placeholder="dominantColor"
          layout="fullWidth"
          className="example-img"
          as="article"
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid red;
  }

  .example-img {
    border-radius: 1rem;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export default Images
