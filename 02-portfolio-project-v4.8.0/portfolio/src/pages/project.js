import React from "react"
import Seo from "../components/Seo"
import projects from "../constants/projects"

const ProjectPage = ({ location }) => {
  const { state } = location
  console.log(state.id)

  const project = projects.filter(
    project => project.id === parseInt(state.id)
  )[0]

  console.log(project)

  return (
    <>
      <article className="project"></article>
    </>
  )
}

export default ProjectPage
