import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import projects from "../constants/projects"
const ProjectsPage = () => {
  return (
    <main>
      <section className="projects-page">
        <Projects title="all projects" projects={projects} />
      </section>
    </main>
  )
}

export default ProjectsPage
