import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list page">
      {recipes.map((recipe, index) => {
        const { id, title, image, prepTime, cookTime } = recipe
        const pathToImage = getImage(image)
        return (
          <div>
            <Link to={`/${title}`} key={id}>
              <GatsbyImage
                image={pathToImage}
                className="recipe-img"
                alt={title}
              />
            </Link>
            <h5>{title}</h5>
            <p>
              Prep: {prepTime} min | Cook: {cookTime} min
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default RecipesList
