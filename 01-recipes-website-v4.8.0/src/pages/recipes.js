import React from "react"
import AllRecipes from "../components/AllRecipes"
import SearchEngineOptimization from "../components/SearchEngineOptimization"
import Layout from "../components/Layout"

const Recipes = ({ recipes }) => {
  return (
    <Layout>
      <SearchEngineOptimization title="Recipes" />
      <div className="page">
        <AllRecipes />
      </div>
    </Layout>
  )
}

export default Recipes
