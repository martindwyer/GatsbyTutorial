import React from "react"
import Layout from "../components/Layout"

const Error = () => {
  return (
    <Layout>
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
