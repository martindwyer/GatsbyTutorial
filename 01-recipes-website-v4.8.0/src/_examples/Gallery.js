import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { ne: "svg" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(
              width: 200
              height: 200
              layout: FIXED
              placeholder: BLURRED
            )
          }
          publicURL
        }
      }
    }
  `)
  const nodes = data.allFile.nodes

  return (
    <Wrapper>
      {nodes.map((image, index) => {
        const { name } = image

        if (image.childImageSharp) {
          return (
            <article key={index} className="item">
              <GatsbyImage
                image={image.childImageSharp.gatsbyImageData}
                alt={name}
                className="gallery-img"
              />
              <p>{name}</p>
            </article>
          )
        }
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;

  .item {
    margin-right: 1rem;
  }

  .gallery-img {
    border-radius: 1rem;
  }
`

export default ComponentName
