import React from "react"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SearchEngineOptimization from "../components/SearchEngineOptimization"
import Layout from "../components/Layout"

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes

  return (
    <Layout>
      <SearchEngineOptimization title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>

            <p>
              Four dollar toast biodiesel plaid salvia actually pickled banjo
              bespoke mlkshk intelligentsia edison bulb synth.
            </p>

            <p>Cardigan prism bicycle rights put a bird on it deep v.</p>

            <p>
              Hashtag swag health goth air plant, raclette listicle fingerstache
              cold-pressed fanny pack bicycle rights cardigan poke.
            </p>
          </article>
          <article>
            <form
              action="https://formspree.io/f/myyojgzj"
              method="POST"
              className="form contact-form"
            >
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
                <button type="submit" className="btn block">
                  Submit
                </button>
              </div>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesauce!</h5>
          <RecipesList recipes={recipes} />
        </section>
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

export default Contact
