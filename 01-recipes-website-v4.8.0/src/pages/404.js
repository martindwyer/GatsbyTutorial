import React from "react"
import Layout from "../components/Layout"
import SearchEngineOptimization from "../components/SearchEngineOptimization"

const Error = () => {
  return (
    <Layout>
      <SearchEngineOptimization title="Error" />
      <div>
        <main className="error-page">
          <section>
            <h1>404</h1>
            <h3>page not found</h3>
          </section>
        </main>
      </div>
    </Layout>
  )
}

export default Error
