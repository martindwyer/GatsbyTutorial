import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import AboutMe from "../components/AboutMe"
import Education from "../components/Education"

import projects from "../constants/projects"

const About = () => {
  return (
    <>
      <main>
        <AboutMe />
        <Jobs />
        <Education />
        <Projects title="featured projects" showLink projects={projects} />
      </main>
    </>
  )
}

export default About
