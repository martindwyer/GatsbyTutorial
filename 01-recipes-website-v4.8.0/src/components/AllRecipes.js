import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import TagsList from "./TagsList"
import RecipesList from "./RecipesList"

const AllRecipes = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulRecipe(sort: { fields: contentful_id }) {
        nodes {
          content {
            id
            ingredients
            instructions
            tags
            tools
          }
          cookTime
          prepTime
          feature
          id
          servings
          title
          description {
            description
          }
          image {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
        }
      }
    }
  `)
  const recipes = data.allContentfulRecipe.nodes

  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
