import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"

const Projects = ({ title, projects }) => {
  return (
    <section className="section projects">
      <Title title={title} />

      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={index} project={project} />
        })}
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      </div>
    </section>
  )
}

export default Projects
