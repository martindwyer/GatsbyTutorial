import React from "react"
import Title from "./Title"
import services from "../constants/services"
import about from "../constants/about"

const AboutMe = () => {
  const {
    id,
    name,
    address,
    headline,
    aspiration,
    frontEndSkills,
    backEndSkills,
  } = about[0]
  return (
    <section className="section bg-grey">
      <Title title="About" />
      <div
        className="personal-info"
        style={{ textAlign: "center", marginBottom: "2rem" }}
      >
        <h3>{name}</h3>
        <p>{address}</p>

        <h5>{headline}</h5>
      </div>

      <div className="section-center services-center">
        {services.map(service => {
          const { id, icon, title, text } = service
          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default AboutMe
