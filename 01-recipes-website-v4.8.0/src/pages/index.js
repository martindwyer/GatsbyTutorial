import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SearchEngineOptimization from "../components/SearchEngineOptimization"

export default function Home({ data }) {
  const recipes = data.allContentfulRecipe.nodes

  return (
    <Layout>
      <SearchEngineOptimization title="Home" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>simply recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <div style={{ paddingBottom: "0rem" }}>
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(filter: { feature: { eq: true } }) {
      nodes {
        title
        servings
        prepTime
        image {
          gatsbyImageData
        }
        id
        feature
        cookTime
        contentful_id
        description {
          description
        }
        content {
          ingredients
          instructions
          id
          tags
          tools
        }
      }
    }
  }
`
