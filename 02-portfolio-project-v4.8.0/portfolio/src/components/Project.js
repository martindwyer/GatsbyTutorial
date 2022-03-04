import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Project = ({ project }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    {
      allImageSharp {
        nodes {
          gatsbyImageData(width: 550)
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  `)
  const image = allImageSharp.nodes.find(
    node => node.parent.name === project.imageFile
  )
  let projectGatsbyImageData
  if (image) {
    projectGatsbyImageData = image.gatsbyImageData
    console.log(projectGatsbyImageData)
  }

  return (
    <article className="project">
      <GatsbyImage
        image={projectGatsbyImageData}
        className="project-img"
        alt={project.name}
      />
      <div className="project-info">
        <span className="project-number">0{project.id}.</span>
        <a href={project.liveUrl} className="project-slug">
          <h3>{project.name}</h3>
        </a>

        <p className="project-desc">{project.projectDescription}</p>
        <div className="project-stack">
          Technology Stack: <br />
          {project.stack.map((item, index) => {
            return <span key={index}>{item}</span>
          })}
        </div>
        <div className="project-links">
          <a href={project.repoUrl} target="_blank">
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={project.liveUrl} target="_blank">
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
