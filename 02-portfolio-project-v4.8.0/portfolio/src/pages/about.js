import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import AboutMe from "../components/AboutMe"
import Education from "../components/Education"
import certificates from "../components/Certificates"

import projects from "../constants/projects"
import Certificates from "../components/Certificates"

const About = () => {
  const featuredProjects = projects.filter(project => project.featured === true)
  return (
    <>
      <Seo title="About" />
      <main>
        <AboutMe />
        <Jobs />
        <Education />
        <Certificates />
        <Projects
          title="featured projects"
          showLink
          projects={featuredProjects}
        />
      </main>
    </>
  )
}

export default About
