import React from "react"
import AllRecipes from "../components/AllRecipes"

import Layout from "../components/Layout"

const Recipes = () => {
  return (
    <Layout>
      <div className="page">
        <AllRecipes />
      </div>
    </Layout>
  )
}

export default Recipes
